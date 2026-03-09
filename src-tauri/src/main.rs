// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{GlobalShortcutManager, Manager};

mod player_detection;
mod api;

#[tauri::command]
fn listen_hotkey() -> String {
    "Hotkey listener initialized".to_string()
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let mut shortcut_manager = app.global_shortcut_manager();

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

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![listen_hotkey])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
