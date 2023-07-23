const ArrayTask15=["Ali Ahmed Abdullah","Abdullah Bin Amir","Farsan Bin Yousaf"];
const ArrayTaskpresent=["YES","NO","YES"];
const ArrayTaskNewMember=["Bilal","Ali Asghar","Waqar"];
for(let i=0;i<ArrayTask15.length;i++)
{
    if(ArrayTaskpresent[i]==="NO")
    {
        ArrayTask15[i]=ArrayTaskNewMember[i];
    }
    console.log(`Member no ${i+1}, who is invited by me on interior:`,ArrayTask15[i]);
}