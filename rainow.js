let colors = document.querySelectorAll("div");
console.log(colors);

colors.forEach(element => {
   element.addEventListener("mouseover",e=>{
        element.style.background = element.innerHTML;
    });

    // element.addEventListener("mouseleave",e=>{
    //         element.style.background = "lightgrey";
    //     })
});