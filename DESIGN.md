---
name: RM Gym
description: A personal rep-max training log styled as a Strava "Year in Sport" recap card — flat poster-color bento blocks, huge bold numerals, thin-stroke line icons.
colors:
  paper: "#f3efe3"
  white: "#ffffff"
  ink: "#14120f"
  yellow: "#eeea3d"
  orange: "#ff4d1f"
  navy: "#0b3049"
  pink: "#ffb6e6"
  olive: "#43411f"
  teal: "#1f5c5c"
  text-dim: "#726c60"
  danger: "#d81e3e"
  kettlebell: "#0b3049"
  dumbbell: "#e0529b"
  barbell: "#1f5c5c"
typography:
  display:
    fontFamily: "Archivo, Familjen Grotesk, sans-serif"
    fontSize: "clamp(5rem, 26vw, 8.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  label:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  body:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
  mono-label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.58rem"
    fontWeight: 700
rounded:
  block: "0px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "14px"
  lg: "28px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.block}"
    padding: "12px 18px"
  bento-tile:
    rounded: "{rounded.block}"
    padding: "14px"
---

## Overview

RM Gym is a single-user CrossFit/gym rep-max tracker, used one-handed mid-workout. The visual world is Strava's "Year in Sport" recap card, brief-pinned by the user from reference screenshots: full-bleed flat color blocks on a cream ground, huge bold numerals as the hero content of every stat, thin black hairlines for structure, simple line icons. No gradients, no glass/blur, no soft shadows, no italic — this replaced an earlier dark moody-gradient theme the user explicitly rejected in the same session.

## Colors

- **Paper** `#f3efe3` — the page background and the "neutral" block color for hero/primary stats that should read as the main number, not one of the cycle.
- **Ink** `#14120f` — near-black; all structural borders (2px), the top bar and bottom nav fill, and primary text.
- **Poster cycle** — `yellow #eeea3d`, `orange #ff4d1f`, `navy #0b3049`, `pink #ffb6e6`, `olive #43411f`, `teal #1f5c5c`. Secondary stat tiles cycle through these six in fixed order; text on each is either `ink` (yellow/orange/pink) or `white` (navy/olive/teal) — never gray, never a diluted tint.
- **Orange is the single accent** carried everywhere outside the bento cycle: primary buttons, the active nav dot, RM values, chart lines, the countdown overlay text.
- **Material identity colors** (badges, filter circles, material selector): kettlebell = navy, dumbbell = magenta/pink `#e0529b`, barbell = teal. Fixed per material, not assigned by state.

## Typography

- **Display (Archivo, 800 weight)** carries every hero number: the Registrar RM entry, the running timer/picker, RM list values, bento tile values. Never italic, never condensed — a deliberate departure from this app's earlier condensed-italic identity.
- **Body/UI (Familjen Grotesk)** carries labels, buttons, exercise names, search text. Small labels are uppercase with `0.05–0.06em` tracking.
- **Mono labels (JetBrains Mono)** are reserved for the tiny percentage markers (`90%`, `80%`...) next to RM breakdowns — a measurement/data use, not a "technical" costume.

## Layout

Mobile-first, single column, `max-width: 560px` centered. Sections are either plain (no visual container — Registrar's search, Peso's date row) or bento grids (2–3 column, 2px `ink` gutters simulating hairline dividers between blocks). List rows (Mis RMs, WODs) use a bottom `2px solid ink` divider rather than individual card boxes.

## Elevation & Depth

None. No box-shadow, no blur, no glass. Depth reads entirely from flat color contrast and 2px black borders — consistent with the reference's poster-print language, which has no soft shadow vocabulary to inherit.

## Shapes

Zero border-radius everywhere except genuinely circular controls (nav icon wraps, `icon-btn`, material filter circles, the profile avatar button) and the pill-shaped segmented control track. Commit to sharp rectangles for every block, button, input, and modal.

## Components

- **Bento tile** (`.pct-tile`): flat color per the poster cycle, `ink` text or white per background, uppercase label at 75% opacity, bold Archivo value. The first ("hero") tile in a stat group stays on `paper` — the neutral treatment marks it as the primary number, matching how the reference keeps its lead stat off the color grid.
- **Material buttons/circles**: permanently colored per material (not colored-only-when-active); inactive state is 35–40% opacity, active is full opacity. This keeps the material identity legible even before selection.
- **Buttons**: `ink`-bordered, sharp corners, orange fill for primary, white fill for secondary.
- **Top bar / bottom nav**: solid `ink` fill, no blur — replaces the earlier frosted-glass treatment.

## Do's and Don'ts

- Do keep every hero number in Archivo 800, never italic.
- Do assign bento-tile colors by cycle position, not by content meaning — variety across a stat group is the point.
- Do keep material colors (navy/pink/teal) fixed regardless of active state.
- Don't reintroduce gradients, blur, glass, or soft shadows — this world is flat by commitment, not by omission.
- Don't round a block corner "for softness" — sharp corners are the form language; only genuinely circular controls get `border-radius: 50%`.
- Don't gray out secondary text on a colored tile — dim it with `opacity` on the tile's own text color so it stays in that block's ink family.
