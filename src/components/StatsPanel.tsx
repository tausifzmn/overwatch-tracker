import PlayerList from "./PlayerList"
import { Player } from "../types/stats"

type StatsPanelProps = {
  teamPlayers: Player[]
  enemyPlayers: Player[]
}

function StatsPanel({ teamPlayers, enemyPlayers }: StatsPanelProps) {
  return (
    <div className="stats-wrapper">
      <section className="team-stats">
        <h2 className="team-title">Team</h2>
        <PlayerList players={teamPlayers} side="team" />
      </section>

      <section className="enemy-stats">
        <h2 className="enemy-title">Enemy</h2>
        <PlayerList players={enemyPlayers} side="enemy" />
      </section>
    </div>
  )
}

export default StatsPanel
