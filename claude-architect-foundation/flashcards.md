# Claude Architect Foundation Flashcards

> **Certification:** Claude Certified Architect - Foundations  
> **Best Use:** Fast recall after reading the course once  
> **Reminder:** Always verify current certification access, pricing, and rules in Anthropic Academy.

---

## How To Study These Cards

Use these cards after each section, then again before the mock test. For each card, say the answer first and then check the explanation. If a card feels unclear, revisit the related course chapter.

---

## High-Yield Flashcards

| Front | Back |
|---|---|
| What does HHH mean? | Helpful, Harmless, Honest. |
| Are Claude API calls stateful by default? | No. The application must send prior context. |
| What is the context window? | The maximum input/output context the model can consider in one request. |
| Why is a larger context window not always enough? | Attention can degrade; use focused context, retrieval, summaries, and chunking. |
| When should you use prompt chaining? | When a task is best split into ordered dependent steps. |
| When should you use routing? | When inputs should go to different prompts, tools, or workflows. |
| When should you use orchestrator-workers? | When a central model coordinates specialized subtasks. |
| What is an agent loop? | Observe, decide, act, evaluate, repeat until done or stopped. |
| Biggest risk of open-ended agent loops? | Unbounded cost, unsafe actions, looping, or tool misuse. |
| Does Claude directly execute tools? | No. Claude requests a tool call; the client executes it and returns a result. |
| What makes a good tool description? | Clear purpose, when to use, inputs, limits, and expected result. |
| What does a tool schema define? | The structured input contract for tool arguments. |
| What is MCP? | Model Context Protocol, a standard for connecting models to tools, resources, and prompts. |
| In MCP, what is a tool? | An action the model can request through a server. |
| In MCP, what is a resource? | Read-only context or data exposed by a server. |
| In MCP, what is a prompt? | A reusable instruction template. |
| Protocol error vs tool error? | Protocol error means communication/schema failed; tool error means the operation failed. |
| Why use JSON schema for extraction? | Machine-readable output with structure validation. |
| What should the model output when a field is missing? | `null`, if the schema allows it, rather than guessing. |
| Why add confidence scores? | To route uncertain fields to validation or human review. |
| When is batch processing a good fit? | Large asynchronous work that is not latency-sensitive. |
| Why is batch bad for tool-calling review? | Tool-calling needs an interactive request/result loop. |
| What belongs in project-level `CLAUDE.md`? | Shared team/project instructions. |
| What belongs in user-level `~/.claude/CLAUDE.md`? | Personal preferences. |
| When should exemplar code become a Skill? | When it applies only to a specific workflow and should be invoked on demand. |
| Why use independent review? | It reduces confirmation bias from the generating session. |
| How avoid duplicate PR review comments? | Include prior findings and report only new or still-unaddressed issues. |
| Best format for automated PR comments? | Structured JSON with schema: path, line, severity, message, fix. |
| How make comment/docstring review consistent? | Flag only claims that contradict actual code behavior. |
| Good Claude Code workflow? | Explore, plan, edit, verify, summarize. |

---

For printable cards or Anki import, see the repository file:
<a href="https://github.com/mohammadquasif/certification-study-hub/blob/main/flashcards/claude-foundation-flashcards.md">flashcards/claude-foundation-flashcards.md</a>.
