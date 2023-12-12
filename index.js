const createN = document.querySelector('.createNote');
const showN = document.querySelector('.displayNotes');

function displayNotes(){
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input";
    inputBox.setAttribute('contenteditable','true');
    img.src='/images/delete.png';
    img.className='delete';
    showN.appendChild(inputBox).appendChild(img);
}

createN.addEventListener('click', displayNotes)

showN.addEventListener('click',(e)=>{
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.tagName==='P'){
        notes = document.querySelectorAll('.input');
        notes.forEach(n => {
            n.onkeyup = function(){
                saveData();
            }
        })
    }
});

function saveData(){
    localStorage.setItem('data',showN.innerHTML);
}

function showData(){
    showN.innerHTML = localStorage.getItem('data');
}

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})

showData();