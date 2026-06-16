# CLAUDE.md & Skills — Project-Level Instructions and On-Demand Workflows

> **Exam:** Claude Architect Foundation
> **Chapter:** 05 — Claude Code & Developer Workflows
> **Difficulty:** Intermediate
> **Last Updated:** 2026-06

---

## 📖 What Is This Topic About?

Claude Code can be customised and extended in two powerful ways: **CLAUDE.md** files provide always-on instructions that are automatically loaded every session; **Skills** provide on-demand workflows that are activated by name when needed. Knowing the difference between these two mechanisms — and when to use each — is an important exam topic.

---

## 🧠 Key Concepts

- **CLAUDE.md** — A Markdown file that Claude Code automatically reads at the start of every session; used for universal instructions, project context, and persistent standards
- **Skills** — Reusable, on-demand workflow definitions that can be invoked by name (e.g., `/run-linter`, `/generate-report`); activated only when called, not loaded for every session
- **Project-Level CLAUDE.md** — Placed in the repository root; applies to all team members using Claude Code on that project
- **User-Level CLAUDE.md** — Placed in the user's home directory; applies to all projects for that individual user
- **Skill Definition** — A Markdown file (or CLAUDE.md section) that defines the steps, tools, and context for a specific reusable workflow
- **Slash Command** — The syntax for invoking a Skill (e.g., `/deploy-docs`, `/run-security-scan`)

---

## 📘 Detailed Explanation

### CLAUDE.md — Always-On Instructions

CLAUDE.md is loaded automatically at the start of every Claude Code session. Think of it as the "standing orders" for Claude when working on this project:

```
┌────────────────────────────────────────────────────────────────────┐
│                    CLAUDE.md USE CASES                             │
│                                                                    │
│  ✅ Project overview and architecture                              │
│     "This is a Django REST API. The main app is in /api/. Tests   │
│      live in /tests/ and use pytest."                              │
│                                                                    │
│  ✅ Universal coding standards                                     │
│     "Use single quotes in Python, not double quotes.               │
│      Run `ruff check .` before committing."                        │
│                                                                    │
│  ✅ File structure conventions                                     │
│     "New feature modules go in /api/modules/. Each module has:     │
│      models.py, views.py, urls.py, tests.py"                       │
│                                                                    │
│  ✅ External service instructions                                  │
│     "This project uses Sentry for error tracking. When adding a   │
│      new endpoint, ensure it has a try-except with Sentry.capture. │
│                                                                    │
│  ✅ Environment-specific information                               │
│     "Dev DB is at localhost:5432. Do NOT run migration scripts     │
│      unless the user explicitly confirms."                         │
│                                                                    │
│  ❌ NOT appropriate for CLAUDE.md:                                 │
│     One-off task instructions ("today, fix the login bug")        │
│     Workflow steps rarely needed ("deploy to production")         │
│     Instructions relevant only to one developer's machine         │
└────────────────────────────────────────────────────────────────────┘
```

---

### Project vs User CLAUDE.md

```
PROJECT-LEVEL CLAUDE.md (in repo root /CLAUDE.md):
• Shared across ALL team members who use Claude Code on this repo
• Contains: project architecture, coding standards, test patterns
• Committed to version control — subject to code review
• Affects: everyone who clones and uses Claude Code on this project

USER-LEVEL CLAUDE.md (~/.claude/CLAUDE.md or equivalent):
• Applies to THIS developer across ALL their projects
• Contains: personal preferences, preferred comment style, tool aliases
• NOT committed to the repo — private to the individual
• Affects: only the individual user, regardless of which project they're in
```

---

### Skills — On-Demand Workflows

Unlike CLAUDE.md (always loaded), Skills are activated only when invoked by name. They define reusable workflows:

