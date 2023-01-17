process.stdout.write('hello from spinner1.js... \rheyyy\n');

const arrayOne = ['\r|   ', '\r/   ', '\r-   ', '\r\\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\\ ', '\r|  ' ]

for (const index in arrayOne) {
  //console.log(index)
  //console.log(arrayOne[index])
  setTimeout(() => {
    process.stdout.write(arrayOne[index])
  }, 1000 * index)
}