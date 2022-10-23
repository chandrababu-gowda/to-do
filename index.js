const text = document.getElementById("inputWork");
const btn = document.getElementById('submitBtn');
const list = document.getElementById('list1');

btn.addEventListener('click',()=>{
    let textValue = text.value;
    console.log(textValue);
    list.insertAdjacentHTML('afterend',`<p>${textValue}</p>`)
})










