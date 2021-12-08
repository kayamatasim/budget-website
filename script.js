
 

fetch("products.json").then((products)=>{
  return products.json()
}).then((product)=>{
  product.forEach(p=>{
   let row=document.querySelector('div.sec');
   row.innerHTML+=` <div class="col-sm-3 p-2" style="z-index:2;">
   <div class="card" style:"z-index:1">
       <div class="imgbox" style="z-index:1;">   
                <img src="${p.image}" alt="" class="card-img-top img-fluid">
       </div>
       <div class="card-body">
           <h4 class="card-title my-0">${p.name}</h4>

           <h6>price: ${p.price}rs/kg</h6>
       </div>
       <input type="button" class="btn btn-danger btn-sm m-1 mx-2 down" value="-">
       <input type="button" class="num form btn mx-2" value="0" min="0" price="${p.price}">
       <input type="button" placeholder="button" value="+" class="btn btn-sm btn-success m-1 mx-2 up">
   </div>
</div>`

  incerase();
  decrease()
  })
})




//let budget=prompt('pleae tell us your budget');
let submit=document.querySelector('button.set');
let budgetElem=document.querySelector('input.bud');
let budget=100000;
let sumup=0;

submit.addEventListener('click',()=>{
  budget=Number(budgetElem.value);
})



//function to increase the product count

function incerase(){

let upbuttons=document.querySelectorAll('input.up');
upbuttons.forEach(button => {
  button.addEventListener('click',()=>{
    
     let unit=Number(button.previousElementSibling.value);
     unit+=1;
     button.previousElementSibling.value=unit;
     let total=calc();
     displayresult()
 })
});
}

//function to decrease the product count..
function decrease(){

let downbuttons=document.querySelectorAll('input.down');
downbuttons.forEach(button=>{
  button.addEventListener('click',()=>{
    console.log('clicked')
    if(button.nextElementSibling.value>0){
    let unit=Number(button.nextElementSibling.value);
    unit-=1;
    button.nextElementSibling.value=unit;

    let total=calc();
    }
  displayresult()

  })
})

}



let cart=document.querySelector('a.cart');
cart.addEventListener('click',()=>{
 displayresult();

})




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

function displayresult(){
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
    document.querySelector('div.result').innerHTML=`<h1 class="display-sm-4 text-center text-dark">
  good job! total ${sumup} is in your budget.you can do still buy item of worth rs ${budget-sumup}
  </h1>`;
  }
  else if (sumup==budget) {
    document.querySelector('div.result').innerHTML=`<h1 class="display-sm-4 text-center text-success">
    perfect! the total ${sumup} is exactly equal to your budget
    </h1>`;
  } 
  else{
  document.querySelector('div.result').innerHTML=`<h1 class="display-sm-4 text-center text-danger">
  the total ${sumup} is going ${sumup-budget} rs  out of your budget but its a good deal!
  </h1>`;
  
  }
  console.log(sumup);
  }
  


