# Claude Architect Foundation Flashcards

> **Certification:** Claude Certified Architect - Foundations  
> **Use:** Fast recall after reading the Claude course  
> **Important:** Verify current certification access and exam details in Anthropic Academy before attempting certification.

---

## Claude Fundamentals

### Card 1

**Front:** What does HHH stand for in Claude safety behavior?

**Back:** Helpful, Harmless, and Honest.

### Card 2

**Front:** Are Claude API calls stateful by default?

**Back:** No. API calls are stateless unless the application sends prior context in the request.

### Card 3

**Front:** What is the context window?

**Back:** The maximum amount of input and output context the model can consider in one request.

### Card 4

**Front:** Why is a larger context window not always enough?

**Back:** Long context can reduce attention quality. Good architecture still uses chunking, retrieval, summaries, and focused context.

### Card 5

**Front:** What is Constitutional AI?

**Back:** A safety training approach where model behavior is guided by principles instead of only human-written labels.

---

## Agentic Patterns

### Card 6

**Front:** When should you use prompt chaining?

**Back:** When a task can be split into ordered steps where each step depends on the previous output.

### Card 7

**Front:** When should you use routing?

**Back:** When inputs should be classified and sent to different prompts, tools, or workflows.

### Card 8

**Front:** When should you use orchestrator-workers?

**Back:** When a central model plans or coordinates subtasks and workers complete specialized pieces.

### Card 9

**Front:** What is an agent loop?

**Back:** A repeated observe, decide, act, and evaluate cycle where the model can use tools until the task is complete or stopped.

### Card 10

**Front:** What is the biggest risk in open-ended agent loops?

**Back:** Unbounded cost, unsafe actions, loops without progress, or tool misuse. Add budgets, stopping conditions, and safety gates.

### Card 11

**Front:** Why should high-risk actions use confirmation gates?

**Back:** Prompt instructions alone are not enough. Application controls should confirm destructive, costly, or external side-effect actions.

---

## Tool Use And MCP

### Card 12

**Front:** Does Claude directly execute tools?

**Back:** No. Claude requests a tool call. The client application executes the tool and returns the result.

### Card 13

**Front:** What makes a good tool description?

**Back:** It clearly says what the tool does, when to use it, required inputs, limitations, and what result to expect.

### Card 14

**Front:** What is a tool schema used for?

**Back:** It defines the structured input contract for a tool so the model can produce valid arguments.

### Card 15

**Front:** What should the application return after executing a tool?

**Back:** A tool result containing the relevant output or error information for Claude to continue.

### Card 16

**Front:** What is MCP?

**Back:** Model Context Protocol, a standard way for AI applications to connect to tools, resources, and prompts.

### Card 17

**Front:** In MCP, what is a tool?

**Back:** An action the model can request, such as searching, reading, creating, or updating something through the server.

### Card 18

**Front:** In MCP, what is a resource?

**Back:** Read-only or contextual data exposed by a server, such as files, records, or schemas.

### Card 19

**Front:** In MCP, what is a prompt?

**Back:** A reusable instruction template exposed by an MCP server.

### Card 20

**Front:** What is the difference between protocol errors and tool errors?

**Back:** Protocol errors mean MCP communication or schema handling failed. Tool errors mean the tool ran but the requested operation failed.

---

## Structured Output And Extraction

### Card 21

**Front:** Why use JSON schema for extraction?

**Back:** It makes output machine-readable, validates structure, and reduces fragile parsing.

### Card 22

**Front:** What should the model output when a required real-world value is missing?

**Back:** Usually `null`, if the schema allows it, rather than guessing.

### Card 23

**Front:** Why add confidence scores to extracted fields?

**Back:** They help route uncertain results to human review or validation.

### Card 24

**Front:** What is the main limitation of batch processing?

**Back:** It is asynchronous and not suited for workflows requiring mid-request tool calls or immediate responses.

### Card 25

**Front:** When is batch processing a good fit?

**Back:** Large, asynchronous, non-latency-sensitive jobs such as deep offline analysis.

### Card 26

**Front:** Why is schema-valid output not always correct?

**Back:** A value can fit the schema but still be semantically wrong. Use validation, sampling, confidence, and review.

---

## Claude Code Workflows

### Card 27

**Front:** What belongs in project-level `CLAUDE.md`?

**Back:** Shared project instructions that all team members should receive.

### Card 28

**Front:** What belongs in user-level `~/.claude/CLAUDE.md`?

**Back:** Personal preferences that should not be forced on the whole team.

### Card 29

**Front:** When should you use a Skill instead of always-on `CLAUDE.md`?

**Back:** When the context is useful only for a specific workflow, such as exemplar API endpoint patterns.

### Card 30

**Front:** Why is independent review better than asking the same session to self-review?

**Back:** A fresh independent session reduces confirmation bias and does not inherit the generator's reasoning.

### Card 31

**Front:** How do you avoid duplicate PR review comments across iterations?

**Back:** Include prior findings in context and ask Claude to report only new or still-unaddressed issues.

### Card 32

**Front:** What output format should automated PR review comments use?

**Back:** Structured JSON with a schema containing file path, line number, severity, message, and suggested fix.

### Card 33

**Front:** Why is batch processing not right for a tool-calling code review workflow?

**Back:** Tool-calling review needs an interactive loop where Claude asks for files, receives results, and continues analysis.

### Card 34

**Front:** What makes comment/docstring review more consistent?

**Back:** Use explicit criteria, such as flagging comments only when claimed behavior contradicts actual code behavior.

### Card 35

**Front:** What is a good Claude Code workflow pattern?

**Back:** Explore, plan, edit, verify, and summarize. Commit only after verification when the user asks for commits.

