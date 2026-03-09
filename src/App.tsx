import { useState, useEffect } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import "./App.css"

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [teamPlayers] = useState<string[]>(["Player1", "Player2", "Player3", "Player4", "Player5"])
  const [enemyPlayers] = useState<string[]>(["Enemy1", "Enemy2", "Enemy3", "Enemy4", "Enemy5"])

  useEffect(() => {
    // Listen for hotkey presses from Rust backend
    const unlisten = invoke("listen_hotkey").catch(console.error)
    return () => {
      unlisten.then((fn: any) => fn?.()).catch(console.error)
    }
  }, [])

  return (
    <div className={`app ${!isVisible ? "hidden" : ""}`}>
      <div className="overlay-container">
        <div className="stats-wrapper">
          {/* Team Stats */}
          <div className="team-stats">
            <h2 className="team-title">Team</h2>
            <div className="player-list">
              {teamPlayers.map((player, idx) => (
                <div key={idx} className="player-card">
                  <div className="player-name">{player}</div>
                  <div className="player-stats">
                    <span className="stat">SR: 2500</span>
                    <span className="stat">WR: 55%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enemy Stats */}
          <div className="enemy-stats">
            <h2 className="enemy-title">Enemy</h2>
            <div className="player-list">
              {enemyPlayers.map((player, idx) => (
                <div key={idx} className="player-card">
                  <div className="player-name">{player}</div>
                  <div className="player-stats">
                    <span className="stat">SR: 2400</span>
                    <span className="stat">WR: 52%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Button */}
        <button className="settings-btn" onClick={() => setIsVisible(!isVisible)}>
          ⚙️
        </button>
      </div>
    </div>
  )
}

export default App
