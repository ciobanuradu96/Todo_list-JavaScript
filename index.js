document.getElementById("add").addEventListener("click",()=>{
    let inputVal=[]
    inputVal = document.getElementById("myInput").value;
    console.log(inputVal)
    document.getElementById("myInput").value = "";
    let div=document.createElement("div");
    div.setAttribute("class","col-md-12 col-sm-12 col-xs-12")
    div.setAttribute("align","center")
    div.innerHTML=inputVal
    document.getElementById("results").appendChild(div);
     },false)

     
   
// for every click id=i+1 which gets added to 
//the div id in order to be able to delete it 