import { useState, useEffect } from "react"
import { appWindow } from "@tauri-apps/api/window"
import StatsPanel from "./components/StatsPanel"
import { Player } from "./types/stats"
import { fetchMatchStats } from "./services/statsService"
import "./App.css"

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [teamPlayers, setTeamPlayers] = useState<Player[]>([
    { name: "Player1", sr: 2500, winRate: 55 },
    { name: "Player2", sr: 2500, winRate: 55 },
    { name: "Player3", sr: 2500, winRate: 55 },
    { name: "Player4", sr: 2500, winRate: 55 },
    { name: "Player5", sr: 2500, winRate: 55 },
  ])
  const [enemyPlayers, setEnemyPlayers] = useState<Player[]>([
    { name: "Enemy1", sr: 2400, winRate: 52 },
    { name: "Enemy2", sr: 2400, winRate: 52 },
    { name: "Enemy3", sr: 2400, winRate: 52 },
    { name: "Enemy4", sr: 2400, winRate: 52 },
    { name: "Enemy5", sr: 2400, winRate: 52 },
  ])
  const [dataSource, setDataSource] = useState("bootstrap")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadStats = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await fetchMatchStats()
        setTeamPlayers(result.teamPlayers)
        setEnemyPlayers(result.enemyPlayers)
        setDataSource(result.source)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch match stats")
      } finally {
        setIsLoading(false)
      }
    }

    loadStats().catch(console.error)
  }, [])

  const handleDragStart = () => {
    appWindow.startDragging().catch(console.error)
  }

  return (
    <div className={`app ${!isVisible ? "hidden" : ""}`}>
      <div className="overlay-container">
        <div className="drag-handle" onMouseDown={handleDragStart}>
          <span className="drag-label">Drag | Alt+I = Game Mode</span>
        </div>

        <div className="status-row">
          <span className="status-badge">Source: {dataSource}</span>
          {isLoading ? <span className="status-loading">Loading...</span> : null}
          {error ? <span className="status-error">{error}</span> : null}
        </div>

        <StatsPanel teamPlayers={teamPlayers} enemyPlayers={enemyPlayers} />

        {/* Settings Button */}
        <button className="settings-btn" onClick={() => setIsVisible(!isVisible)}>
          ⚙️
        </button>
      </div>
    </div>
  )
}

export default App
