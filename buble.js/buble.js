// document.getElementById('item-2').addEventListener('click', function(event){
//     console.log('item-2 clicked' )
//     event.stopPropagation();
// })
// document.getElementById('list-ul').addEventListener('click', function(){
//     console.log('ulcliced')
// })
// document.getElementById('list-container').addEventListener('click', function(){
//     console.log('section-containeer')
// })

///  
// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     console.log(event.target.parentNode);

// })    
// }
//for display node// 
// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);

// })    
// }

// const items = document.getElementsByClassName('item');
// console.log(items);
// for(const item of items){
// item.addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);

// })    
// }

// === event deligate ===  ////
// const listContainer =document.getElementById('list-container').addEventListener('click' ,function(event){
//     // console.log(event.target)
//     event.target.parentNode.removeChild(event.target);
// })


// document.getElementById('add-item').addEventListener('click', function(){
//     const listContainer = document.getElementById('list-container');
//     const li = document.createElement('li');
//     li.classList.add('item');
//     li.innerText = 'brand new item added';
//     listContainer.appendChild(li);
// })
