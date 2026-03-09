# Overwatch Tracker - Overlay App

A lightweight Overwatch 2 stat tracker overlay built with Tauri, React, and Rust.

## Features

- 📊 Real-time player stats (SR, win rate, most played hero)
- 🎮 Non-intrusive overlay
- ⚡ Lightweight (< 50MB)
- 🔒 Ban-safe (no game modification)
- 🎯 Automatic player detection
- 📱 Clean modular codebase

## Tech Stack

- **Desktop:** Tauri (lightweight Rust wrapper)
- **Frontend:** React 18 + TypeScript + TailwindCSS
- **Backend:** Rust (Actix-web planned)
- **Distribution:** GitHub Releases

## Project Structure

```
overwatch-tracker/
├── src/                 # React frontend
│   ├── components/      # React components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── src-tauri/           # Rust backend
│   ├── src/
│   │   ├── main.rs      # App entry point
│   │   ├── player_detection.rs
│   │   └── api.rs
│   └── Cargo.toml
├── tauri.conf.json      # Tauri configuration
└── package.json         # Frontend dependencies
```

## Development

See [DEVELOPMENT.md](./DEVELOPMENT.md) for setup instructions.

## License

MIT
