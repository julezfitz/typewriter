const sentence = "hello there from lighthouse labs";
let count = 0;

for (const char of sentence) {
  {
    setTimeout(() => {
      process.stdout.write(char);
    }, count * 50) // <= 1s delay to make it noticeable. Can dial it down later.
    count++;
  }
}
setTimeout(() => {
  process.stdout.write('\n');
}, count * 50);