let input = document.querySelector("#one");
let list = document.querySelector("#list");
input.addEventListener("keyup",function(event){
    if(event.key == "Enter")
    {
        additem(this.value)
        this.value = "";
    }
})
let additem = (input) =>{
   
    let listitem = document.createElement("li");
    listitem.innerHTML = `${input}<i>X</i>`;
    listitem.querySelector("i").style.fontSize = "1.3rem";
    listitem.querySelector("i").style.textAlign = "centre";
    listitem.querySelector("i").style.color = "white";
    listitem.querySelector("i").style.fontStyle = "nomral";
    listitem.querySelector("i").style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    listitem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    listitem.querySelector("i").addEventListener("click",function(){
        listitem.remove();
    })
    if(`${input}`.length!=0){
    list.appendChild(listitem);
}
}
document.getElementById("two").addEventListener("click",function(){
    let listitem = document.createElement("li");
    listitem.innerHTML = input.value +`<i>X</i>`;
    listitem.querySelector("i").style.fontSize = "1.3rem";
    listitem.querySelector("i").style.textAlign = "centre";
    listitem.querySelector("i").style.color = "white";
    listitem.querySelector("i").style.fontStyle = "nomral";
    listitem.querySelector("i").style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    listitem.querySelector("i").addEventListener("click",function(){
        listitem.remove();
    })
    listitem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    if(input.value.length!=0){
        list.appendChild(listitem);
        input.value = "";
    }
})
