let input = document.querySelector(".x");
let submit = document.querySelector(".x2");
let clear = document.querySelector(".x3");
let ul = document.querySelector("ul");
//////get value of input
function inputvalue(){
 return input.value
}
document.querySelector("input[type = 'submit']").onclick = function(e){
    e.preventDefault();

    if(input.value == ""){
        document.querySelector(".todo p").textContent = "please do not leave field empty";
        let x4 = setTimeout(function(){
            document.querySelector(".todo p").textContent = "";
        
      
        },2000);
    }else{
  let x = inputvalue();
  let li = document.createElement("li");
  let litext = document.createTextNode(x);
  li.appendChild(litext);
  let i = document.createElement("i");
  let iclass = document.createAttribute("class");
 iclass.value = "fas";
 iclass.value += " fa-times"
 i.setAttributeNode(iclass);
  li.appendChild(i);
  let btn = document.createElement("button");
  let btntext = document.createTextNode('done');
  btn.appendChild(btntext);
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = '';
thechecker();
i.onclick = function(){
this.parentElement.remove();
thechecker();
}
    }
}
/////the checker
thechecker();
function thechecker(){
   if(ul.children.length == 0){
      document.querySelector(".lists p").textContent = "there is no tasks";
   }else{
    document.querySelector(".lists p").textContent = "";
   }
}
////////clear list
clear.onclick = function(e){
    e.preventDefault();
 
   
    
    if(ul.children){
       // console.log(ul.children);
   let arr = Array.from(ul.children);
   //console.log(arr);
   
   arr.forEach(element => {
       element.remove();
   });
            thechecker();
        
    }else{
        return;
    }
    
}





















