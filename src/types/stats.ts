export type Player = {
  name: string
  sr: number
  winRate: number
}

export type MatchStatsResponse = {
  team_players: Array<{
    name: string
    sr: number
    win_rate: number
    side: "team" | "enemy"
  }>
  enemy_players: Array<{
    name: string
    sr: number
    win_rate: number
    side: "team" | "enemy"
  }>
  source: string
}

export type OverlayStatsState = {
  teamPlayers: Player[]
  enemyPlayers: Player[]
  source: string
}
