let changeBgBtn = document.getElementById('changeBgBtn');
let hexCode = document.getElementById('hexCode');

// let hexColors = ['#F0F8FF','#FF7F50','#B22222','#FF69B4','#FFFACD'];
// document.body.style.background = '#F0F8FF';
// hexCode.textContent = '#F0F8FF';

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    hexCode.textContent = bgColor;
    }
randomBgColor();

// setInterval(()=>{
//     randomBgColor();
// },2000);

changeBgBtn.onclick = function(){
    // let index = Math.floor(Math.random() * 5);
    // let color = hexColors[index];

    // document.body.style.background = color;
    // hexCode.textContent = color;
    randomBgColor();
}
