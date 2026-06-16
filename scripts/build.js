const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const COURSES = [
  { id: 'aws-cloud-practitioner', name: 'AWS Cloud Practitioner' },
  { id: 'claude-architect-foundation', name: 'Claude Architect Foundation' }
];

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'templates', 'layout.html');

// Create docs dir if not exists
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

function formatTitle(str) {
  return str.replace(/-/g, ' ')
            .replace(/\.md$/, '')
            .replace(/^\d+-/, '')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

function processDirectory(dir, basePath) {
  let items = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (file.startsWith('.')) continue; // skip hidden
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      items.push({
        type: 'dir',
        name: file,
        title: formatTitle(file),
        children: processDirectory(fullPath, path.join(basePath, file))
      });
    } else if (file.endsWith('.md') || file.endsWith('.html')) {
      items.push({
        type: 'file',
        name: file,
        title: formatTitle(file.replace(/\.html$/, '')),
        path: fullPath,
        relPath: path.join(basePath, file).replace(/\\/g, '/'),
        isHtml: file.endsWith('.html')
      });
    }
  }
  
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

function buildSidebar(items, courseId, rootDepth) {
  let html = '';
  for (const item of items) {
    if (item.type === 'dir') {
      html += `<div class="nav-group">
        <div class="nav-group-title">${item.title}</div>
        ${buildSidebar(item.children, courseId, rootDepth)}
      </div>`;
    } else {
      const outRelPath = item.relPath.replace(/\.md$/, '.html');
      html += `<a href="${rootDepth}${courseId}/${outRelPath}" class="nav-link">${item.title}</a>\n`;
    }
  }
  return html;
}

function generateSite() {
  for (const course of COURSES) {
    const courseDir = path.join(ROOT_DIR, course.id);
    if (!fs.existsSync(courseDir)) continue;
    
    // Read the structure
    const structure = processDirectory(courseDir, '');
    
    // Flatten for pagination
    const flatFiles = [];
    function flatten(items) {
      for (const item of items) {
        if (item.type === 'dir') flatten(item.children);
        else flatFiles.push(item);
      }
    }
    flatten(structure);
    
    // Process each file
    for (let i = 0; i < flatFiles.length; i++) {
      const fileNode = flatFiles[i];
      const outPath = path.join(DOCS_DIR, course.id, fileNode.relPath).replace(/\.md$/, '.html');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      if (fileNode.isHtml) {
        // Just copy html files directly (like mock tests)
        fs.copyFileSync(fileNode.path, outPath);
        console.log(`Copied: ${outPath}`);
        continue;
      }

      let mdContent = fs.readFileSync(fileNode.path, 'utf-8');
      
      // Strip legacy "stop reading markdown" banners so they don't appear on the live site.
      mdContent = mdContent.replace(/# .*STOP READING MARKDOWN.*[\s\S]*?Click the link above to start studying the right way!\s*---/g, '');

      // Fix relative markdown links to .html
      mdContent = mdContent.replace(/\]\(([^)]+)\.md(#[^)]+)?\)/g, ']($1.html$2)');
      
      const htmlContent = marked.parse(mdContent);
      
      // Calculate depth for ROOT_PATH
      const depth = fileNode.relPath.split('/').length; 
      let rootPath = '../';
      for (let j = 1; j < depth; j++) {
        rootPath += '../';
      }
      
      const sidebarHtml = buildSidebar(structure, course.id, rootPath);
      
      // Pagination
      const prev = i > 0 ? flatFiles[i-1] : null;
      const next = i < flatFiles.length - 1 ? flatFiles[i+1] : null;
      
      let prevLink = '';
      if (prev) {
        prevLink = `<a href="${rootPath}${course.id}/${prev.relPath.replace(/\.md$/, '.html')}" class="page-link prev">
          <span class="page-link-label">Previous</span>
          <span class="page-link-title">&larr; ${prev.title}</span>
        </a>`;
      }
      let nextLink = '';
      if (next) {
        nextLink = `<a href="${rootPath}${course.id}/${next.relPath.replace(/\.md$/, '.html')}" class="page-link next">
          <span class="page-link-label">Next</span>
          <span class="page-link-title">${next.title} &rarr;</span>
        </a>`;
      }

      // Replace placeholders
      let finalHtml = template
        .replace(/{{TITLE}}/g, fileNode.title)
        .replace(/{{COURSE_NAME}}/g, course.name)
        .replace(/{{ROOT_PATH}}/g, rootPath)
        .replace(/{{SIDEBAR}}/g, sidebarHtml)
        .replace(/{{CONTENT}}/g, htmlContent)
        .replace(/{{PREV_LINK}}/g, prevLink)
        .replace(/{{NEXT_LINK}}/g, nextLink);
        
      // Write to docs
      fs.writeFileSync(outPath, finalHtml, 'utf-8');
      console.log(`Built: ${outPath}`);
    }
  }
  
  // Copy and fix index.html for GitHub Pages serving from /docs
  let indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf-8');
  indexContent = indexContent.replace(/href="docs\//g, 'href="');
  fs.writeFileSync(path.join(DOCS_DIR, 'index.html'), indexContent, 'utf-8');
  console.log('Built: docs/index.html');

  console.log('Build complete!');
}

generateSite();
