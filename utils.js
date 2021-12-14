const get_candle_id = (candle, pair) => {
    return `${candle.openTime}_${pair}`;
}

export {
    get_candle_id
}