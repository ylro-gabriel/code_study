const participants = [
  { name: "Anna", score: 85, completed: true },
  { name: "Mark", score: 72, completed: false },
  { name: "John", score: 91, completed: true },
  { name: "Sarah", score: 68, completed: false },
  { name: "Alex", score: 88, completed: true },
];

//generateAssessmentReport(participants)
//input: array of participant objects
//output: a string of results:
// 1. Total no. of participants
// 2. total no. of participants that completed the assessment
// 3. Average score of all participants

function generateAssessmentReport(participants) {
  let totalParticipants = 0;
  let totalParticipantsCompleted = 0;
  let totalParticipantsIncomplete = 0;
  let totalScore = 0;
  let averageScore = 0;

  //access participants array
  for (let i = 0; i < participants.length; i++) {
    totalParticipants++;

    if (participants[i].completed) {
      totalParticipantsCompleted++;
    } else {
      totalParticipantsIncomplete++;
    }

    totalScore += participants[i].score;
  }
  averageScore = totalScore / totalParticipants;

  return `
    Assessment Report
    -----------------
    Total Participants: ${totalParticipants}
    Completed Assessments: ${totalParticipantsCompleted}
    Incomplete Assessments: ${totalParticipantsIncomplete}
    Average Score: ${averageScore}
    `;
}

console.log(generateAssessmentReport(participants));

/*
Expected Output:

Assessment Report
-----------------
Total Participants: 5
Completed Assessments: 3
Incomplete Assessments: 2
Average Score: 80.8
*/
