let input = document.querySelector('#input')
let add_btn = document.querySelector('.add')
let gss_btn = document.querySelector('.guess')
let nums = document.querySelector('.numbers')
let rm = document.querySelector('#rm_sp')
let msg_con = document.querySelector('.msg_con')

// * VARIABLES *,
let numbers = []
let gss_remain = 10


// FUNCTION TO ADD VALUE IN ELEMENT
function showDom(elm,val){
  elm.innerHTML = val
}
// *SHOWING THE REMAINING GUESSES
showDom(rm,gss_remain)


// FUNCTION TO SHOW WIN OR LOSS 
function showMsg(num,win){
  let res = win ? 'WON' : 'LOSS'
  let msg_message = msg_con.querySelector('.message')
  let msg_num = msg_con.querySelector('.rn_num')
  let msg_btn = msg_con.querySelector('button')
  
  
  showDom(msg_num,num)
  showDom(msg_message,res)
//  msg_message = res;

  // EVENT LISTNER ON BUTTON TO START NEW GAME
  msg_btn.addEventListener('click',() => {
    numbers = []
    gss_remain = 10
    showDom(rm,gss_remain)
    showDom(nums,'00')
    msg_btn.style = `
    pointer-events:none
    `
    msg_con.style = `
    opacity:0
    `
  })
  
  // POINTER EVENTS TO ALL IN NEW GAME BUTTON
  msg_btn.style = 
  `
  pointer-events:all;
  `
  msg_con.style.opacity = '1'
  
}

// FUNCTION TO SHOW ALL NUMBER 
function showNums(){
  let str = ''
  numbers.forEach((num,ind) => {

    ind == 0 ? str += `${num}` : str += `,${num}`
  })
  //nums.innerHTML = str
  showDom(nums,str)
}

// ADDING EVENT LISTNER TO ADD BUTTON TO ADD A NUMBER 
add_btn.addEventListener('click',() => {
   let val = ''
   let input_val = input.value 
    input_val.length > 2 ? input_val.split('').forEach((elm,index) => {
     if (index < 2) {
       val += elm
     }
   }) : val = input_val
   input_val = val
   input.value = '';
   
   if (input_val !== '') 
   {
        numbers.push(input_val)
   }
   
   // IF REMAINING GUESSES IS GREATER THEN ZERO
   if (gss_remain > 0)
   {
   showNums()
   gss_remain--
   showDom(rm,gss_remain)
    }
})

// ADDDING EVENT LISTNER TO GUESS BUTTON TO CHECK IS OUR GUESS MATCHES
gss_btn.addEventListener('click',() => {
  let number;
  let random = Math.floor(Math.random() * 100 )
  if (numbers.length > 0) {
    numbers.forEach(num => {
      number = num
      if (num === random) {
        console.log(num);
        showMsg(num,true)
      }
    })
    showMsg(number,false)
  }
})