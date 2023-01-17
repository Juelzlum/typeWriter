const sentence = "hello there from lighthouse labs\n";
for (const index in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[index])
  }, 100 * index)
}