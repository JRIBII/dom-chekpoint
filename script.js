
var plusBtns=document.querySelectorAll('#plus-btn')
var total=Number(document.getElementById('total').innerHTML)
var minusBtns=document.querySelectorAll('#minus-btn')
var deleteButtons = document.querySelectorAll('.delete-btn');
const heart = document.querySelector('.heart');
// add product

for(const btn of plusBtns){
    btn.addEventListener("click",function(){
        var qty=Number(btn.previousElementSibling.innerHTML)
        qty++
        console.log(qty)
        btn.previousElementSibling.innerHTML=qty
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total+=price
        document.getElementById('total').innerHTML=total
    })
}

// remove product

for(const btn of minusBtns){
    btn.addEventListener("click",function(){
        var qty=Number(btn.nextElementSibling.innerHTML)
        if(qty>0){
            qty--
        console.log(qty)
        btn.nextElementSibling.innerHTML=qty
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total-=price
        document.getElementById('total').innerHTML=total
        }
    })
}
//remove item 
deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var itemSection = button.closest('.items');
        itemSection.remove();
    });
});
//heart button
heart.addEventListener('click', function () {
    heart.style.color = heart.style.color === 'black' ? 'red' : 'black';
});