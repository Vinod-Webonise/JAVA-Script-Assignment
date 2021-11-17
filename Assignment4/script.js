var  data=[];
function validateForm() {
  let x = document.getElementById("name").value;
  let y=document.getElementById("email").value;
  if (x == "") {
    alert("Name must be filled out");
    return;
  }
  else{
    if(y=="")
    {
        alert("email must be filled out")
    }
    else{
        if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(y)){
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            data.push({name:x,email:y,timestamp:new Date()})
        }
        else{
            alert("Enter valid email")
        }
    }
  }
 
}
function clicked(){
    let d="";
    for(let i=0;i<data.length;i++)
    {
        d=d+data[i].name+" "+data[i].email+" "+data[i].timestamp+"<br>";
    }
    document.getElementById("data").innerHTML=d;
}