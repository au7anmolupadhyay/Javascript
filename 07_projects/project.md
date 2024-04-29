# Project 1

## Color Scheme Switcher

``` javascript
console.log("Anmol Upadhyay")

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        // check the target id and click
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
```

# Project 6

## Start-Stop Color Generator

``` javascript

/* generating random colors
_______________________________________________________*/
function hex() {
  let code = Math.floor(Math.random() * 1000000);
  code = '#' + code;

  return code;
}

/* adding logic 
_______________________________________________________*/
let startInt;
function changeBG() {
  startInt = setInterval(color, 1000);

  function color() {
    document.body.style.backgroundColor = hex();
  }
}

function stopBG() {
  clearInterval(startInt);
}


document.querySelector('#start').addEventListener('click', changeBG);
document.querySelector('#stop').addEventListener('click', stopBG);
```

