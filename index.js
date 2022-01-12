const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "N/A" },
  { year: "2011", result: "N/A" },
];

function superbowlWin(record) {
  // return record.find(isWin)

  // console.log(record.find(isWin));

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
