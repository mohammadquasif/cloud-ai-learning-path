# 🤖 Claude Architect Foundation — Study Hub

Welcome to the Claude Architect Foundation section of certification-study-hub!

### 🌟 Did you get certified using this repo?
If this repo helped you pass your exam, please consider **giving it a star ⭐** to help other students find it!

---

# 🛑 STOP READING MARKDOWN! 🛑
## 👉 [GO TO THE INTERACTIVE COURSE DASHBOARD](https://mohammadquasif.github.io/certification-study-hub/docs/claude-architect-foundation/README.html) 👈

We have converted this entire course into a beautiful, interactive website with sidebar navigation, dark mode, and a built-in mock test engine. 

**Do not read the raw markdown files here.** 

Click the link above to start studying the right way!

---

## 📂 Folder Structure

```
claude-architect-foundation/
├── README.md                              ← You are here
├── 01-introduction-to-claude/
│   ├── what-is-claude.md
│   ├── how-claude-thinks.md
│   └── constitutional-ai-and-safety.md
├── 02-agentic-patterns/
│   ├── what-is-an-agent.md
│   ├── orchestrator-and-workers.md
│   ├── prompt-chaining-and-routing.md
│   └── session-and-context-management.md
├── 03-tool-use-and-mcp/
│   ├── introduction-to-tool-use.md
│   ├── designing-good-tools.md
│   ├── error-handling-in-tools.md
│   ├── mcp-architecture.md
│   └── confirmation-and-safety-gates.md
├── 04-structured-output-and-extraction/
│   ├── json-schema-for-extraction.md
│   ├── handling-ambiguity-and-nulls.md
│   ├── confidence-and-human-review.md
│   ├── batch-processing.md
│   └── long-document-extraction.md
├── 05-claude-code-and-workflows/
│   ├── introduction-to-claude-code.md
│   ├── claude-md-and-skills.md
│   ├── session-management.md
│   ├── code-review-workflows.md
│   └── exploration-patterns.md
├── practice-questions/
│   └── chapter-wise-questions.md
├── mock-tests/
│   ├── caf-mock-test-60q.html            ← 🔥 Interactive 60-Question Test
│   └── mock-test-01.md
└── revision-notes/
    └── quick-revision.md
```

---

## 📋 Exam Overview

| Item | Detail |
|---|---|
| Certificate | Claude Architect Foundation |
| Provider | Anthropic |
| Format | Online assessment |
| Number of Questions | ~60 questions |
| Duration | ~60 minutes |
| Focus | Responsible AI, Claude architecture, tool use, agentic patterns, structured output |
| Level | Beginner / Foundation |

> Check the official Anthropic website for the latest exam details, as this information may change.

---

## 🗂️ Exam Domain Breakdown

| Domain | Estimated Weight | What It Tests |
|---|---|---|
| Claude Fundamentals & Architecture | ~15% | What Claude is, how the agentic loop works, context windows |
| Agentic Patterns & Multi-Agent Systems | ~25% | Orchestrators, workers, prompt chaining, routing, session management |
| Tool Use & MCP Design | ~25% | Tool definitions, error handling, MCP architecture, safety gates |
| Structured Output & Extraction | ~20% | JSON schemas, ambiguity, batch processing, human review |
| Claude Code & Developer Workflows | ~15% | CLAUDE.md, Skills, session resumption, code review patterns |

**Tool Use and Agentic Patterns together = ~50% of the exam. Focus here first.**

---

## ✅ Interactive Study Tracker

Follow the chapters in this order for best results. Check them off as you go!

- `[ ]` `01-introduction-to-claude/` — Understand what Claude is and how it works
- `[ ]` `02-agentic-patterns/` — Learn how agents think, plan, and act
- `[ ]` `03-tool-use-and-mcp/` — Master tool use and MCP design — tested heavily
- `[ ]` `04-structured-output-and-extraction/` — JSON schemas, extraction patterns, batch processing
- `[ ]` `05-claude-code-and-workflows/` — Practical developer workflows with Claude Code

Then:
- `[ ]` **Practice Questions** (`chapter-wise-questions.md`)
- `[ ]` **Revision Notes** (`quick-revision.md`)
- `[ ]` **Mock Tests** (`caf-mock-test-60q.html`)

---

## 📖 Interactive Study Guide (Live on GitHub Pages)

You can read the full study guide with interactive sidebar navigation directly in your browser:
👉 **[Read the Full Claude Architect Foundation Course](https://mohammadquasif.github.io/certification-study-hub/docs/claude-architect-foundation/README.html)**

---

## 🔥 Interactive Mock Test

Take the full 60-question mock test with a timer, auto-scoring, and detailed results directly in your browser:

👉 **[Take the Claude Mock Test Live](https://mohammadquasif.github.io/certification-study-hub/docs/claude-architect-foundation/mock-tests/caf-mock-test-60q.html)**

---

## 🧠 Psychological Tips for Better Preparation
1. **The Forgetting Curve**: You will forget 50% of what you learn within 24 hours unless you review it. Use the `flashcards/` for spaced repetition.
2. **Active Recall**: Don't just read the notes passively. After each chapter, close the tab and try to explain the core concepts out loud to an imaginary 10-year-old.
3. **Mock Exam Environment**: When taking the mock test, treat it like the real exam. Sit in a quiet room, don't check your phone, and time yourself strictly. This trains your brain to handle exam pressure.
4. **Learn from Mistakes**: Getting a practice question wrong is the best way to learn. Always read the explanations, even if you guessed correctly.

---

## 💡 Top Exam Tips (Based on the 60 Question Set)

- **The Agentic Loop** — Know the `observe → think → act → observe` cycle deeply. When an agent gets an error, it observes it and thinks about a retry strategy.
- **Tool Error Handling** — `isError: true` + structured error metadata (`errorCategory`, `isRetryable`) is the standard pattern. Never throw raw backend exceptions directly to Claude.
- **Context Degradation vs Limits** — Even if a 190,000-token document fits within the 200,000 limit, effective attention degrades near the end. Use overlapping chunking to extract scattered information reliably.
- **Handling Missing Data (Null vs Fabrication)** — When extracting data, type optional fields as `['string', 'null']`. If the data isn't in the source text, returning `null` is mandatory. Do not let Claude fabricate "Not Specified" strings.
- **Safety Gates for Irreversible Actions** — Any action with real-world consequences (deleting workspaces, sending emails, booking rooms) *must* include a Human-in-the-Loop step. A programmatic token exchange is the safest way to enforce this.
- **Routing vs Chaining** — Use *Routing* when you have different inputs that need different handlers (e.g., classify language first). Use *Prompt Chaining* when you have a sequential, multi-step process where step B requires step A's output.
- **Independent Code Review** — A fresh agent session reviewing code avoids confirmation bias. An agent reviewing its own generated code will just confirm its own design intent.
- **Plan Mode & Exploration** — For large unfamiliar codebases, use "Architecture-first exploration" (orient, locate core class, trace). For major refactors, use Plan Mode to document the impact on all dependencies *before* changing anything.
- **MCP vs Tool Use** — MCP is a protocol for connecting Claude to external servers without hardcoding integrations; Tool Use is the underlying mechanism Claude uses to execute those functions.
- **CLAUDE.md vs Skills** — `CLAUDE.md` is for universal, always-on project standards. `Skills` are for infrequent, on-demand tasks (like load testing) to save context window tokens.

---

Start with `01-introduction-to-claude/what-is-claude.md` 👇
