let suger=document.querySelector('input#suger');
let rice=document.querySelector('input#rice');
let butter=document.querySelector('input#butter');
let totalcost=document.querySelector('h4#total');
let button=document.querySelector('button#button');


button.addEventListener('click',()=>{
  let sugercost=suger.value*40;
  let ricecost=rice.value*60;
  let buttercost=butter.value*500;
  let total=sugercost+ricecost+buttercost;

  totalcost.innerText=total;
})

