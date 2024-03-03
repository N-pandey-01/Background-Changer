let btn1=document.getElementById("myBtn1")
let btn2=document.getElementById("myBtn2")
let bgCode=document.querySelector(".copyCode")
let rgb1="#b721ff"
let rgb2="#21d4fd"


const colorCollection=()=>{
    let hexValue="0123456789abcdef"
    let hexColor="#";
    for(let i=0; i<6; i++)
    {
     hexColor = hexColor + hexValue[Math.floor(Math.random() * 16)]
    }
    return hexColor
}
const changeBgCode =()=>{
   let innerBg= document.body.style.backgroundImage= `linear-gradient(to right,${rgb1},${rgb2})`
     let innerBgCode =bgCode.innerHTML=`linear-gradient(to right, ${rgb1},${rgb2} )`;
    return innerBg , innerBgCode;
}
const clickButton1=()=>{
    rgb1=colorCollection();
    console.log(rgb1);
    changeBgCode();
    btn1.textContent=rgb1
}

const clickButton2=()=>{
    rgb2=colorCollection();
    console.log(rgb2);
    changeBgCode();
    btn2.textContent=rgb2
}

const clickBgCode=()=>{
    navigator.clipboard.writeText(bgCode.innerText)
    alert("Copped Successfully")
}

btn1.addEventListener("click",clickButton1);
btn2.addEventListener("click",clickButton2);
bgCode.addEventListener("click",clickBgCode);


//! ========= Created by Nitesh Pandey ========== !
