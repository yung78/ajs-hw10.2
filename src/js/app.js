import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
    return saving;
  } catch (err) {
    console.log(err);
    return err;
  }
})();
