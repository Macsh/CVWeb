let editorIntro = document.getElementById('editor-intro');
let changingText = document.getElementById('changing-intro');
let differentIntros = ['<?php echo "Salut !"?>', 'console.log("Bonjour !")', 'SELECT * FROM welcome;', '<h1>Bienvenue ici !</h1>'];
let i = 0;
let j = 0;
let pageFocus = true;
let displayCount = 0;
let current = 0;

document.addEventListener('visibilitychange', function() {
    if(document.hidden){
        pageFocus = false;
        changingText.textContent = '1. ';
        clearInterval(typer);
        clearTimeout(timer);
    }
});

function changeIntro() {
    if(i >= 4){
        i=0;
    }

    if(i === 0){
        editorIntro.innerHTML = '<i id="logo" class="fa-brands fa-php"></i> Bienvenue.php'
        let logo = document.getElementById('logo');
        logo.style.color = '#a074c4';
    }
    else if (i === 1){
        editorIntro.innerHTML = '<i id="logo" class="fa-brands fa-js"></i> Bienvenue.js'
        let logo = document.getElementById('logo');
        logo.style.color = '#f0db4f';
    }
    else if (i === 2){
        editorIntro.innerHTML = '<i id="logo" class="fa-solid fa-database"></i> Bienvenue.sql'
        let logo = document.getElementById('logo');
        logo.style.color = '#f55385';
    }
    else if (i === 3){
        editorIntro.innerHTML = '<i id="logo" class="fa-solid fa-code"></i> Bienvenue.html'
        let logo = document.getElementById('logo');
        logo.style.color = '#e37933';
    }

    let content;

    if(current == 0){
        content = differentIntros[i].split("");
    }
    
    let typer = setInterval(function() {
        if(current < content.length) {
            if(current == 0 && displayCount == 0){
                changingText.textContent = '1. ';
            }
            // Blue
            if((displayCount < 5 && i === 0) || (displayCount > 19 && i === 0) || (displayCount < 7 && i === 1) || (displayCount < 6 && i === 2) || (displayCount > 7 && displayCount < 13 && i === 2) || (displayCount > 0 && displayCount < 3 && i === 3) || (displayCount > 20 && displayCount < 23 && i === 3)){
                changingText.innerHTML += '<span style="color: #569cd6;">'+content[current++]+'</span>';
                displayCount++;
            }
            // Yellow
            else if ((displayCount > 4 && displayCount < 11 && i === 0) || (displayCount > 7 && displayCount < 11 && i === 1)){
                changingText.innerHTML += '<span style="color: #dcdcaa;">'+content[current++]+'</span>';
                displayCount++;
            }
            // Orange
            else if ((displayCount > 10 && displayCount < 20 && i === 0) || (displayCount > 11 && displayCount < 23 && i === 1) || (displayCount > 5 && displayCount < 8 && i === 2) || (displayCount > 12 && displayCount < 21 && i === 2)){
                changingText.innerHTML += '<span style="color: #ce9178;">'+content[current++]+'</span>';
                displayCount++;
            }
            // Black
            else if ((displayCount > 6 && displayCount < 8 && i === 1) || (displayCount > 20 && i === 2) || (displayCount > 3 && displayCount < 19 && i === 3)){
                changingText.innerHTML += '<span style="color: white;">'+content[current++]+'</span>';
                displayCount++;
            }
            // Pink
            else if ((displayCount > 10 && displayCount < 12 && i === 1) || (displayCount > 22 && displayCount < 24 && i === 1)){
                changingText.innerHTML += '<span style="color: #da70d6;">'+content[current++]+'</span>';
                displayCount++;
            }
            // Grey
            else if ((displayCount < 1 && i === 3) || (displayCount > 2 && displayCount < 4 && i === 3) || (displayCount > 18 && displayCount < 21 && i === 3) || (displayCount > 22 && i === 3)){
                changingText.innerHTML += '<span style="color: grey;">'+content[current++]+'</span>';
                displayCount++;
            }
        }
        else {
            clearInterval(typer);
        }
    }, 50);

    let timer = setTimeout( function() {
        if(pageFocus){
            i++;
            displayCount = 0;
            current = 0;
            changeIntro();
        }
    }, 5000);

    window.onfocus = function() {
        clearInterval(typer);
        clearTimeout(timer);
        changingText.textContent = '1. ';
        content = differentIntros[i].split("");
        pageFocus = true;
        displayCount = 0;
        current = 0;
        changeIntro();
    };
}
changeIntro();
