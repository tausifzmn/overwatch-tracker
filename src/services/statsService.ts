import { invoke } from "@tauri-apps/api/tauri"
import { MatchStatsResponse, OverlayStatsState } from "../types/stats"

function mapPlayers(
  players: MatchStatsResponse["team_players"] | MatchStatsResponse["enemy_players"]
) {
  return players.map((player) => ({
    name: player.name,
    sr: player.sr,
    winRate: player.win_rate,
  }))
}

export async function fetchMatchStats(): Promise<OverlayStatsState> {
  const payload = await invoke<MatchStatsResponse>("get_match_stats")

  return {
    teamPlayers: mapPlayers(payload.team_players),
    enemyPlayers: mapPlayers(payload.enemy_players),
    source: payload.source,
  }
}
