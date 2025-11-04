import { useState, useEffect } from "react";
import BoxScore from "./components/BoxScore";
import Header from "./components/Header";
import { fetchNBAGames } from "./services/nbaApi";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Replace with actual API call
      const data = await fetchNBAGames();
      setGames(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching games:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#31363F]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading games...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-800">{error}</p>
            <button
              onClick={loadGames}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : games.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No games scheduled for today.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {games.map((game) => (
              <BoxScore key={game.id} game={game} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
