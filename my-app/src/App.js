import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import CombatPage from './CombatPage/CombatPage';
import VictoryPage from './VictoryPage/VictoryPage';
import GameOverPage from './GameOverPage/GameOver';
import Player from './models/Player';
import Enemy from './models/Enemy';
import Enemies from './Enemies.json';


/*
  The app component is how it switches between the different screens in my game.
  once you log in, you are sent to the main game page, the "HomePage."
  
*/

//const apiRoot = "http://localhost:5000";

function App() {

  const HomeScreen = 'home';
  const LoginScreen = 'login';
  const CombatScreen = 'combat';
  const WinScreen = 'win';
  const GameOverScreen = 'loss';

  const [screen, setScreen] = useState(LoginScreen);
  /*
  const [player, setPlayer] = useState(undefined);  

  async function fetchPlayerData() {
    const data = await fetch(`${apiRoot}/api/player`)
      .then(response => {
        console.log(response)
        return response.json()
    
      });
    console.log(data);
    setPlayer(new Player(data));  
  }
  useEffect(() => fetchPlayerData());
  */
  //sets the player stats
  const [player, setPlayer] = useState(new Player(
    { 
      name: "You",
      img: "",
      level: 1,
      health: 50,
      maxHealth: 50,
      armor: "none",
      damage: 20,
      potionNum: 10,
      gold: 0
    }));
  

  //array of enemy objects
  const enemyData = Enemies.map(e => new Enemy(e));
  

  const [enemies, setEnemies] = useState(enemyData);
  
  const getCurrentEnemyIndex = (level) => {
    const enemyIndex = level - 1;
    if (enemyIndex >= enemies.length) {
      console.log("Error: enemy index is greater than size of enemies array");
      
      return enemies.length - 1;
    }
    return enemyIndex;
  }

  const setEnemy = (enemy) => {
    const newEnemies = [...enemies];
    newEnemies[getCurrentEnemyIndex(player.level)] = enemy;
    setEnemies(newEnemies);
  }
  
  


  switch(screen) {
    case 'login':
      return (
        <LoginPage onLoginClick={() => setScreen(HomeScreen)} />
      );
    case 'home':
      return (
        <HomePage onEnemyClick={() => setScreen(CombatScreen)} player={player} currentEnemy={enemies[getCurrentEnemyIndex(player.level)]}/>
      );
    case 'combat':
      return (
        <CombatPage player={player} setPlayer={setPlayer} enemy={enemies[getCurrentEnemyIndex(player.level)]} setEnemy={setEnemy} 
          onVictory={() => setScreen(WinScreen)} onDefeat={() => setScreen(GameOverScreen)}/>
      );
    case 'win':
      return (
        <VictoryPage onReturnClick={() => setScreen(HomeScreen)} enemy={enemies[getCurrentEnemyIndex(player.level-1)]}/>
      );
    case 'loss':
      return (
        <GameOverPage onRestartClick={() => setScreen(LoginScreen)} />
      );
    default:
      console.log("Error: No value for CurrentScreen");
  }

}

export default App;
