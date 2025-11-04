export default function BoxScore({ game }) {
  const {
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    status,
    quarter,
    time,
    odds,
  } = game;

  const getStatusColor = () => {
    if (status === "Final") return "text-gray-600";
    if (status === "Live") return "text-red-600";
    return "text-blue-600";
  };

  return (
    <div className="bg-[#76ABAE] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="px-6 py-4 border-b border-white-200">
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold ${getStatusColor()}`}>
            {status}
          </span>
          {status === "Live" && (
            <span className="text-xs text-red-600 font-medium">
              {quarter} • {time}
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Away Team */}
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">
                  {awayTeam.abbreviation}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {awayTeam.name}
                </h3>
                <p className="text-sm text-[#EEEEEE]">{awayTeam.record}</p>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="px-8">
            <div className="flex items-center space-x-6">
              <span
                className={`text-4xl font-bold ${
                  awayScore > homeScore && status !== "Scheduled"
                    ? "text-gray-900"
                    : "text-[#EEEEEE]"
                }`}
              >
                {awayScore}
              </span>
              <span className="text-[#EEEEEE]">-</span>
              <span
                className={`text-4xl font-bold ${
                  homeScore > awayScore && status !== "Scheduled"
                    ? "text-gray-900"
                    : "text-[#EEEEEE]"
                }`}
              >
                {homeScore}
              </span>
            </div>
          </div>

          {/* Home Team */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 text-right">
                  {homeTeam.name}
                </h3>
                <p className="text-sm text-[#EEEEEE] text-right">
                  {homeTeam.record}
                </p>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">
                  {homeTeam.abbreviation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
