/* javascript */
// const pageContainer = document.getElementsByClassName("container");
const upArrow = document.getElementById("uparrow");
const downArrow = document.getElementById("downarrow");
let bg = document.getElementById("bgcol");

// getting all content relevant tags
let intro = document.getElementById("intro");
let introImg = document.getElementById("introimg"); 
//T1
let t1 = document.getElementById("task1");
let t1Img = document.getElementById("task1img"); 

// //T2
// let t2 = document.getElementById("task2");
// //let t2Img = document.getElementById("task2img"); 
// //T3
// let t3 = document.getElementById("task3");
// //let t2Img = document.getElementById("task2img"); 
// //T4
// let t4 = document.getElementById("task4");
// //let t2Img = document.getElementById("task2img"); 
// //T5
// let t5 = document.getElementById("task5");
// //let t2Img = document.getElementById("task2img"); 

upArrow.style.display ='none'; //bc initially website opens to intro
let index = 0;

upArrow.addEventListener("click", () => newPage('up'));
downArrow.addEventListener("click", () => newPage('down'));

function newPage (direction) {

    //EDGE CASES:
    //1. intro (no up arrow)
    //2. p2 to intro (show hide up arrow)
    //3. SUS (no down arrow)
    //4. p6 to SUS (show hide down arrow)
   
    //at this point, up arrow will not be shown
    if (index == 0){
        index++; 
        if (direction == 'down'){
            //hiding previous page
            intro.style.display='none';
            introImg.style.display ='none';
    
            //showing new page
            bg.style.backgroundColor = '#9E6240'
            t1.style.display = 'block';
            t1Img.style.display = 'block';
            upArrow.style.display = 'block';
        }
    }

    // going from page 1 to intro
    if (index == 1) {
        if (direction == 'up'){
            index--;
            //showing previous page
            bg.style.backgroundColor = '#C1BDB3';
            intro.style.display='block';
            introImg.style.display ='block';
            
            upArrow.style.display = 'none';

            //hiding new page
            t1.style.display = 'none';
            t1Img.style.display = 'none';
        }
    }

    // //at this point, down arrow will not be shown
    // if (index == 6) {
        
    // }

}
