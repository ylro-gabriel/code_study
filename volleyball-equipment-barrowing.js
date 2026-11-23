const equipment = {
    type: "Volleyball",
    condition: "Good",
    status: "Available",
    borrower: ""
};

//borrowEquipment
//input: equipment - an object, playerName - a string
//output: a string that displays a text depending on cases

function borrowEquipment(equipment, playerName){
    if(equipment.status === "Available"){
        equipment.borrower = playerName;
        equipment.status = "Borrowed"
        return `Confirmation: ${equipment.borrower} borrowed ${equipment.type}`
    } else {
        return `Equipment Unavailable. ${equipment.type} is in the possession of ${equipment.borrower}`
    }
}

console.log(borrowEquipment(equipment, "Ivan"));
// Expected: confirmation that Ivan borrowed the Volleyball

console.log(borrowEquipment(equipment, "Brian"));
// Expected: message that the Volleyball is already borrowed

