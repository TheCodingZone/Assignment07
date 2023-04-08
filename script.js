var items=document.querySelector('#items');
items.parentElement.style.backgroundColor='#90EE90';

// lastelementchild

items.lastElementChild.textContent='Last Element';
items.lastElementChild.style.backgroundColor='#FFFF99';

//lastchild

items.lastChild.textContent='Last Child';

//Create Child

var child=document.createElement('div');
child.className='child';
child.id='child01';
child.setAttribute('title','Hello_child');
// console.log(child);

var newDivText=document.createTextNode('Hello World');

child.appendChild(newDivText);
// /console.log(child);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
// console.log(child);

child.style.fontSize='30px';
container.insertBefore(child,h1);












// firstelementchild

items.firstElementChild.textContent='First Element Child'; 
items.firstElementChild.style.backgroundColor='#87CEFA';

// firstchild

items.firstChild.textContent='First_Child';
// nextsibling

items.nextSibling.textContent='Next_Sibling';

// nextelementsibling

items.nextElementSibling.textContent='Next_Element_Siblings';

// previoussibling
console.log(items.previousSibling);
items.previousSibling.textContent='Previous_Sibling';

// previouselementsibling

items.previousElementSibling.textContent='LIST OF ITEMS';
items.previousElementSibling.style.color='red';

// createelement
var ele=document.createElement('div');
ele.className='div';
console.log(ele);

// setAttribute
ele.setAttribute('title' ,'newElement');

// createtesxtnode
var textNode=document.createTextNode('Text_Node');

// appendchild
ele.appendChild(textNode);
console.log(ele);

var item=document.querySelector('header .list-group-item');
var h2=document.querySelector('header h2');
console.log(ele);
ele.style.fontSize='30px';
item.insertBefore(ele,h2);

