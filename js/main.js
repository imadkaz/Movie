let me = document.querySelector('.menu');
// let text = document.querySelector('.title');
let li = document.querySelectorAll('li');
let a = document.querySelectorAll('a');
let ab = document.querySelector('.a');
let btn = document.getElementById('btn');
let brg = document.querySelector('.burger');


// function menu(){
//         // resize()
//        me.style.width = 53 +'px';
    
//        text.style.display = 'none';
// }
// // function showmenu(){
// //     me.style.width = '260px';
// //     text.style.display = 'block';
// // }
// function resize(){
    
//     // me.classList.add('width');
//     // text.classList.add('hidden');
// }
// function unresize(){
    
//     me.classList.remove('width');
//     text.classList.remove('hidden');
// }




btn.onclick = ()=>{
    me.classList.toggle('active');
    // brg.className ='fa-solid fa-x';
}
 


   for( let i=0;i<=li.length;i++){
    li[i].addEventListener('mouseenter', ()=>{
    li[i].style.backgroundColor='#fff';
    li[i].style.borderRadius=25 +'px';
    a[i-1].style.color = '#000';
    // ab.style.color = '#000'; 
});
 li[i].addEventListener('mouseleave', ()=>{
    li[i].style.backgroundColor='';
    a[i-1].style.color = '#fff';
  });  
}