```
EXAMPLE SKILL DEFINITION (in CLAUDE.md or a separate .skills/ file):

## /generate-api-docs

**Description:** Generates API documentation for all routes in a module.
**Activation:** Type `/generate-api-docs` followed by the module name.

**Steps:**
1. Glob for all files matching `*routes.py` in the specified module
2. Read each file and extract route definitions, parameters, and return schemas
3. Generate a Markdown documentation file in `/docs/api/[module-name].md`
4. Update `/docs/api/README.md` with a link to the new file
5. Confirm completion and list the files created/updated

**Example:** `/generate-api-docs payments`
```

---

### When to Use CLAUDE.md vs Skills

| Scenario | CLAUDE.md | Skill |
|---|---|---|
| Standards all devs should follow always | ✅ | ❌ |
| Rarely needed deployment workflow | ❌ | ✅ |
| Architecture overview for all sessions | ✅ | ❌ |
| One-off test generation for a specific module | ❌ | ✅ |
| Naming conventions for new files | ✅ | ❌ |
| Weekly report generation process | ❌ | ✅ |
| Environment variables and secrets location | ✅ | ❌ |
| Complex multi-step refactoring | ❌ | ✅ |

**Decision rule:** CLAUDE.md = context and standards that are always relevant. Skills = specific multi-step workflows invoked occasionally.

---

### Exam Pattern: Exemplar Code Belongs in a Skill When It Is Workflow-Specific

A common exam scenario describes a team with excellent exemplar implementations, such as "gold standard" API endpoints, service classes, or test files. The key decision is whether those examples should be loaded every session or only when generating similar code.

Use this rule:

| Exemplar Usage | Best Home | Why |
|---|---|---|
| Needed only when creating a new API endpoint | Skill such as `/new-api-endpoint` | Loaded on demand, avoids wasting context during unrelated tasks |
| Needed for every code edit in the project | Project CLAUDE.md | Always relevant to all sessions |
| Personal preference for one developer only | User-level CLAUDE.md | Applies only to that developer |
| One-time reference for a single task | Prompt or file reference in that task | Does not need permanent configuration |

**Scenario:** A backend team wants Claude Code to generate new REST endpoints that match three existing exemplar endpoints. Those exemplars are not useful for bug fixes, dependency updates, code review, or documentation edits.

**Best answer:** Create a Skill that references the exemplar endpoint files and includes pattern-following instructions. Invoke it only when creating new endpoints.

**Why not CLAUDE.md?** The examples would consume context in every session even when Claude is doing unrelated work.

---

### Exam Pattern: Team Members Getting Different Claude Code Results

If experienced team members get one behavior from Claude Code but a new team member does not, check where the instruction lives.

```
Symptom:
Existing developers: Claude follows payment-service-layer rule
New developer: Claude does not follow that rule

Likely cause:
The rule exists in existing developers' user-level ~/.claude/CLAUDE.md files
instead of the repository's project-level CLAUDE.md.

Best fix:
Move team-wide rules into project-level CLAUDE.md and commit it to the repo.
```

**Exam memory:** If everyone on the project must receive the instruction, it belongs in project-level CLAUDE.md. If only one user should receive it, it belongs in user-level CLAUDE.md.

---

### The CLAUDE.md Token Budget Concern

CLAUDE.md is loaded into every session's context. If it is extremely long, it:
1. Consumes significant context tokens from the start of every session
2. May push actual work context toward the limit faster
3. Adds latency to session startup

**Best practice:** Keep CLAUDE.md focused on the most important universal instructions. Move rarely-needed workflows to Skills. For very large projects, use nested CLAUDE.md files (one per subdirectory) so only the relevant subdirectory's instructions are loaded.

---

### Nested CLAUDE.md Files

For large monorepos with multiple services:

```
/                      ← Root CLAUDE.md: universal project standards
├── CLAUDE.md
├── services/
│   ├── api/
│   │   └── CLAUDE.md  ← API-specific: DRF patterns, serialiser conventions
│   ├── frontend/
│   │   └── CLAUDE.md  ← Frontend-specific: React component patterns, Tailwind
│   └── ml-pipeline/
│       └── CLAUDE.md  ← ML-specific: data pipeline conventions, model registry
```

