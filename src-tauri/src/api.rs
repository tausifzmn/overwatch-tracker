use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OverlayPlayerStat {
    pub name: String,
    pub sr: u32,
    pub win_rate: u8,
    pub side: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OverlayMatchStats {
    pub team_players: Vec<OverlayPlayerStat>,
    pub enemy_players: Vec<OverlayPlayerStat>,
    pub source: String,
}

/// Returns a stable test dataset for Phase 2 wiring.
/// This lets frontend and backend integration proceed before live player detection.
pub fn get_test_match_stats() -> OverlayMatchStats {
    OverlayMatchStats {
        team_players: vec![
            OverlayPlayerStat {
                name: "Player1".to_string(),
                sr: 2510,
                win_rate: 55,
                side: "team".to_string(),
            },
            OverlayPlayerStat {
                name: "Player2".to_string(),
                sr: 2630,
                win_rate: 58,
                side: "team".to_string(),
            },
            OverlayPlayerStat {
                name: "Player3".to_string(),
                sr: 2440,
                win_rate: 51,
                side: "team".to_string(),
            },
            OverlayPlayerStat {
                name: "Player4".to_string(),
                sr: 2720,
                win_rate: 61,
                side: "team".to_string(),
            },
            OverlayPlayerStat {
                name: "Player5".to_string(),
                sr: 2495,
                win_rate: 53,
                side: "team".to_string(),
            },
        ],
        enemy_players: vec![
            OverlayPlayerStat {
                name: "Enemy1".to_string(),
                sr: 2460,
                win_rate: 50,
                side: "enemy".to_string(),
            },
            OverlayPlayerStat {
                name: "Enemy2".to_string(),
                sr: 2550,
                win_rate: 54,
                side: "enemy".to_string(),
            },
            OverlayPlayerStat {
                name: "Enemy3".to_string(),
                sr: 2675,
                win_rate: 57,
                side: "enemy".to_string(),
            },
            OverlayPlayerStat {
                name: "Enemy4".to_string(),
                sr: 2410,
                win_rate: 49,
                side: "enemy".to_string(),
            },
            OverlayPlayerStat {
                name: "Enemy5".to_string(),
                sr: 2590,
                win_rate: 56,
                side: "enemy".to_string(),
            },
        ],
        source: "test-static".to_string(),
    }
}
