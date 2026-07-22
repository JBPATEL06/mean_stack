## [2026-07-21] Add gitignore and clean up node_modules

**What was discussed:**
- User requested to add all Node.js package folders (`node_modules`) to `.gitignore` and push the code to GitHub.

**Decisions made:**
- Created a global `.gitignore` at the root of the project to ignore `node_modules/`.
- Unstaged and removed previously tracked `node_modules` from Git tracking using `git reset` and `git rm -r --cached`.

**Changes made to code/project:**
- Added `.gitignore` file.
- Cleaned up tracking for `node_modules` across the project.
- Pushed updated codebase to GitHub.

**Open questions / follow-ups:**
- None at this time.
