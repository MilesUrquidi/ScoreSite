# ScoreSite

A simple, elegant web application for displaying NBA box score data.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📋 Project Structure

```
ScoreSite/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Site header
│   │   └── BoxScore.jsx # Game box score display
│   ├── services/        # API services
│   │   └── nbaApi.js    # NBA data fetching
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🔌 NBA API Integration

The app currently uses mock data. To connect to real NBA data, you'll need to:

1. **Choose an API provider:**

   - [Ball Don't Lie API](https://www.balldontlie.io/) - Free, no authentication required
   - [RapidAPI NBA](https://rapidapi.com/api-sports/api/api-nba) - Requires API key
   - ESPN API - May require authentication
   - NBA.com official data - Requires web scraping

2. **Update `src/services/nbaApi.js`:**
   - Replace the `fetchNBAGames()` function with actual API calls
   - Adjust the `formatGames()` function to match your API's response structure

### Example: Using Ball Don't Lie API

```javascript
export async function fetchNBAGames() {
  const today = new Date().toISOString().split("T")[0];
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/games?dates[]=${today}`
  );
  const data = await response.json();
  return formatGames(data.data);
}
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework

## 🎯 Next Steps

- [ ] Integrate real NBA API
- [ ] Add date picker to view games from different days
- [ ] Add detailed box score view (player stats, quarter breakdowns)
- [ ] Add team logos
- [ ] Implement real-time updates for live games
- [ ] Add filtering/search functionality
- [ ] Expand to other sports (NFL, MLB, etc.)

## 📝 License

MIT
