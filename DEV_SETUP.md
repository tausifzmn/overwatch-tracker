# Development Setup

## Running the Dev Environment

The Overwatch Tracker uses **two separate terminals** during development:

### Terminal 1: Start Vite (Frontend Dev Server)
```powershell
npm run vite-dev
```
Output should show:
```
VITE v4.5.14 ready in 295 ms
➜  Local:   http://localhost:5173/
```

### Terminal 2: Start Tauri (Desktop App)
```powershell
npx tauri dev
```
This will launch the overlay window and automatically load the React app from Terminal 1's dev server.

## Why Two Terminals?

- **Vite** needs to start and listen on port 5173 **before** Tauri launches the window
- Running them together in `npm run dev` causes timing issues (404 errors)
- This two-terminal setup is the standard Tauri development workflow

## Testing the Overlay

1. Keep both terminals running
2. Use **Alt+O** to toggle overlay visibility
3. Edit React components in `src/` → Vite hot-reloads (F5 to refresh in Tauri window)

## Building for Production

```powershell
npm run build
```
This compiles both the React frontend and Rust backend into an executable.
