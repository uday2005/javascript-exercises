const div = document.createElement("div");


div.style.color = 'blue';
div.style.cssText = "color:blue;background:white;";
div.setAttribute("style","color:blue;background-color:white;");


div.setAttribute('id',"theDiv");
div.getAttribute("id");
div.removeAttribute("id");


div.classList.add("new");
div.classList.remove("new");
div.classList.toggle("active");

div.textContent = "Hello world";
div.innerHTML = "<span> Hello World </span>";
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e);
  });

  btn.addEventListener("click",function (e){
    console.log(e.target);
  })


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        alert(button.id);
    });
});