When Claude Code is working inside `/services/api/`, both the root CLAUDE.md and the api-level CLAUDE.md are loaded. This prevents the root CLAUDE.md from becoming a massive, unmanageable file.

---

## 🇮🇳 Indian Real-Life Example

**CLAUDE.md = Office Standing Orders at an ISRO Mission Control:**

At an ISRO mission control room, there are standing orders posted on the wall — always visible to everyone. "All communications logged. No personal devices. Ground truth is the telemetry feed." These don't change and apply to everyone, every day.

**Skills = The Operations Runbook:**

But specific procedures — "what to do during a trajectory correction burn" or "how to handle a communication blackout" — are written in a runbook. Engineers don't memorise the entire runbook. They activate the relevant procedure when the situation arises.

CLAUDE.md = standing orders (always visible). Skills = runbook procedures (invoked when needed).

---

## 🔑 Exam-Focused Points

- ✅ **CLAUDE.md** = loaded automatically every session; for universal instructions and project context
- ✅ **Skills** = invoked on demand by slash command; for specific multi-step workflows
- ✅ **Project-level** CLAUDE.md = committed to repo, applies to all team members
- ✅ **User-level** CLAUDE.md = personal file, applies to all projects for that user, not committed to repo
- ✅ CLAUDE.md consumes context tokens every session — keep it focused, not exhaustive
- ✅ Nested CLAUDE.md in subdirectories: loaded only when working in that directory — better for monorepos

---

## 🧩 Scenario-Based Thinking

**Scenario:** A team has a complex 15-step deployment process to production that is run once per sprint. A junior developer keeps forgetting steps 7 and 12. The team is deciding between adding the deployment process to CLAUDE.md or defining it as a Skill.

**Which approach is more appropriate?**

- A) Add it to CLAUDE.md — it's critical enough to always have available
- B) Define it as a Skill (`/deploy-to-production`) — it's a structured workflow run occasionally, not something needed in every session
- C) Both — add a brief reference in CLAUDE.md and define the full steps as a Skill
- D) Neither — use a separate checklist tool outside Claude Code

**Answer:** B (with C being a reasonable choice, but B is the primary answer)

**Explanation:** A 15-step process run once per sprint is an infrequently used, structured workflow — the perfect definition of a Skill. Adding it to CLAUDE.md means the 15 steps consume context tokens in every session (including debugging sessions where deployment is completely irrelevant). A Skill (`/deploy-to-production`) activates exactly when needed and keeps CLAUDE.md lean.

---

## 💡 Memory Tricks

**CLAUDE.md = Reading Glasses:** You put them on every morning automatically — they apply to everything you do all day. Skills = Specialised Safety Equipment: you grab your hard hat or lab coat only when the specific task requires it.

**Project CLAUDE.md = Office Notice Board:** Everyone sees it, no one owns it personally. User CLAUDE.md = Personal Post-It Notes on your own monitor: only you see them, across every office you work in.

---

## ❓ Chapter Practice Questions

**Q1.** A team wants to ensure that all team members using Claude Code consistently follow the same database migration safety rules (always run migrations in a transaction, always back up before production migrations). Where is the most appropriate place to document these rules?

- A) A user-level CLAUDE.md file for each developer
- B) A project-level CLAUDE.md file committed to the repository
- C) A Skill definition that developers invoke before each migration
- D) A README section that developers read manually

**Answer:** B

**Explanation:** Rules that must apply to ALL team members for ALL sessions on this project belong in the project-level CLAUDE.md. User-level files (A) are personal and won't apply to the whole team. A Skill (C) requires developers to remember to invoke it — the standing rules (use transactions, back up first) should always be visible, not manually activated.

---

