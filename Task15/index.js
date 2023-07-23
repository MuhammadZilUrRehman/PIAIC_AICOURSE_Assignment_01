var ArrayTask15 = ["Ali Ahmed Abdullah", "Abdullah Bin Amir", "Farsan Bin Yousaf"];
var ArrayTaskpresent = ["YES", "NO", "YES"];
var ArrayTaskNewMember = ["Bilal", "Ali Asghar", "Waqar"];
for (var i = 0; i < ArrayTask15.length; i++) {
    if (ArrayTaskpresent[i] === "NO") {
        ArrayTask15[i] = ArrayTaskNewMember[i];
    }
    console.log("Member no ".concat(i + 1, ", who is invited by me on interior:"), ArrayTask15[i]);
}
