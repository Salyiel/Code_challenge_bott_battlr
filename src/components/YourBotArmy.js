import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, removeBot, dischargeBot }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Your Bot Army</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} action={removeBot} removeCard={dischargeBot} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
