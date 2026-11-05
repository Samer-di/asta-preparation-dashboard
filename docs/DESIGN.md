# Asta's Preparation Dashboard — Design Documentation

## 1. Design Overview

The dashboard was designed using Google Stitch, based on the approved PRD.

The goal is to provide a clean, professional, accessible, and responsive interface that helps Asta manage his training tasks and track preparation progress.

Desktop and mobile layouts were created.

## 2. Selected Color Palette

The final design uses the Arctic Blue & Navy palette.

| Element          | Color   |
| ---------------- | ------- |
| Main Background  | #F5F8FC |
| Cards            | #FFFFFF |
| Primary Text     | #172554 |
| Primary Accent   | #2563EB |
| Completed Status | #10B981 |
| Secondary Text   | #64748B |
| Borders          | #E2E8F0 |
| High Priority    | #DC2626 |
| Medium Priority  | #D97706 |

This palette was selected to create a clean, modern interface with strong readability and clear visual hierarchy.

## 3. Typography and Spacing

- Use clean, modern sans-serif typography, with Inter as the preferred font.
- Use clear heading sizes and readable body text.
- Maintain consistent spacing between dashboard sections.
- Use comfortable internal padding within cards.
- Apply subtle borders and rounded corners.
- Keep buttons large enough for comfortable interaction.

## 4. Dashboard Sections

### Header

Displays the product name and a short introduction explaining Asta's preparation goal.

### Lucifero Threat Brief

Provides a compact explanation of Lucifero and his gravity magic.

### Preparation Progress

Displays the completed/total count, calculated percentage, and visual progress bar.

Clearly explains that progress measures training-plan completion, not the probability of defeating Lucifero.

### Training Tasks

Displays exactly three predefined training tasks:

1. Sword control.
2. Physical endurance.
3. Team coordination.

Each task includes its description, priority, completion status, and completion control.

## 5. Responsive Design

**Desktop:**

- Centered dashboard layout.
- Three-column task card arrangement.
- Clearly separated dashboard sections.

**Mobile:**

- Single-column layout.
- Vertically stacked task cards.
- Readable text and accessible completion controls.
- No intended horizontal scrolling.

## 6. Design Refinement

### Initial Design

The initial Stitch design used dark backgrounds, strong red accents, tactical interface elements, and excessive decorative details.

### Problem Identified

The design appeared too similar to a gaming interface and contained unnecessary visual complexity.

This reduced readability and distracted from the dashboard's main purpose.

### Improvements Made

- Replaced the dark theme with Arctic Blue & Navy.
- Introduced a clean Light Mode interface.
- Reduced unnecessary visual decorations.
- Simplified task cards and dashboard sections.
- Improved visual hierarchy and spacing.
- Made buttons and completion statuses easier to identify.
- Maintained consistent desktop and mobile layouts.

### Reason for the Changes

The final design prioritizes usability, accessibility, and clarity.

Asta should be able to identify his training tasks and preparation progress quickly without unnecessary visual distractions.

## 7. Design Evidence

The following screenshots document the design refinement:

- `docs/evidence/desktop-before.png`
- `docs/evidence/mobile-before.png`
- `docs/evidence/desktop-after.png`
- `docs/evidence/mobile-after.png`

## 8. PRD Compliance

The final design preserves the three required core features:

1. View training tasks.
2. Toggle task completion.
3. View calculated preparation progress.

The design does not introduce additional product features outside the approved PRD.

Actual interaction behaviour, keyboard accessibility, and responsive functionality will be verified during implementation and testing.

## 9. Final Decision

The final Arctic Blue & Navy design was reviewed and approved as the visual reference for the MVP implementation.
