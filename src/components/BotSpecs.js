import React from 'react';

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded p-4">
      <img alt="oh no!" src={bot.avatar_url} className="h-32 w-32 rounded-full mb-4" />
      <h3 className="text-xl font-semibold mb-2">{bot.name}</h3>
      <p className="text-gray-700">{bot.catchphrase}</p>
      <div className="mt-4 flex justify-between w-full">
        <span>
          <i className="icon heartbeat" /> {bot.health}
        </span>
        <span>
          <i className="icon lightning" /> {bot.damage}
        </span>
        <span>
          <i className="icon shield" /> {bot.armor}
        </span>
      </div>
      <div className="mt-4 flex justify-between w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => enlistBot(bot)}
        >
          Enlist
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={goBack}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default BotSpecs;
