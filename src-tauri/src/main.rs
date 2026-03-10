// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::{Arc, Mutex};
use tauri::{GlobalShortcutManager, Manager};

mod api;

#[tauri::command]
fn listen_hotkey() -> String {
    "Hotkey listener initialized".to_string()
}

#[tauri::command]
fn get_match_stats() -> api::OverlayMatchStats {
  api::get_test_match_stats()
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let mut shortcut_manager = app.global_shortcut_manager();
      let click_through_enabled = Arc::new(Mutex::new(false));

      // Register Alt+O to toggle overlay
      shortcut_manager
        .register("alt+o", {
          let app_handle = app.handle();
          move || {
            if let Some(window) = app_handle.get_window("main") {
              let _ = if window.is_visible().unwrap_or(false) {
                window.hide()
              } else {
                window.show()
              };
            }
          }
        })
        .unwrap();

      // Register Alt+I to toggle click-through mode.
      // When enabled, mouse input passes through the overlay to the game.
      shortcut_manager
        .register("alt+i", {
          let app_handle = app.handle();
          let click_through_enabled = Arc::clone(&click_through_enabled);
          move || {
            if let Some(window) = app_handle.get_window("main") {
              if let Ok(mut enabled) = click_through_enabled.lock() {
                *enabled = !*enabled;
                let _ = window.set_ignore_cursor_events(*enabled);
              }
            }
          }
        })
        .unwrap();

      Ok(())
    })
    .invoke_handler(tauri::generate_handler![listen_hotkey, get_match_stats])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
