//let budget=prompt('pleae tell us your budget');
let submit=document.querySelector('button.set');
let budgetElem=document.querySelector('input.bud');
let budget=100000;
let sumup=0;

submit.addEventListener('click',()=>{
  budget=Number(budgetElem.value);
})
let upbuttons=document.querySelectorAll('input.up');
upbuttons.forEach(button => {
  button.addEventListener('click',()=>{
    
     let unit=Number(button.previousElementSibling.value);
     unit+=1;
     button.previousElementSibling.value=unit;
     let total=calc();
     if(total>budget){
       document.body.style.backgroundColor='red';
       alert('you are going out of your set budget');
     }
 })
});

let downbuttons=document.querySelectorAll('input.down');
downbuttons.forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.nextElementSibling.value>0){
    let unit=Number(button.nextElementSibling.value);
    unit-=1;
    button.nextElementSibling.value=unit;

    let total=calc();
    if(total<=budget){
      document.body.style.backgroundColor='white';
      alert('great you are in budget now');
    }
    }
  })
})


let cart=document.querySelector('a.cart');
cart.addEventListener('click',()=>{
  let quat=document.querySelectorAll('input.num');
let all=[];
quat.forEach(n=>{
  let price=Number(n.getAttribute('price'));
  let unit=Number(n.value);
  all.push(Number(price*unit));
})
 sumup=all.reduce((total,n)=>{
  return total+n;
})
if(sumup<budget){
document.querySelector('div.result').innerHTML=`<h1 class="display-4 text-center text-success">
good job! total ${sumup} is in your budget.you can do still buy item of worth rs ${budget-sumup}
</h1>`;
}
else{
  document.querySelector('div.result').innerHTML=`<h1 class="display-4 text-center text-danger">
  the total ${sumup} is going ${sumup-budget} rs  out of your budget but its a good deal!
  </h1>`;

}
console.log(sumup);
})


let price=document.querySelector('input.num').getAttribute("price");
console.log(price+'ddd');

function calc(){
  let quat=document.querySelectorAll('input.num');
  let all=[];
  quat.forEach(n=>{
    let price=Number(n.getAttribute('price'));
    let unit=Number(n.value);
    all.push(Number(price*unit));
  })
   sumup=all.reduce((total,n)=>{
    return total+n;
  })

  return sumup;
}