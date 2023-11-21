const inputTaks = document.querySelector('.input-new-taks')
const addTaks = document.querySelector('.btn-add-taks')
const taks = document.querySelector('.taks')

function createLi() {
    const li = document.createElement('li');
    return li;

}



function createButtonClear(li){
   // createClean.setAttribute('id','remove')
   // document.getElementById("remove").style.color = "red"
    
   li.setAttribute('id', 'texto')
   document.getElementById('texto').style.color = "rgb(105, 105, 105)"
   li.innerHTML += ' ';
    const createClean = document.createElement('button')
    createClean.innerText = 'remove';
    createClean.setAttribute('class','remove')
    createClean.setAttribute('id', 'remuve')
    li.appendChild(createClean)
    createClean.addEventListener('click', function(ev){
        const el = ev.target;
        el.parentElement.remove();
        salvetaks();
    })
}

inputTaks.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTaks.value) return;
        createTaks(inputTaks.value)
        clearInput()
    }
})

function clearInput(){
    inputTaks.value = '';
    inputTaks.focus()
}

function createTaks(textoInput) {
    const li = createLi();
    li.innerHTML = textoInput
    taks.appendChild(li)
    clearInput()
    createButtonClear(li)
    salvetaks()
}

addTaks.addEventListener('click', function (ev) {
    if (!inputTaks.value) return;
    createTaks(inputTaks.value)

})

function salvetaks(){
    const litaks = document.querySelectorAll('li');
    const listoftaks = [];

    for (let taks of litaks){
        let takstext = taks.innerText;
        takstext = takstext.replace('remove', '').trim()
        listoftaks.push(takstext)
    }

    const taksJSON = JSON.stringify(listoftaks);
    localStorage.setItem('taks', taksJSON);
}

function addtakssalve(){
    const taks = localStorage.getItem('taks');
    const listoftaks = JSON.parse(taks)
    
    for (let taks of listoftaks){
        createTaks(taks)
    }
}

addtakssalve()