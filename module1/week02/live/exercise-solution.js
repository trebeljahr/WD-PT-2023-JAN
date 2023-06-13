const name1 = "Yo-jia";
const spell1 = "code-i-omus!";

const name2 = "Zuzana";
const spell2 = "block-i-omus";

//cast spell function with global variables
function castSpell() {
  console.log(`${name1} has cast the spell ${spell1}`);
}
// //function invocation without arguments
castSpell();

function castSpellWithArguments(wizardName, wizardSpell) {
  console.log(`${wizardName} has blocked your spell with ${wizardSpell}`);
}
//function invocation with using arguments (not gloabl)
castSpellWithArguments("Olga", "listen-to-music-i-omus");

//arrow function to call both functions inside
const callBothFunctions = () => {
  castSpell();
  castSpellWithArguments("Silvia", "Play-with-i-omus");
};
callBothFunctions();
