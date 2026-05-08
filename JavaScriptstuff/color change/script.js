function changeBlue(){
    document.body.style.backgroundColor = 'blue';
}

function changeRed(){
    document.body.style.backgroundColor = 'red';
}

function changeOrange(){
    document.body.style.backgroundColor = 'orange';
}

function changeGreen(){
    document.body.style.backgroundColor = 'green';
}

function changeWhite(){
    document.body.style.backgroundColor = 'white';
}

document.getElementById('background-blue').addEventListener('click', changeBlue)
document.getElementById('background-red').addEventListener('click', changeRed)
document.getElementById('background-orange').addEventListener('click', changeOrange)
document.getElementById('background-green').addEventListener('click', changeGreen)
document.getElementById('background-white').addEventListener('click', changeWhite)

