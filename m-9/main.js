const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const text2 = document.querySelector('#text2');

btn.addEventListener('click', function(){
    if(input.value.length === 0){
    text.innerHTML = "Поле обезательно для заполнений"
    }
});
btn.addEventListener('click', function(){
    if(input.value.length <= 3){
      text2.innerHTML = "Поле должно содержать не менее 3-х символов "  
    }
});

 