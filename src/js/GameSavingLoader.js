import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const result = await read();
        const saving = JSON.parse(await json(result));
        return new GameSaving(
          saving.id,
          saving.created,
          saving.userInfo.id,
          saving.userInfo.name,
          saving.userInfo.level,
          saving.userInfo.points,
        );
      } catch (err) {
        return err;
      }
    })();
  }
}
