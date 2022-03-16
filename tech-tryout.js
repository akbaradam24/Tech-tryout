function letSee(string) {
  let stack = [];
  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "[" || string[i] == "{" || string[i] == "(") {
      stack.push(string[i]);
    } else {
      let answ = stack.pop();
      if (string[i] != obj[answ]) {
        return false;
      }
    }
  }

  return stack.length == 0;
}

let string = "{[)](}";

console.log(letSee(string));
