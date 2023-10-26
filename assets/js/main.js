/* javascript */

const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
let bg = document.getElementById("bgcol");
let index = 0;
let colors = {
  coltask0: "#C1BDB3",
  coltask1: "#9E6240",
  coltask2: "#9F6BA0",
  coltask3: "#1D9281",
  coltask4: "#D77060",
  coltask5: "#247BA0",
  coltask6: "#EAD2AC"
};

upArrow.style.display = "none"; //bc initially website opens to intro

upArrow.addEventListener("click", () => newPage("up"));
downArrow.addEventListener("click", () => newPage("down"));

function newPage(direction) {
  //EDGE CASES:
  //1. intro (no up arrow)
  //2. p2 to intro (show/hide up arrow)
  //3. SUS (no down arrow)
  //4. SUS to p6 (show/hide down arrow)

  if (index >= 0 && index <= 6) {
    if (direction == "up") {
      let oldpageId = `task${index}`;
      index--;
      let newpageId = `task${index}`;

      // Get the new and old pages
      let oldpage = document.getElementById(oldpageId);

      let newpage = document.getElementById(newpageId);

      //hiding old page
      oldpage.style.display = "none";
    
      downArrow.style.display = "block";

      //showing new/ previous page
      bg.style.backgroundColor = colors[`col${newpageId}`];
      newpage.style.display = "block";

      if (index == 0) {         //after index decreased
        //went from t1 to intro(t0)
        upArrow.style.display = "none";
      }
    }

    if (direction == "down") {
      let oldpageId = `task${index}`;
      index++;
      let newpageId = `task${index}`;

      // Get the new and old pages
      let oldpage = document.getElementById(oldpageId);

      let newpage = document.getElementById(newpageId);

      //hiding old page
      oldpage.style.display = "none";

      upArrow.style.display = "block";

      //showing new/ next page
      bg.style.backgroundColor = colors[`col${newpageId}`];
      newpage.style.display = "block";

      if (index == 6) {        //after index increased
        //went from t5 to SUS(t6)
        downArrow.style.display = "none";
      }
    }
  }
}

let SUSForm = document.getElementById("SUSForm");

SUSForm.addEventListener("submit", (event) => {
  // prevent default behavior of form
  event.preventDefault();

  // create variables for all items
  let q1 = this.q1.value;
  let q2 = this.q2.value;
  let q3 = this.q3.value;
  let q4 = this.q4.value;
  let q5 = this.q5.value;
  let q6 = this.q6.value;
  let q7 = this.q7.value;
  let q8 = this.q8.value;
  let q9 = this.q9.value;
  let q10 = this.q10.value;

  // For odd items: subtract one from the user response.
  q1 -= 1;
  q3 -= 1;
  q5 -= 1;
  q7 -= 1;
  q9 -= 1;

  // For even-numbered items: subtract the user responses from 5
  q2 = 5 - q2;
  q4 = 5 - q4;
  q6 = 5 - q6;
  q8 = 5 - q8;
  q10 = 5 - q10;

  // Add all converted responses; multiply that total by 2.5.
  let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 2.5;

  // store in a new input
  this.answer.value = answer;
});
