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
// 3. Total no of participants that did not complete the assessment
// 4. Average score of all participants

function generateAssessmentReport(participants) {
  let totalParticipants = 0;
  let participantsCompleted = 0;
  let participantsIncomplete = 0;
  let totalScore = 0;

  //only read the participants, no need to create a new copy
  for (let i = 0; i < participants.length; i++) {
    totalParticipants++;
    if (participants[i].completed) {
      participantsCompleted++;
    } else {
      participantsIncomplete++;
    }

    totalScore += participants[i].score;
  }

  const average = totalScore / totalParticipants;

  return `
  Assessment Report
  -----------------
  Total participants: ${totalParticipants}
  Completed Assessments: ${participantsCompleted}
  Incomplete Assessments: ${participantsIncomplete}
  Average Score: ${average}
  `
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
