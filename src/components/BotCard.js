import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};

const BotCard = ({ bot, action, removeCard }) => {
  function handleClick(e) {
    console.log("handleClick fired!");
    action(bot);
  }

  function handleDischarge(e) {
    console.log("Red X Clicked!");
    e.stopPropagation();
    removeCard(bot);
  }

  return (
    <div className="bg-white shadow-md rounded p-4 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-col items-center">
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
            onClick={handleClick}
          >
            Add to Army
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDischarge}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
