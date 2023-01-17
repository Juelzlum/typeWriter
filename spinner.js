process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r\\\  ');
}, 4000);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 5000);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 6000);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 7000);

setTimeout(() => {
  process.stdout.write('\r\\\ ');
}, 8000);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 9000);