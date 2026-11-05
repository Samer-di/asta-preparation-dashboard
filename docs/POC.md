# Asta's Preparation Dashboard — POC

## 1. Question to Test

Can task completion and the progress summary stay consistent when tasks are completed, undone, and toggled repeatedly?

## 2. Approach

A small Proof of Concept was developed using Next.js, TypeScript, Tailwind CSS, and React useState.

The experiment includes:

- Three predefined training tasks.
- Completion toggle buttons.
- A completed/total task counter.
- An automatically calculated progress percentage.

Task completion states are stored using React useState.

The completed count and percentage are derived from the task states rather than stored separately.

Progress Formula:

Progress = Math.round((Completed Tasks / Total Tasks) × 100)

## 3. Test Results

| Test                     | Expected Result                        | Status |
| ------------------------ | -------------------------------------- | ------ |
| Initial state            | 0 / 3 — 0%                             | Passed |
| Complete one task        | 1 / 3 — 33%                            | Passed |
| Complete two tasks       | 2 / 3 — 67%                            | Passed |
| Complete all tasks       | 3 / 3 — 100%                           | Passed |
| Undo one completed task  | 2 / 3 — 67%                            | Passed |
| Repeatedly toggle a task | Count remains accurate between 0 and 3 | Passed |

## 4. Observation

Using a single source of truth for task completion makes the progress calculation simpler and prevents inconsistencies between task states, the completed count, and the percentage.

No functional issues were observed during the experiment.

## 5. Decision

**Decision: Continue to MVP development.**

The POC demonstrated that task completion toggling and automatic progress calculations work as expected.

The same state management approach can be reused in the final MVP.

## 6. Limitations

- The POC uses minimal styling.
- Task data is predefined.
- Progress is not saved after a browser refresh.
- The final Stitch design has not been implemented yet.

## 7. Evidence

Screenshot: `docs/evidence/poc-test.png`

The screenshot documents the working POC interface.
