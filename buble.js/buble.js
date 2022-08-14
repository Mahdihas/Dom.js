document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 clicked' )
    event.stopPropagation();
})
document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ulcliced')
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('section-containeer')
})