function superbowlWin(record) {
  let res = record.find(isWin);

  if (res === undefined) {
    return undefined;
  } else {
    return res.year;
  }
}

function isWin(game) {
  return game.result === "W";
}

superbowlWin(record);
