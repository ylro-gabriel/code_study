const participants = [
  {
    name: "Alex",
    assessment: {
      anxiety: 8,
      stress: 6,
      confidence: 4,
    },
  },
  {
    name: "Jamie",
    assessment: {
      anxiety: 5,
      stress: 9,
      confidence: 8,
    },
  },
  {
    name: "Taylor",
    assessment: {
      anxiety: 7,
      stress: 7,
      confidence: 7,
    },
  },
  {
    name: "Morgan",
    assessment: {
      anxiety: 3,
      stress: 5,
      confidence: 6,
    },
  },
];

function generateAssessmentReport(participants) {
  const returnParticipants = [];

  for (let i = 0; i < participants.length; i++) {
    let totalScore = 0;
    let highScore = 0;

    for (let score in participants[i].assessment) {
      totalScore += participants[i].assessment[score];

      if (participants[i].assessment[score] >= 7) {
        highScore++;
      }
    }

    returnParticipants.push({
      name: participants[i].name,
      totalScore: totalScore,
      highScoreCount: highScore,
    });
  }

  return returnParticipants;
}

console.log(generateAssessmentReport(participants));
