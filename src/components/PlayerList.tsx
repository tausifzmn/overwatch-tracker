import PlayerCard, { TeamSide } from "./PlayerCard"
import { Player } from "../types/stats"

type PlayerListProps = {
  players: Player[]
  side: TeamSide
}

function PlayerList({ players, side }: PlayerListProps) {
  return (
    <div className="player-list">
      {players.map((player) => (
        <PlayerCard
          key={`${side}-${player.name}`}
          name={player.name}
          sr={player.sr}
          winRate={player.winRate}
          side={side}
        />
      ))}
    </div>
  )
}

export default PlayerList
