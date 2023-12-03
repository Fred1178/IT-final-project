import { useState } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CombatPage from './CombatPage/CombatPage';
import VictoryPage from './VictoryPage/VictoryPage';
import Player from './models/Player';
import Enemy from './models/Enemy';


/*
  The app component is how it switches between the different screens in my game.
  once you log in, you are sent to the main game page, the "HomePage."
  
*/


function App() {
  //sets the player stats
  const [player, setPlayer] = useState(new Player(
    { name: "You",
      img: "",
      level: 2,
      health: 50,
      maxHealth: 100,
      armor: "none",
      damage: 20,
      potions: 10,
      gold: 0
    }));

  
  //array of enemy objects
  const enemyData = [
    new Enemy("Goblin", "firstEnemy", 1,"images/enemy-images/goblin.jpg", 50, 50, 15),
    new Enemy("Orc", "secondEnemy", 2, "",100, 100, 30)
  ];
  


  let HomeScreen = 'home';
  let LoginScreen = 'login';
  let CombatScreen = 'combat';
  //let WinScreen = 'win';
  let CurrentScreen = LoginScreen;

  const [screen, setScreen] = useState(CurrentScreen);
  switch(screen) {
    case 'login':
      return (
        <LoginPage onLoginClick={() => setScreen(HomeScreen)}/>
      );
    case 'home':
      return (
        <HomePage onEnemyClick={() => setScreen(CombatScreen)} player={player} enemyData={enemyData} />
      );
    case 'combat':
      return (
        <CombatPage player={player} setPlayer={setPlayer} enemyData={enemyData}/> 
      );
    case 'win':
      return (
        <VictoryPage onReturnClick={() => setScreen(HomeScreen)} />
      );
    default:
      console.log("Error: No value for CurrentScreen");
  }

}

export default App;
