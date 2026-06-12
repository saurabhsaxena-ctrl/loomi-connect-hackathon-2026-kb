# What Is Loomi Connect?

## The Simple Explanation

Loomi Connect is Bloomreach's **MCP-based capability layer** — it lets any AI agent call Bloomreach's core platform capabilities through a standardised interface.

Think of it as: *Bloomreach's brain, accessible to any AI agent.*

## What MCP Means

MCP stands for Model Context Protocol. It is a standard that lets AI agents discover and invoke tools from external systems. Loomi Connect implements MCP, which means any AI agent that speaks MCP (Claude, GPT-4, Gemini, custom agents) can immediately access Bloomreach's capabilities.

## What Loomi Connect Is NOT

- It is NOT a raw API wrapper
- It is NOT just another REST endpoint
- It is NOT the same as the Loomi AI Agent Platform (Bloomreach's native hosted agent platform — separate product)
- It is NOT Loomi Analytics (the natural-language analytics assistant inside Bloomreach Engagement — separate product)

## The Three MCP Servers

### Marketing MCP
Gives agents access to Bloomreach Engagement: customer profiles, campaigns, automation scenarios, segments, vouchers, catalogs, project settings. ~57 tools.

### Analytics MCP
Gives agents access to Bloomreach analytics: segments, filters, dashboards, funnels, trends, reports, predictive scores, EQL queries. ~28 tools.

### Conversations MCP
Gives agents access to Bloomreach Clarity (conversational commerce): product search, collection search, product details. 4 tools.

## Total: 89 Tools

See the full list: [mcp-tools-full-list.md](mcp-tools-full-list.md)

## Why It Matters

Before Loomi Connect, integrating an AI agent with Bloomreach required custom API work per use case. With Loomi Connect MCP, any agent can discover and use Bloomreach capabilities with zero custom integration. The hackathon proved teams could go from zero to working agent in days.
