

document.querySelectorAll('#menu a').forEach((item)=>{
    item.addEventListener('click', () =>{
        console.log(item);
        document.getElementById('checkbox').checked = false
    })
});
