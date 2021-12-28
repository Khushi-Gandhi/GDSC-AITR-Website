let container = document.querySelector(".container");
let canvas = document.getElementsByClassName(".canvas");
let columnOne=document.querySelector(".one");
let columnTwo=document.querySelector(".two");
let columnThree=document.querySelector(".three");
let columnFour=document.querySelector(".four");
let columnFive=document.querySelector(".five");


for (let i=1; i<=18;i++){
    let imgDiv=document.createElement("div");
    let divImg=document.createElement("img");
    divImg.setAttribute("src",`./images/${i}.png`)
    imgDiv.appendChild(divImg);
    if(i<5){
        columnOne.appendChild(imgDiv);
    }
    else if(i<8){
        columnTwo.appendChild(imgDiv);
    }
    else if(i<12){
        columnThree.appendChild(imgDiv);
    }
    else if(i<15){
        columnFour.appendChild(imgDiv);
    }
    else{
        columnFive.appendChild(imgDiv);
    }
}

// for (let i=1; i<=18;i++){
//     if 
// }

container.addEventListener('mousemove',(e)=>{
    let x=-(e.clientX-container.getBoundingClientRect().left);
    let y=e.clientY-container.getBoundingClientRect().top;
    let canvas = document.querySelector(".canvas");

    canvas.style.transform = `translate(${x}px, ${-y}px)`;
    
})