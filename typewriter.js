const sentence = "hello there from lighthouse labs bjdsufhdufhsd idjiufheduchd jcisuficehsdi";
let i = 0;
for (const char of sentence) {
  setTimeout((i) => {
    process.stdout.write(char);
  }, i);
  i += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, (sentence.length * 50));