**Q2.** A developer notices that their CLAUDE.md has grown to 8,000 words, covering project architecture, coding standards, test patterns, deployment processes, and troubleshooting guides. They notice sessions are slower to start and Claude occasionally seems "distracted." What is the most effective fix?

- A) Split the project into multiple smaller repositories to distribute the CLAUDE.md content
- B) Delete all CLAUDE.md content and rely on Claude's in-weights training knowledge
- C) Move rarely-invoked workflows (deployment, troubleshooting) to Skills; use nested CLAUDE.md files for service-specific standards; retain only universal, always-relevant instructions in the root CLAUDE.md
- D) Convert all CLAUDE.md content to inline comments in the codebase

**Answer:** C

**Explanation:** A massive CLAUDE.md consumes context tokens in every session, reducing the space available for actual work. The fix is proportional: move workflows to Skills (invoked only when needed), distribute service-specific instructions to nested CLAUDE.md files, and keep the root CLAUDE.md focused on what's truly universal. This keeps each session lean without losing any guidance.

---

**Q3.** A developer uses Claude Code on three different projects daily. They have personal conventions that apply everywhere: always use type hints in Python, prefer f-strings over `.format()`, and use British English spellings in comments. Where should these preferences be documented?

- A) In each project's CLAUDE.md so Claude follows them on all projects
- B) In the developer's user-level CLAUDE.md (`~/.claude/CLAUDE.md`)
- C) In a Skill invoked at the start of each session on each project
- D) In the system prompt when launching Claude Code each time

**Answer:** B

**Explanation:** Personal conventions that apply across all projects for one developer belong in the user-level CLAUDE.md. Adding them to each project's CLAUDE.md (A) is redundant (multiply maintained) and would impose the developer's personal preferences on the whole team. The user-level file is the correct place for individual, cross-project preferences.

---

**Q4.** A backend team keeps three excellent endpoint implementations as examples for creating new endpoints. These examples are useful only when scaffolding a new endpoint and are not useful for bug fixes, reviews, dependency updates, or documentation edits. What is the best Claude Code configuration?

- A) Put all exemplar endpoint code in the root CLAUDE.md so it is always visible
- B) Put the examples in every developer's user-level CLAUDE.md
- C) Add only "follow existing endpoint patterns" to CLAUDE.md and provide no references
- D) Create a Skill that references the exemplar endpoints and includes pattern-following instructions, invoked on demand by slash command

**Answer:** D

**Explanation:** Exemplar endpoint code is workflow-specific context. A Skill loads it when generating endpoints and avoids wasting context during unrelated tasks. CLAUDE.md should stay focused on instructions that matter in almost every session.

---

**Q5.** Existing developers on a project see Claude Code enforce a service-layer rule, but a new developer who cloned the same repository does not. What is the most likely cause?

- A) Claude Code ignores architecture rules for new users
- B) The new developer needs a longer conversation before Claude follows project patterns
- C) The rule should be moved from project CLAUDE.md into a Skill
- D) The rule exists in the original developers' user-level `~/.claude/CLAUDE.md` files instead of the repository's project-level CLAUDE.md

**Answer:** D

**Explanation:** User-level CLAUDE.md files are personal and not shared with teammates. Team-wide rules must be placed in project-level CLAUDE.md and committed to the repository.

---

## 📌 Quick Revision Summary

- CLAUDE.md: automatically loaded every session; for universal instructions and project context
- Skills: invoked on demand by slash command; for multi-step workflows invoked occasionally
- Project CLAUDE.md: committed to repo, applies to all team members
- User CLAUDE.md: personal, applies to all projects for that user, not committed to repo
- CLAUDE.md consumes context every session — keep it focused; move workflows to Skills
- Nested CLAUDE.md: service-specific instructions loaded only in that subdirectory (good for monorepos)

---

## 📎 References

- [Anthropic Documentation — Claude Code Customisation](https://docs.anthropic.com/en/docs/claude-code)

---

*Notes by certification-study-hub. Chapter 05 — CLAUDE.md & Skills.*
