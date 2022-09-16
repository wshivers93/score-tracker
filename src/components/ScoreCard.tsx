import React from "react";

export default function ScoreCard() {
  return (
    <div className="flex flex-col border border-slate-800 dark:border-white rounded p-3 m-2 text-sm lg:text-base">
      <div className="flex flex-row justify-center align-middle">
        Game Clock
      </div>
      <div className="flex flex-row justify-center align-middle">
        <div className="mx-2 text-center">
          <div>Team1 Logo</div>
          <div>Team1 Name</div>
        </div>
        <div className="mx-2 text-center">Team1 Score</div>
        <div className="mx-2 text-center">-</div>
        <div className="mx-2 text-center">Team2 Score</div>
        <div className="mx-2 text-center">
          <div>Team2 Logo</div>
          <div>Team2 Name</div>
        </div>
      </div>
    </div>
  );
}
