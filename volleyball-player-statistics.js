const players = [
    { name: "Ivan", position: "Setter", points: 12 },
    { name: "Brian", position: "Outside Hitter", points: 18 },
    { name: "Gab", position: "Middle Blocker", points: 8 },
    { name: "Mark", position: "Opposite", points: 15 },
    { name: "John", position: "Outside Hitter", points: 20 },
    { name: "Alex", position: "Setter", points: 10 }
];

//getTopPLayers
//input: players - array of objects, minimumPoints - threshold to display players that reached the requirements
//output - array of objects that reached the required threshold

function getTopPlayers(players, minimumPoints){
    const topPlayers = [];
    //read players array
    for (let i = 0; i < players.length; i++){
        if (players[i].points >= minimumPoints){
            topPlayers.push(players[i]);
        }
    }

    return topPlayers
}

console.log(getTopPlayers(players, 15));
console.log(getTopPlayers(players, 20));