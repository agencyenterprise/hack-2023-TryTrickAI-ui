import { TrickAiService } from "@/trickAiService";

export default async function LeaderboardPage() {
  const leaderboard = await TrickAiService.getLeaderboard()

  return (
    <>
      <img className="mx-auto mt-24 mb-20" src="/leaderboard.svg" />
      <ul className="space-y-4">
        {
          leaderboard.map((entry, index) => (
            <li key={index+1} className="flex gap-4">
              <span className="bg-black p-[6px] w-[48px] h-[48px] text-3xl rounded-full text-center align-middle font-bold">{index+1}</span>
              <div className="px-10 py-6 w-[688px] rounded-sm border border-white/50 bg-card text-black font-medium space-y-6">
                <p>{entry.clue_text}</p>
                <div className="border-l border-gray-500 pl-4 space-y-2">
                  <h2 className="uppercase font-bold text-[#454545]">AI Guess</h2>
                  <p className="font-light">{entry.llm_guess}</p>
                </div>
              </div>
              <p className="grid place-content-center font-medium max-w-[88px] text-center text-lg">
                <span className="text-4xl font-black">{Math.round(entry.percent_correct)}%</span>
                Human Success
              </p>
            </li>
          ))
        }
      </ul>
    </>
  );
}