# PRD Review — Asta's Preparation Dashboard

## Review 1: Progress Calculation Clarification

**Original Requirement:**

The dashboard should display calculated preparation progress.

**Issue Identified:**

The requirement did not explain how percentages should be rounded or how progress should respond to repeated completion toggles.

**Correction Made:**

The PRD now explicitly defines the calculation and expected results:

- 0 completed tasks: 0 / 3 — 0%
- 1 completed task: 1 / 3 — 33%
- 2 completed tasks: 2 / 3 — 67%
- 3 completed tasks: 3 / 3 — 100%

Percentages are rounded to the nearest whole number.

Repeated completion toggles must update the task's state without duplicate counting.

**Reason for the Change:**

The correction makes the requirement clear, measurable, and easy to verify during POC and MVP testing.

## Review Status

The PRD has been reviewed for the first version's scope and contains the required product details.

No application code should be written before the PRD is reviewed and accepted.

# Stage 9 — MVP Review

## 1. Code Validation

The following commands were executed successfully:

- `npm run lint` — Passed.
- `npm run build` — Passed.

No linting or production build errors were reported.

## 2. Manual Testing

The MVP was manually tested against the PRD acceptance criteria.

- Initial progress: 0 / 3 — 0%.
- One completed task: 1 / 3 — 33%.
- Two completed tasks: 2 / 3 — 67%.
- Three completed tasks: 3 / 3 — 100%.
- Undoing completion recalculates progress correctly.
- Repeated toggling does not create duplicate counts.
- Refresh resets task completion as documented.
- The mobile layout was checked at 360px.
- Keyboard controls were tested using Tab, Enter, and Space.

All reported manual tests passed.

## 3. Design Review

The implementation was compared with the selected Google Stitch design.

The dashboard follows the approved Arctic Blue & Navy visual direction and maintains the required sections.

No significant design mismatch was identified during the review.

## 4. User Testing

**Tester:** One other person.

**Tasks requested:**

1. Find the training tasks.
2. Complete one task.
3. Explain the preparation percentage.

**Feedback received:**

The tester described the overall experience as excellent.

No specific confusion or usability problem was reported in the feedback.

**Potential Improvement:**

I would slightly improve the visibility of secondary explanatory text on smaller screens to make the interface even easier to read.

This is a suggested refinement, not a problem confirmed by the tester.

**Conclusion:**

The pilot feedback was positive, but testing with one person does not establish general user demand or product validation.

## 5. Reflection Questions

### How did the PRD prevent an unnecessary feature?

The PRD defined exactly three core features and excluded unnecessary functionality such as login, chatbots, and task editing. This helped me keep the MVP focused.

### What did the POC test, and what did it not prove?

The POC tested task completion toggling and accurate progress calculations. It did not prove that the final design was usable or that people wanted the product.

### Why is this MVP useful even though it is small?

The MVP solves Asta's main problem by showing his training tasks, tracking completion, and displaying preparation progress.

### What did MCP allow your agent to do, or how did your fallback work?

The Stitch MCP server started and discovered 16 tools, but successful design retrieval was not verified because authentication was interrupted.

I used exported Stitch design screenshots as a manual fallback. The coding agent also read the PRD and design documentation.

### Which AI-generated decision did you correct?

I corrected the initial AI-generated design because its dark, gaming-style appearance was too visually complex.

I selected a cleaner Arctic Blue & Navy palette and refined the design for better readability and usability.

### Explain the task state and progress calculation.

React state stores which tasks are completed.

The application counts completed tasks and calculates the percentage using:

`Math.round((completedCount / totalTasks) * 100)`

This ensures that progress always reflects the current task completion states.

### If agents can generate code, what decisions and checks were still your responsibility?

I was responsible for reviewing the PRD, selecting the design, approving implementation decisions, checking functionality, testing responsiveness and accessibility, reviewing the agent's results, and ensuring the application met the assignment requirements.

## 6. Final Review

The MVP passed the reported technical and manual checks.

The application remains within the approved PRD scope, and the user pilot received positive feedback.
