Let's see all the dom manipulations
__________________________________________________________________________________________________________________________


document.getElementById('title')

document.getElementById('title').id
'title'

document.getElementById('title').class              // this does not return the class name because inside document it is    portrayed in the form of className
undefined

document.getElementById('title').className
'heading'


-> that is why in react when html is written (JSX) we use "className" not "class"
___________________________________________________________________________________________________________________________


document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute("class")
'heading'

👇  this "setAttribute" overwrites the class 
document.getElementById('title').setAttribute("class", 'header')


                                                            ***
👇  agar purani class ka name chahiye toh purana class name aur naya class name dono pass krna pdenga
document.getElementById('title').setAttribute("class", 'heading header')
___________________________________________________________________________________________________________________________

when you provide styling in your console it gets directly added as inline css

title.style.borderRadius = "50px"
'50px'
title.style.fontSize = "2.5rem"
'2.5rem'
title.style.fontSize = "250px"
'250px'
___________________________________________________________________________________________________________________________


    CONTENT:

1)    title.innerHTML
    'DOM Manipulation'

2)    title.innerText
    'DOM Manipulation'
    
3)   title.textContent
    'DOM Manipulation'


difference between these

->  "innerText" only returns the text that is visible on the website

-> if there is any display property that is hidden due css property you then you can use "textContent" it will return whole text that is written in html file whether it is visible on the website or not

->  "innerHTML" this returns the whole code inside that particular tag where this property is applied
for eg. if there is a <P> tag where text is wriiten and inside it there is <span> tag it will also show you that tag with the text, where as in other only the "text" will be returned



para.innerText
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nobis beatae asperiores id commodi optio?'


para.textContent
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nobis beatae asperiores id commodi optio? Cristiano Ronaldo '


para.innerHTML
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nobis beatae asperiores id commodi optio? <span style="display: none;">Cristiano Ronaldo</span> '
___________________________________________________________________________________________________________________________

document.querySelector      -> this selector only selects the first one not all


document.querySelector('h2')
<h2>​Lorem, ipsum dolor sit amet consectetur​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​DOM Manipulation​</h1>

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​DOM Manipulation​</h1>​

document.querySelector('input[type= "password"]')
<input type=​"password" name=​"Pass" id=​"#password">​



-> see the html code for ul of sports, we are trying to select the first list item and style it accordingly

document.querySelector('ul')
<ul>​…​</ul>​

const myUl = document.querySelector('ul')
undefined

myUl.querySelector('li')
<li>​::marker​"football"</li>​

const turnGreen = myUl.querySelector('li')
undefined

turnGreen.style.backgroundColor = 'green'
'green'


->      you can also manipulate it

turnGreen.innerText = "FOOTBALL"
'FOOTBALL'
_______________________________________________________________________________________________________________________________


when you get nodelist you might think it is an array but it is not array but similar to array so you cannot use all functions or properties of array here, but some properties can be used,

to make sure whether it is an array or not see the prototypes, if you find map, and other function it is an array else not
see eg:

👇

document.querySelectorAll('li')
NodeList(4) [li, li, li, li]

const first = document.querySelectorAll('li')
undefined

first[0].style.color="green"
'green'


jaise upar 4 list item the toh first[0] karke access lia, agar 4 nahi hote single hi hota fr bhi nodelist ko without explicity mentioning the index you cannot access the element or tag


const tmp = document.querySelectorAll('li')

tmp
NodeList(4) [li, li, li, li]

// for each takes a callback function

tmp.forEach(function (l){
    l.style.color ='green'})
_______________________________________________________________________________________________________________________________

document.getElementByClassName

it returns you HTML collection where no functions are for loops (check kar skte hai ki hai ya nahi on console.)
therefore we need to convert HTML collection it into an array!

const tempp = document.getElementsByClassName('list-item')      👈this returns you HTML collection

const newArr = Array.from(tempp)        👈 this converts the tempp (HTML collection) into the array

*👇  now you can implement forEach 

newArr.forEach( (i)=>{
    console.log(i)})

