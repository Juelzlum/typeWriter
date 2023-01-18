//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
var args = process.argv.slice(2)
args.sort(function(a, b){return a-b});
// args.filter(time => !isNaN(time))
// args.filter(time => time >= 0)
console.log(args)
const timer = () => {
  for (const arg of args) {
    if (arg >= 0 && arg !== NaN) {
    console.log(arg)
      setTimeout(() => {
      process.stdout.write('\x07')
       }, arg * 1000)
     }}
}

timer()