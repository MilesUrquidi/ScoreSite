/**
 * NBA API Service
 *
 * This file handles fetching NBA game data.
 *
 * Options for NBA data:
 * 1. ESPN API (may require authentication)
 * 2. Ball Don't Lie API (free, no auth required) - https://www.balldontlie.io/
 * 3. NBA.com official API (may require scraping or reverse engineering)
 * 4. RapidAPI NBA endpoints
 *
 * For now, this returns mock data to demonstrate the UI.
 * Replace this with actual API calls when you choose your data source.
 */

export async function fetchNBAGames() {
  // TODO: Replace with actual API call
  // Example using Ball Don't Lie API:
  // const response = await fetch('https://www.balldontlie.io/api/v1/games?dates[]=2024-01-15')
  // const data = await response.json()
  // return formatGames(data.data)

  // Mock data for development
  return [
    {
      id: 1,
      homeTeam: {
        name: "Los Angeles Lakers",
        abbreviation: "LAL",
        record: "25-15",
      },
      awayTeam: {
        name: "Boston Celtics",
        abbreviation: "BOS",
        record: "30-10",
      },
      homeScore: 112,
      awayScore: 108,
      status: "Final",
      quarter: null,
      time: null,
    },
    {
      id: 2,
      homeTeam: {
        name: "Golden State Warriors",
        abbreviation: "GSW",
        record: "22-18",
      },
      awayTeam: {
        name: "Miami Heat",
        abbreviation: "MIA",
        record: "24-16",
      },
      homeScore: 98,
      awayScore: 105,
      status: "Live",
      quarter: "Q4",
      time: "2:34",
    },
    {
      id: 3,
      homeTeam: {
        name: "Denver Nuggets",
        abbreviation: "DEN",
        record: "28-12",
      },
      awayTeam: {
        name: "Phoenix Suns",
        abbreviation: "PHX",
        record: "23-17",
      },
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
      quarter: null,
      time: "8:00 PM ET",
    },
  ];
}

/**
 * Format games from API response
 * Adjust this based on your chosen API's response structure
 */
function formatGames(apiGames) {
  return apiGames.map((game) => ({
    id: game.id,
    homeTeam: {
      name: game.home_team.full_name,
      abbreviation: game.home_team.abbreviation,
      record: `${game.home_team.wins}-${game.home_team.losses}`,
    },
    awayTeam: {
      name: game.visitor_team.full_name,
      abbreviation: game.visitor_team.abbreviation,
      record: `${game.visitor_team.wins}-${game.visitor_team.losses}`,
    },
    homeScore: game.home_team_score || 0,
    awayScore: game.visitor_team_score || 0,
    status:
      game.status === "Final"
        ? "Final"
        : game.status === "In Progress"
        ? "Live"
        : "Scheduled",
    quarter: game.period,
    time: game.time,
  }));
}
