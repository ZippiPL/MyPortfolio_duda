button.addEventListener("mousemove",(e)=>{
    const react = button.getBoundingClientReact();
    const x = e.clientX - react.left;
    const y = e.clientY - react.top;
    button.style.setProperty("--mouseX",`${x}px`);
    button.style.setProperty("--mouseY",`${y}px`);
});