// This is where the TypeScript Compiler (tsc) comes in. 
// The TypeScript Compiler is a command-line tool that transforms 
// TypeScript code into JavaScript code that can be executed by the browser or a server.
const Name: string= "muhammad Zil ur rehman";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
let Value=Name.split(" ");
let FinalNameFirstLetter: string;
let FinalNameSecondPart: string;
let FinalName: string="";
for(var index in Value)
{
    FinalNameFirstLetter = Value[index].slice(0,1).toUpperCase();
    FinalNameSecondPart=Value[index].slice(1);
    Value[index]= FinalNameFirstLetter.concat(FinalNameSecondPart);
    Value[index]= Value[index].concat(" ");
    FinalName = FinalName +Value[index];
    console.log(FinalName);
}
console.log(FinalName);