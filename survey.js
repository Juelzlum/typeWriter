const readline = require('readline');
const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
}; 
const ans = {
  0 : 'julian', 
  1 : 'sports',
  2 : 'rap', 
  3 : 'dinner',
  4 : 'watch shows', 
  5 : 'basketball',
  6 : 'fly, so that i dont have to sit on an airplane '
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0
const question = () => {
if(i > 7) {
rl.question(`${questions[i]}` , (answer)=> {
    ans[i] = answer
    i++
  console.log()
  question()
})
}
  rl.close()
  console.log('New Profile Made!')
  setTimeout(() => console.log(`${ans[0]} likes ${ans[1]} while listening to ${ans[2]}. 
  They like eating ${ans[4]} for their favorite meal ${ans[3]}. 
  ${ans[0]}'s absolute favorite sport is ${ans[5]}.
  When ${ans[0]} was asked their superpower they answered: ${ans[6]}
`), 100 )
}
question()


// rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });