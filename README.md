# Asta's Preparation Dashboard

## Developer Information

**Full Name:** [Samer Madhat Daghestani]

**Assignment:** Assignment 2 — Asta's Preparation Dashboard

**Branch:** `assignment-2-asta-mvp`

## Project Overview

Asta's Preparation Dashboard is a responsive web application inspired by the Black Clover anime.

The application helps Asta organize his training tasks, mark completed activities, and track his preparation progress before facing Lucifero.

This project was developed as an educational assignment using a PRD-driven development workflow, Google Stitch for UI design, a Proof of Concept (POC), and an MVP.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React

## Core Features

1. View three predefined training tasks.
2. Mark tasks as completed or undo completion.
3. Track preparation progress through an automatically calculated percentage.

The dashboard also includes a brief Lucifero threat description and a responsive layout for desktop and mobile devices.

## Installation and Setup

**1. Clone the repository:**

```bash
git clone https://github.com/Samer-di/asta-preparation-dashboard.git
```

**2. Navigate to the project:**

```bash
cd asta-preparation-dashboard
```

**3. Install dependencies:**

```bash
npm install
```

**4. Start the development server:**

```bash
npm run dev
```

**5. Open the application:**

http://localhost:3000

## Testing

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Both commands were successfully executed during development.

Manual testing included task completion, undo functionality, percentage calculations, responsive layout, and keyboard accessibility.

## Design

The user interface was designed using Google Stitch.

**Selected Color Palette:** Arctic Blue & Navy.

The design prioritizes readability, responsiveness, accessibility, and a clean dashboard experience.

Design screenshots are available in `docs/evidence/`.

## MCP Integration

Google Stitch MCP was configured using Visual Studio Code and GitHub Copilot.

The server started and discovered 16 tools, but successful design retrieval was not verified due to an authentication issue.

The project therefore used the assignment's accepted manual fallback: Stitch design screenshots supplied to the coding agent.

Details are documented in `docs/MCP.md`.

## Project Documentation

| Document                    | Description                                  |
| --------------------------- | -------------------------------------------- |
| [PRD.md](docs/PRD.md)       | Product requirements and acceptance criteria |
| [DESIGN.md](docs/DESIGN.md) | Design decisions and refinements             |
| [MCP.md](docs/MCP.md)       | MCP configuration and documented fallback    |
| [POC.md](docs/POC.md)       | Proof of Concept and test results            |
| [REVIEW.md](docs/REVIEW.md) | Verification, user feedback, and reflection  |
| [Evidence](docs/evidence/)  | Supporting screenshots                       |

## Limitations

- Training tasks are predefined.
- Users cannot add, edit, or delete tasks.
- Completion state resets after refreshing the page.
- No database or authentication system is included.
- No additional application routes are required.

## Project Status

The MVP implementation is complete.

The project passed the reported lint, build, functionality, responsive design, and keyboard accessibility checks.

A small user pilot was conducted and received positive feedback.

This project is an educational demonstration and does not claim real-world product validation.

## Credits

Inspired by Black Clover, created by Yuki Tabata.

Character names and related intellectual property belong to their respective rights holders.

This application was created for educational purposes.
