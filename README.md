# Bot Army

This is a React application that allows users to manage a collection of bots. Users can view bot profiles, enlist bots into their army, and manage the enlisted bots with various functionalities. The app also includes sorting and filtering features for better management of the bots.

## Features

As a user, you should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Click on an individual bot to see detailed information (`BotSpecs`).
- Enlist a bot into your army from the detailed view. Enlisted bots are removed from `BotCollection` and added to `YourBotArmy`.
- Release a bot from your army by clicking on it in `YourBotArmy`. The bot will be removed from `YourBotArmy` and added back to `BotCollection`.
- Discharge a bot from service forever by clicking the red "x" button in `YourBotArmy`. This action deletes the bot from both the backend and the frontend.
- Sort bots by their health, damage, or armor using the `SortBar` component.
- Filter bots by their class. Multiple filters can be selected at the same time.
- Enlist only one bot from each `bot_class` in `YourBotArmy`. The classes are: `Support`, `Medic`, `Assault`, `Defender`, `Captain`, and `Witch`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bot-army.git
    cd bot-army
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the JSON server to serve the bot data:
    ```bash
    npx json-server --watch db.json --port 8001
    ```

4. Start the React application:
    ```bash
    npm start
    ```

## Components

### App

- The main component that manages the state and renders other components.

### BotCollection

- Displays a collection of bot cards.
- Includes the `SortBar` for sorting bots.

### YourBotArmy

- Displays the bots enlisted in the user's army.
- Allows for the removal and discharge of bots.

### BotCard

- Displays individual bot details in a card format.
- Contains buttons for enlisting and discharging bots.

### BotSpecs

- Displays detailed information about a bot.
- Includes buttons to enlist the bot and to return to the `BotCollection` view.

### SortBar

- Contains buttons to sort bots by health, damage, or armor.

## Usage

1. **Viewing Bots**: On loading the app, the user will see a list of all available bots in the `BotCollection`.
2. **Viewing Bot Details**: Click on any bot card to see detailed information about that bot in `BotSpecs`.
3. **Enlisting Bots**: From the detailed view, click the "Enlist" button to add the bot to `YourBotArmy`. The bot will be removed from `BotCollection`.
4. **Releasing Bots**: Click on any bot in `YourBotArmy` to release it back to the `BotCollection`.
5. **Discharging Bots**: Click the red "x" button on any bot in `YourBotArmy` to discharge it permanently. This action removes the bot from both the backend and the frontend.
6. **Sorting Bots**: Use the `SortBar` buttons to sort the bots in `BotCollection` by health, damage, or armor.
7. **Filtering Bots**: Use additional filters (to be implemented) to view bots by their class.

## Advanced Features

- **Detailed Bot View**: Click on a bot card to view detailed information and options to enlist the bot or return to the list view.
- **Sorting**: Sort bots by health, damage, or armor.
- **Filtering**: Filter bots by their class.
- **Unique Enlistment**: Ensure only one bot from each class can be enlisted at a time.

## Data

The app fetches data from `db.json` file at `http://localhost:8001/bots`. Example bot data structure:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  }
]

## Styling

The application uses Tailwind CSS for styling. Ensure that the `src/index.css` file includes the Tailwind directives.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [JSON Server](https://github.com/typicode/json-server)

