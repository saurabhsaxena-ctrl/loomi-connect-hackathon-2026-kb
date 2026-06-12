# MCP Usage Patterns

> How the 25 final submissions used Loomi Connect's three MCP servers.

---

## Overall Pattern

Most teams used Marketing MCP as their primary integration layer. Analytics MCP was the second most common. Conversations MCP was used by only a handful of teams — and those who used it deeply scored very well.

---

## Marketing MCP — Most Used

Used by virtually all submitting teams. Common patterns:
- Reading customer segments to identify target audiences
- Fetching campaign performance data
- Accessing automation scenario configurations
- Reading product catalog data for personalisation

Key tools most referenced: list_customers, list_segmentations, list_scenarios, list_email_campaigns, list_catalog_items

---

## Analytics MCP — Strong Adoption

Used by roughly half the teams. Common patterns:
- Running EQL queries to detect behavioural anomalies
- Fetching funnel and trend data for performance diagnosis
- Accessing predictive churn scores
- Building cohort analyses for targeting

Key tools most referenced: execute_analytics_eql, list_funnels, get_prediction, get_customer_prediction_score

---

## Conversations MCP — Underused But High-Impact

Only 6 teams used Conversations MCP as a core capability. Of those, the scores were strong. The teams that used all three MCPs together (IbxLab, Rohlik, Simons Unified) built the most sophisticated and highest-scoring agents.

Teams that used Conversations MCP:
| Team | How Used |
|---|---|
| Team IbxLab | One of 3 signal vectors — mines sessions for intent and sentiment |
| Rohlik Team | Primary agent interface for campaign orchestration |
| Simons Unified | Identifies rising friction themes and intent patterns |
| vishleshak (registered, did not submit final) | Revenue erosion signal triangulation |
| Apex (registered, did not submit final) | Drafting personalised retention interventions |

---

## Cross-MCP Usage — The Winning Pattern

All 4 top teams used multiple MCPs together. The pattern that scored highest:

**Marketing MCP** (audience + campaign data) +
**Analytics MCP** (performance signals + anomaly detection) +
**Conversations MCP** (friction + intent signals)

= A complete picture of customer health that no single MCP can provide alone.

---

## The Shopper Gap

Despite Conversations MCP having search_products, search_productCollections, and get_product tools, almost no team used these to build shopper-facing experiences. The tools that were designed for shopper-side agents were barely touched. This is the clearest whitespace in the entire hackathon output.
