# Development Setup

## Running the Dev Environment

```powershell
npx tauri dev
```
Use this single command from `overwatch-tracker/` to run the app in dev mode.

## Context (What Was Causing Issues)

Earlier 404 errors came from startup/path timing in `beforeDevCommand`, where Tauri opened before the dev server path was ready.

## Troubleshooting (One Line)

If the window is blank or shows 404, stop all terminals and run `npx tauri dev` again from `overwatch-tracker/`.

## Icon Setup (Important)

Tauri icons/resources must be generated correctly or Rust/Tauri build steps can fail.

Run this from `overwatch-tracker/` to regenerate Tauri files and icons with force init:

```powershell
npx tauri init --ci --force
```

This recreates valid assets in `src-tauri/icons/` (including `icon.ico` and png sizes) and resets Tauri config files.

## Testing the Overlay

1. Use `Alt+O` to toggle overlay visibility.
2. Edit React files in `src/` and verify the overlay updates.

## Building for Production

```powershell
npm run build
```
This compiles both the React frontend and Rust backend into an executable.
