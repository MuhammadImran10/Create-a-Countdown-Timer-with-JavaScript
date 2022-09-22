//stor end time in virable
const endDate="21 Octuber 2022 10:00 PM"

//pass the end time h1 tag
document.getElementById("end-Date").innerText=endDate;

// get all inputs 
const inputs=document.querySelectorAll("input")

// create function
function clock(){

    const end=new Date(endDate)
    const know=new Date()
    //- end time now time
    const diff=(end-know)/1000;

    //crete condication if end time is finshed then stop time 
  if(diff<0) return;
     // create logic for show time 
    inputs[0].value=Math.floor(diff/3600)/24;
     inputs[1].value=Math.floor(diff/3600)%24;
     inputs[2].value=Math.floor(diff/60)%60;
     inputs[3].value=Math.floor(diff)%60;


}
//init call
clock();
// set time and evey second load program auto
setInterval(function(){
    clock();
},1000
)