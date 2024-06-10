import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => {
        setBots(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.some(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
      setBots(bots.filter(b => b.id !== bot.id));
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
    setBots([...bots, bot]);
  };

  const dischargeBot = (bot) => {
    axios.delete(`http://localhost:8001/bots/${bot.id}`)
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        removeBotFromArmy(bot);
      })
      .catch(error => console.error(error));
  };

  const handleSort = (key) => {
    setSortKey(key);
    const sortedBots = [...bots].sort((a, b) => b[key] - a[key]);
    setBots(sortedBots);
  };

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bot Army</h1>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={addBotToArmy} goBack={handleGoBack} />
      ) : (
        <>
          <YourBotArmy bots={army} removeBot={removeBotFromArmy} dischargeBot={dischargeBot} />
          <BotCollection bots={bots} addBot={addBotToArmy} selectBot={handleSelectBot} sortBy={handleSort} />
        </>
      )}
    </div>
  );
};

export default App;
