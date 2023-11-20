var doc = document.documentElement;

function openFullScreenMode() {
    if (doc.requestFullscreen)
        doc.requestFullscreen();
    else if (doc.webketRequestFullscreen)
        doc.webketRequestFullscreen();
    else if (doc.mozRequestFullScreen)
        doc.mozRequestFullScreen();
    else if (doc.msRequestFullscreen)
        doc.msRequestFullscreen();
    $('.fullscreen').hide();
    $('.close-fullscreen').show();
}

function closeFullScreenMode() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.webketRequestFullscreen)
        document.webketRequestFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
    $('fullscreen').show();
    $('close-fullscreen').hide();
}




let inputBox = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
    let list = document.createElement('li');

    if(!inputBox.value){
        alert('내용입력하세요.');
    }else{
        list.innerHTML = inputBox.value;//값을 가져온다.
        toDoList.appendChild(list);
        localStorage.setItem('list', list.innerText);
        inputBox.value = '';//입력 버튼누르면 input창은 비워준다.
    }

    function complete(elem){
        elem.addEventListener('click', function(){
            elem.className = 'complete';//style.css에서 가져왔습니다. 
        })
    }
    

})

function initialize(){
    console.log(localStorage.getItem('list'));
    toDoList.innerHTML = localStorage.getItem('list');
    let toDoElments = toDoList.querySelectorAll('li');
    toDoElments.forEach(each=>{
        complete(each); //위에 함수 값 가져오기 
        remove(each); //위에 함수 값 가져오기 
    })
}

initialize();