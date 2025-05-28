function chaseMouse() {
    
    let img = document.getElementById("image");
    img.style.position = "absolute";
    img.style.left = (Math.random() * 500)+ "px";
    img.style.top = (Math.random() *500)+ "px";
}
    
function catchMouse() 
{
    alert("Congratulations! You caught the mouse!"); 
    chaseMouse(); 
}

function setupMouseChase() 
{
        let img = document.getElementById ("image");
        img.onclick = catchMouse; 
        img.onmouseover = chaseMouse;
        chaseMouse(); 
        
}

window.onload = setupMouseChase;