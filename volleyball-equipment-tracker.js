const equipment = {
  type: "Volleyball",
  condition: "Good",
  status: "Available",
  borrower: "Ylro",
};

//displayEquipment(equipment)
//input: equipment - an object
//output: string displaying th equipments

function displayEquipment(equipment) {
  const borrowerName = equipment.borrower || "None";

  return `
        Equipment: ${equipment.type}
        Condition: ${equipment.condition}
        Status: ${equipment.status}
        Borrower: ${borrowerName};
        `;
}

//test case
console.log(displayEquipment(equipment));
console.log(equipment);

//explanation
//the function displayEquiment, gets an object as an input, then returns a string displaying the objects's property and values in a string data type/format
