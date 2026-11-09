# Debugger Steps
Chrome DevTools

## Breakpoint: Date validation and Validation fails
**Line:** `if (!isValidDate(visitDate)) {`
The Rule set to that fild is compromised by putting the year first.
**Screenshots:** `screenshots/paused_at_step.png`
The visit date entred is 1989-26-18
`screenshots/after_step.png`
formIsValid Remains False.
It should have beem turned to True if the rule was respected.

## Critical state analysis
The regex only checks the format, so the function returns false for a wrong format