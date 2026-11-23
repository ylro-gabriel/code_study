const players = [
  {
    name: "Ivan",
    position: "Setter",
    setScores: [3, 5, 2],
  },
  {
    name: "Brian",
    position: "Outside Hitter",
    setScores: [8, 6, 7],
  },
  {
    name: "Gab",
    position: "Middle Blocker",
    setScores: [4, 3, 5],
  },
  {
    name: "Mark",
    position: "Opposite",
    setScores: [6, 7, 4],
  },
];

//function: generateMatchReport(players){}
//input: players - an array of objects
//output: an array of objects, instead of setScores (an array), return totalPoints
function generateMatchReport(players) {
  const playerTotalPoints = [];

  for (let i = 0; i < players.length; i++) {
    let setScoresTotal = 0;
    //i struggled with this one bc at first i didnt know where to place the setScoresTotal

    // for (let score of players[i].setScores) {
    //   setScoresTotal += score;
    // }

    for (let j = 0; j < players[i].setScores.length; j++) {
        //i thought players[i][j].setScores was the way to access the values of setScores
      setScoresTotal += players[i].setScores[j];
    }
    playerTotalPoints.push({
      name: players[i].name,
      position: players[i].position,
      totalPoints: setScoresTotal,
    });
  }

  return playerTotalPoints;
}

console.log(generateMatchReport(players));
