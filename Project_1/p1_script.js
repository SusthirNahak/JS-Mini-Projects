const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'col1'){
            body.style.backgroundColor = '#B5C0D0';
        }
        if(e.target.id == 'col2'){
            body.style.backgroundColor = '#CCD3CA';
        }
        if(e.target.id == 'col3'){
            body.style.backgroundColor = '#DC8686';
        }
        if(e.target.id == 'col4'){
            body.style.backgroundColor = '#AAD7D9';
        }
    })
})
