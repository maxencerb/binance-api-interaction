import fetch from 'node-fetch';

const BASE_ENDPOINT = "https://api.binance.com";

const get_all_trading_pairs = async () => {
    const response = await fetch(`${BASE_ENDPOINT}/api/v1/exchangeInfo`);
    const json = await response.json();
    return json.symbols.map(symbol => symbol.symbol);
}

const get_candle_stick = async (symbol, interval, start_time=Date.now() - (1000 * 60 * 60), end_time=Date.now()) => {
    const response = await fetch(`${BASE_ENDPOINT}/api/v1/klines?symbol=${symbol}&interval=${interval}${start_time ? `&startTime=${start_time}` : ''}${start_time ? `&endTime=${end_time}` : ''}`);
    const json = await response.json();
    return json.map(from_list_to_candle);
}

const from_list_to_candle = (list) => {
    const obj = {
        openTime: list[0],
        open: list[1],
        high: list[2],
        low: list[3],
        close: list[4],
        volume: list[5],
        closeTime: list[6]
    }
    return obj;
}

const from_list_to_order = (list) => {
    const obj = {
        price: list[0],
        qty: list[1],
    }
    return obj;
}

const getDepth = async (direction = 'asks', pair = 'BTCUSDT', limit = 10) => {
    const response = await fetch(`${BASE_ENDPOINT}/api/v3/depth?symbol=${pair}&limit=${limit}`);
    const json = await response.json();
    return json[direction].map(from_list_to_order);
}

export {
    get_all_trading_pairs,
    get_candle_stick,
    getDepth
}