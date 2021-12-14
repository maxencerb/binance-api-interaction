import { get_candle_stick, get_all_trading_pairs, getDepth } from './binance.js';
import { retrieveCandles, saveCandles, openDatabase, createTables } from './sqlite.js'

(async () => {
    // const pairs = await get_all_trading_pairs();
    // console.log(pairs.length);
    // const candles = await get_candle_stick('BTCUSDT', '1m');
    // console.log(candles.slice(0, 10));
    // console.log(candles.length);

    // sqlite test
    // const db = openDatabase();
    // createTables(db);
    // saveCandles(db, candles, 'BTCUSDT');
    // const candles2 = await retrieveCandles(db, 'BTCUSDT', Date.now() - 1000 * 60 * 60 * 24 * 7, Date.now());
    // console.log(candles2.length);
    // console.log(candles2.slice(0, 10));
    // db.close();

    const depth = await getDepth();
    console.log(depth);
})();