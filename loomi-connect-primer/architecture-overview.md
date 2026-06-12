# Loomi Connect — Architecture Overview

## How It Works

```
External AI Agent (Claude, GPT-4, custom LLM)
        |
        | MCP Protocol
        |
   Loomi Connect
        |
   ┌────┴────────────────────────┐
   |            |                |
Marketing    Analytics    Conversations
   MCP          MCP           MCP
   |            |                |
Bloomreach  Bloomreach    Bloomreach
Engagement  Analytics      Clarity
(~57 tools) (~28 tools)   (4 tools)
```

## The Key Concept

Loomi Connect sits between any AI agent and the Bloomreach platform. The agent does not need to know anything about Bloomreach's internal APIs — it just speaks MCP and Loomi Connect handles the rest.

## What This Enables

1. **Any agent, any framework** — Claude, GPT-4, Gemini, LangGraph, custom agents — all work identically
2. **Discoverability** — agents can list available tools at runtime, no hardcoding required
3. **Composability** — agents can call multiple MCP servers in a single workflow
4. **Human-in-the-loop ready** — Loomi Connect reads data; agents reason and recommend; humans approve actions

## What Loomi Connect Does NOT Do

- It does not execute campaigns autonomously (read-focused, not write)
- It does not replace Bloomreach Engagement's native UI
- It does not provide real-time event streaming (pull-based, not push)

## Hackathon Architecture Pattern

The most successful hackathon teams used this pattern:

```
User intent (natural language)
        |
   Agent reasoning layer (LangGraph, Claude, etc.)
        |
   Loomi Connect MCPs (read data, surface context)
        |
   Agent generates recommendation
        |
   Human approves
        |
   Action taken (in Bloomreach or connected system)
```

Every top-4 team used this human-in-the-loop pattern. None of the winners built fully autonomous execution without approval.
