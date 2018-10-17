const segmentsArray = [
  "segment-a",
  "segment-b",
  "segment-c",
  "segment-d",
  "segment-e",
  "segment-f",
  "segment-g"
].map(function(item) {
  return document.getElementsByClassName(item)[0];
});

const encoding = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

function updateSegments(number) {
  for (let i = 6; 0 <= i; i--) {
    const segmentIndex = 6 - i;
    if ((number >> i) & 1) {
      segmentsArray[segmentIndex].style = "background-color: red";
    }
  }
}

function clearSegments() {
  document.querySelectorAll(".segment").forEach(item => {
    item.style = "";
  });
}

function runScript() {
  let startNumber = 0;
  const timerID = setInterval(() => {
    startNumber++;
    clearSegments();
    updateSegments(encoding[startNumber - 1]);
    if (startNumber === 10) {
      clearInterval(timerID);
    }
  }, 1000);
}

runScript();
