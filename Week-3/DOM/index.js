// function ChangeBackgroundWhite()
// {
//     document.body.style.backgroundColor = "white";
// }
// Dry principle
function changeBackgroundColor(color)
{
    document.body.style.backgroundColor =color ;
}
// const darkbutton= document.getElementById("dark-mode");

// darkbutton.addEventListener('click',function(){
//     changeBackgroundBlack("black");
// })

// darkbutton.addEventListener('click',function(){
//     console.log("Another things happens");
// })

const themeButton = document.getElementById('Theme-button');
themeButton.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor);
    const currentcolor=document.body.style.backgroundColor;
    if(!currentcolor ||currentcolor =="white" ){
        changeBackgroundColor('black');
        themeButton.innerText= "Light Mode";
    }
    else{
        changeBackgroundColor('white');
        themeButton.innerText = 'Dark Mode';
    }
});