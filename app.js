const text1 = document.getElementById('text34');
const text = [  "Hi i am Azaharul Rashid.",   "I am a software developer proficient in Python,",    "Flutter, React, and Micropython programming.",     "I have a passion for creating innovative software solutions that solve complex problems."];
let j = 0;
let i = 0;

function typeWriter() {
  if (j < text.length) {
    if (i < text[j].length) {
      text1.innerHTML += text[j][i];
      i++;
      setTimeout(typeWriter, 250);
    } else {
      j++;
      i = 0;
      setTimeout(typeWriter, 250);
    }
  }
}

typeWriter();
