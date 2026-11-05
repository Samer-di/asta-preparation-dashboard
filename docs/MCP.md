# Asta's Preparation Dashboard — MCP Documentation

## 1. MCP Overview

MCP stands for Model Context Protocol. It allows compatible AI coding agents to communicate with external tools and services.

## 2. MCP Configuration

- **Host:** Visual Studio Code with GitHub Copilot.
- **Client:** MCP client integrated with GitHub Copilot.
- **Server:** Google Stitch MCP Server.
- **Server URL:** https://stitch.googleapis.com/mcp
- **Authentication Method:** Stitch API Key.

## 3. Connection Attempt

The Stitch MCP server was configured in VS Code.

The connection logs reported:

- Connection state: Running.
- Discovered 16 tools.

However, when attempting to access Stitch through Copilot, an OAuth Client ID prompt appeared.

A successful project-listing tool call was not confirmed.

## 4. Tool Call Verification

**Requested Operation:** List Stitch projects and retrieve the selected Asta's Preparation Dashboard design context.

**Actual Tool Called:** No successful tool invocation was verified.

**Result:** The server exposed 16 tools, but no confirmed design data was retrieved through MCP.

## 5. Manual Fallback

The approved Google Stitch designs can be provided to the coding agent through exported design files or screenshots.

This is a manual handoff, not an MCP tool interaction.

The coding agent must also use the approved PRD to understand the required application behaviour.

## 6. Evidence

Connection logs and the authentication prompt can be documented using screenshots in `docs/evidence/`, with credentials hidden.

No successful MCP tool-call screenshot is available.

## 7. Conclusion

The MCP server was configured and discovered tools successfully, but an authenticated design retrieval was not verified.

The assignment will continue using the documented manual fallback, as permitted by the assignment instructions.
