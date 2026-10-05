# Project notes

## Run and verify

- Start the `Start application` workflow on port 5000.
- The dev server must allow Replit proxy hosts (`server.allowedHosts: true` in the Vite configuration).
- Build with `bun run build`; run the targeted ESLint command for files changed in a task.

## Student and instructor access

- Require provider-verified sign-in and server-side authorization before enabling instructor or student features.
- Grant instructor permissions only to Mahmoud’s formally provisioned account; never grant admin access to the first account or based on client-side checks.
- Keep enrollment and lesson-progress records in server-side storage, not browser `localStorage`.
