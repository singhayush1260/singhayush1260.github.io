
async function bubbleSort()
{ 
  let bars=document.querySelectorAll(".bar");
  for(var i=0;i<bars.length-1;i++)
  { var j=0;
    for(j=0;j<bars.length-i-1;j++)
    { 
     bars[j].style.background="red";
     bars[j+1].style.background="red";
     await new Promise((resolve)=>setTimeout(()=>{
      resolve();
     },300))
      // Provide skyblue colo    
      bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
     var val1=parseInt(bars[j].childNodes[0].innerHTML);
     var val2=parseInt(bars[j+1].childNodes[0].innerHTML);
     if(val1>val2)
     {
    var temp1 = bars[j].style.height;
    var temp2 = bars[j].childNodes[0].innerText;
    bars[j].style.height = bars[j+1].style.height;
    bars[j+1].style.height = temp1;
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200));
    bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
    bars[j+1].childNodes[0].innerText = temp2;
     }
    
    }
    bars[j].style.backgroundColor = " rgb(49, 226, 13)";// light green
  }
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";// light green
}
