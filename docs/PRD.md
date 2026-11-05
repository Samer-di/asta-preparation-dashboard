# Asta's Preparation Dashboard — PRD

## 1. Product Overview

**Product Name:** Asta's Preparation Dashboard

**Summary:** A simple web application that helps Asta organize his training tasks, mark them as completed, and track his preparation progress before facing Lucifero.

## 2. Primary User and Problem

**Primary User:** Asta, a fictional Magic Knight from Black Clover.

**Problem:** Asta's training tasks are scattered across different notes. He struggles to remember which tasks he has completed and cannot easily track his overall preparation progress.

## 3. Product Goal

Build a simple, responsive, single-page dashboard that allows Asta to view his three predefined training tasks, manage their completion status, and see his preparation progress.

## 4. Core Features

### Feature 1: View Training Tasks

- Display exactly three predefined training tasks.
- Each task displays its name, description, priority, and completion status.
- All tasks start as incomplete.

### Feature 2: Toggle Task Completion

- Asta can mark each task as completed.
- Asta can undo completion at any time.
- The task's status updates immediately.
- Each task counts only once toward overall progress.

### Feature 3: View Calculated Progress

- Display a completed/total task count.
- Display a preparation percentage.
- Calculate progress automatically based on completed tasks.
- Round percentages to the nearest whole number.

**Progress Formula:**

Preparation Percentage = (Completed Tasks / Total Tasks) × 100

## 5. User Stories

- As Asta, I want to view my training tasks so that I know what I need to practise.
- As Asta, I want to mark tasks as completed or incomplete so that I can track my work accurately.
- As Asta, I want to see my preparation percentage so that I can understand how much of my training plan is complete.

## 6. Sample Training Data

| Task               | Description                                      | Priority |
| ------------------ | ------------------------------------------------ | -------- |
| Sword control      | Practise precise anti-magic sword movements.     | High     |
| Physical endurance | Complete a focused strength and stamina session. | Medium   |
| Team coordination  | Review a preparation plan with the Black Bulls.  | High     |

All three tasks start incomplete.

## 7. Expected Behaviour

- When the dashboard first loads, all tasks are incomplete.
- The initial progress displays `0 / 3` and `0%`.
- Completing one task updates progress to `1 / 3` and `33%`.
- Completing two tasks updates progress to `2 / 3` and `67%`.
- Completing all three tasks updates progress to `3 / 3` and `100%`.
- Undoing a completed task immediately reduces the completed count and recalculates the percentage.
- Clicking a task's completion control repeatedly toggles its state without duplicate counting.
- Progress may reset after refreshing the browser.

## 8. Acceptance Criteria

The application is considered successful when:

1. Exactly three predefined tasks appear on one dashboard screen.
2. Every task displays its name, description, priority, and clear completion status.
3. The initial completed count is `0 / 3` and preparation progress is `0%`.
4. Completing one task displays `1 / 3` and `33%`.
5. Completing two tasks displays `2 / 3` and `67%`.
6. Completing all three tasks displays `3 / 3` and `100%`.
7. Undoing completion of the only completed task restores `0 / 3` and `0%`.
8. Repeatedly toggling the same task never creates duplicate completed counts.
9. Task completion controls can be operated using a keyboard.
10. The dashboard remains readable on mobile screens without horizontal scrolling.

## 9. Design and Accessibility Requirements

- Use a clean, simple dashboard layout.
- Display all information on one screen without requiring additional routes.
- Use readable typography and clear spacing.
- Provide a responsive layout suitable for desktop and mobile.
- Display visible status text such as "Completed" and "Not completed".
- Use clear, descriptive labels for completion controls.
- Ensure all interactive controls are keyboard-operable.
- Provide visible keyboard focus indicators.
- Use sufficient contrast between text and backgrounds.
- Do not rely on colors alone to communicate task status.

## 10. Technology Stack

- **Next.js:** Web application framework.
- **TypeScript:** Type-safe application logic.
- **Tailwind CSS:** Responsive interface styling.

## 11. Assumptions and Limitations

- Asta is a fictional user; no real user research or product validation is claimed.
- The dashboard contains exactly three predefined tasks.
- All tasks start incomplete.
- The total number of tasks remains fixed at three.
- Task completion is managed using client-side state.
- Data persistence is not required.
- Progress may reset after refreshing the page.
- No backend or database is necessary for this version.
- The interface uses English text.

## 12. Out-of-Scope Features

The following features are explicitly excluded from the first version:

- Login and user accounts.
- Database integration.
- Payments.
- Chatbots.
- Combat simulation.
- Multiplayer functionality.
- Live anime data.
- Adding new tasks.
- Editing existing tasks.
- Deleting tasks.
- Saving progress after refreshing the page.
- Additional application routes.

## 13. Success Definition

The MVP succeeds when a person can open the dashboard, identify the three training tasks, mark tasks as completed or incomplete, and see accurate progress updates without confusion.

This PRD defines the initial product requirements and does not claim that the product has already been built, tested, or validated.
