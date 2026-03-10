export type TeamSide = "team" | "enemy"

type PlayerCardProps = {
  name: string
  sr: number
  winRate: number
  side: TeamSide
}

function PlayerCard({ name, sr, winRate, side }: PlayerCardProps) {
  return (
    <div className={`player-card ${side}`}>
      <div className="player-name">{name}</div>
      <div className="player-stats">
        <span className="stat">SR: {sr}</span>
        <span className="stat">WR: {winRate}%</span>
      </div>
    </div>
  )
}

export default PlayerCard
