import game from './gameState';


// Timer for the game that tells what the fox is doing at a time
const TICK_RATE = 3000;

  async function init() {
    console.log("starting game");

    let nextTimeToTick = Date.now();

    function nextAnimationFrame ()  {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
