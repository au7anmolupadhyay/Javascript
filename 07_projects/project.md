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
  if(!startInt){      // it checks if startInt is null or not, if not then setInterval gets started. basically did this for memory management(minimal)
    startInt = setInterval(color, 1000);
  }

  function color() {
    document.body.style.backgroundColor = hex();
  }
}

function stopBG() {
  clearInterval(startInt);
  startInt = null;
}


document.querySelector('#start').addEventListener('click', changeBG);
document.querySelector('#stop').addEventListener('click', stopBG);

```


# Project 7

## Key-Code displayer

```HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>
```

```javascript
//JAVASCRIPT FILE
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Data</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `;
});



