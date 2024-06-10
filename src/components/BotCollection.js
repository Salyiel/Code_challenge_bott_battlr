import React from 'react';
import BotCard from './BotCard';
import SortBar from './SortBar';

const BotCollection = ({ bots, addBot, selectBot, sortBy }) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Bot Collection</h2>
        <SortBar sortBy={sortBy} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} action={selectBot} removeCard={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
