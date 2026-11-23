const participants = [
    { name: "Anna", score: 92 },
    { name: "Mark", score: 78 },
    { name: "John", score: 65 },
    { name: "Sarah", score: 88 },
    { name: "Alex", score: 54 }
];

const categories = {
    90: "Excellent",
    80: "Very Good",
    70: "Good",
    60: "Fair",
    0: "Needs Improvement"
};
//categorizeParticipants
//input: participants - array of objects, categories - an object of categories
function categorizeParticipants(participants, categories){
    const results = []

    for (let i = 0; i < participants.length; i++){
        if(participants[i].score >= 90){
            results.push({
                name: participants[i].name,
                score: participants[i].score,
                category: categories[90]
            })
        } else if (participants[i].score >= 80){
            results.push({
                name: participants[i].name,
                score: participants[i].score,
                category: categories[80]
            })
        } else if (participants[i].score >= 70){
            results.push({
                name: participants[i].name,
                score: participants[i].score,
                category: categories[70]
            })
        } else if (participants[i].score >= 60){
            results.push({
                name: participants[i].name,
                score: participants[i].score,
                category: categories[60]
            })
        } else {
            results.push({
                name: participants[i].name,
                score: participants[i].score,
                category: categories[0]
            })
        }
    }
    return results;
}

console.log(categorizeParticipants(participants, categories));

/*
Expected Output:
[
    { name: "Anna", score: 92, category: "Excellent" },
    { name: "Mark", score: 78, category: "Good" },
    { name: "John", score: 65, category: "Fair" },
    { name: "Sarah", score: 88, category: "Very Good" },
    { name: "Alex", score: 54, category: "Needs Improvement" }
]
*/