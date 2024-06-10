import React from 'react';

const SortBar = ({ sortBy }) => {
  return (
    <div className="flex space-x-2">
      <button onClick={() => sortBy('health')} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
        Sort by Health
      </button>
      <button onClick={() => sortBy('damage')} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
        Sort by Damage
      </button>
      <button onClick={() => sortBy('armor')} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
        Sort by Armor
      </button>
    </div>
  );
};

export default SortBar;
