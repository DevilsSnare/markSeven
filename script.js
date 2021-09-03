let input=document.querySelector('.input-field');
let button=document.querySelector('.translate');

button.addEventListener('click', ()=>{
    let input_text=input.value;
    console.log(input_text);
    if(input_text.length<1) {
        alert('Please type text in the text area!');
    }
    else {
        let url = "https://api.funtranslations.com/translate/klingon.json?text=" + encodeURI(input_text);
        fetch(url)
            .then(response=>response.json())
            .then(json=> {
                console.log(json.contents.translated);
                document.querySelector('.output-field').innerText=json.contents.translated;
            })
            .catch((error)=> {
                console.log(error);
                alert("ERROR! Please try again later.");
            })
    }
});
