let a=document.getElementsByClassName("entered_info")[0];
let c1=0;
let i1=0;
let i2=0;
let ba;
// .addEventListener() property takes the event and function 
// there are many events are there which is predefined [refer w3 school for this to see other event some famous events are:click,scroll and so on]
// but we can add the default key of keyboard as event when it got pressed (i.e when we want to add the r key of the keyboard as event listener then we can able to use this)
// keypress indicates the pressed key 
// below syntex represent the way to add the event listener for others key of keyboard

function title(){
if(localStorage.length>0){
document.title=`To do list (${localStorage.length})`;
}
else{
    document.title=`To do list`;
}
}

title();

while(i2<localStorage.length){
    // console.log(localStorage.getItem(`${i1}`));
    if(localStorage.getItem(`${i1}`)!=null){
      acde(localStorage.getItem(`${i1}`),i1);
      i2++;
    }
    i1++;
}
let i;
if(localStorage.length!=0){
i=parseInt(document.getElementById("subparts").children[document.getElementById("subparts").children.length-2].getAttribute("id"),10)+1;
}
else{
    i=localStorage.length;
}

// let i=0;
let idd2;
a.addEventListener("keypress", function (event){
    if(event.key == "Enter"){
        localStorage.setItem(`${i}`,a.value);
        acde(a.value,i);
        i=i+1;
        title();
    }
})

let cd;
function editable(event){
    // here insted of element we are using event i.e addeventlistener ka andar hi function ko declare kiya toh tabhi element use kiya
    // if function baar declare kiya hai aur baar se addeventlistener mai call kar hai tab event use krneka targeted element ka detail chiye toh

    cd=event.target.parentNode.parentNode.getAttribute("id")[1];
    document.getElementById(`ed${cd}`).contentEditable="true";
    // contentEditable attribute is use to make the div text available to edit
    // contentEditable ka help se haame div ka text on the spot edit kar sakthe hai

    // get a cursor to required position (steps):

    var text_div = document.getElementById(`ed${cd}`);

    // select text from a window(allow to select the text automatically without this it can't select the text automatically)
    var selectedText = window.getSelection();
console.log(selectedText);

// // create a range
var selectedRange = document.createRange();
console.log(selectedRange);

// both selectedText and selectedRange is the window object.one is for selecting purpose automatically (selectedText) and another is for range (selectedRange)

    // set position of the cursor in the selected texts
    selectedRange.setStart(text_div.childNodes[0], document.getElementById(`ed${cd}`).childNodes[0].length);
// it help to select the range from which we can set the cursor (range may be from start to middle(or anywhere))

    // collapse the range at boundaries(collapse() method help to set the cursor at start or end(true for start and false for end)(start states that ))

    selectedRange.collapse(false);

    // remove all ranges(it remove all the existing calculated range)
    selectedText.removeAllRanges();

    // add a new range to the selected text
    selectedText.addRange(selectedRange);
    
    // focus the cursor
    text_div.focus();
    
    document.getElementById(`ed${cd}`).addEventListener("keypress",function(event){
        if(event.key=="Enter"){
            document.getElementById(`ed${cd}`).contentEditable="false";
            localStorage.setItem(`${cd}`,document.getElementById(`ed${cd}`).innerHTML);
        }
    })
}
let cb1=1;
let cs1=0.25;
let ct1=4.75;
function acde(m,i){
    // wed();
    let ab=document.createElement("div");
    document.getElementById("subparts").insertBefore(ab,document.getElementById("entered_info2"));
    // insertbefore help to add the element just before the sibling element it takes 2 value:
    // first is element and second is the sibling element above which new element should be added

    ab.setAttribute("class","entered_info entered_info1");
    ab.setAttribute("id",i);

    document.getElementsByTagName("input")[0].value="";
    // first of all for the input type element .write cannot do anything, .value help to get or change the data inside the input. .write works for non-input type element such as simple div or etc

    document.getElementById(`${i}`).innerHTML=`<div id="ed${i}" class=editi>${m}</div>  <div class="options" id="pop${i}"><div class=dot id="dot${i}">&#58</div></div>`;
    // we can't able to write the text inside the div using .write but we can able to write using innerhtml therefore for this purpose use innerhtml 
// console.log("c1 "+c1);
let options1=document.getElementsByClassName("options")[`${c1}`];
// console.log(options1);
// console.log(document.getElementsByClassName("options"));

options1.innerHTML=`${options1.innerHTML} <div class='options11' id=i${i}> <div class=edits1><div class='edits'>Edit</div></div> <hr> <div class=delete1><div class='delete'>Delete</div></div></div>`;

//  a23 =`i${i}`;
document.getElementsByClassName("dot")[`${c1}`].addEventListener("click",function(element){
    element.target.nextElementSibling.style.visibility="visible";
     idd2=element.target.nextElementSibling.getAttribute("id");
    document.getElementById(idd2).addEventListener("mouseover",function(){ 
        document.getElementById(idd2).style.visibility="visible";
    })
    document.getElementById(idd2).addEventListener("mouseout",function(){
        document.getElementById(idd2).style.visibility="hidden";
    })
})
document.getElementsByClassName("edits1")[`${c1}`].firstElementChild.addEventListener("click", editable)
document.getElementsByClassName("delete1")[`${c1}`].firstElementChild.addEventListener("click", delete11)
c1++;
document.getElementById(`ed${i}`).addEventListener("click",completed)
}
let ba1;
function completed(event){
    if(cb1==1){
        ba = setInterval(completed,1,event);
        document.getElementById("Audio").play();
    }
    event.target.parentNode.style.translate=`0px ${cs1}px`;
    event.target.parentNode.style.boxShadow=`0px ${ct1}px rgb(57, 55, 55)`
    cs1=cs1+0.25;
    ct1=ct1-0.25;
    cb1++;
    if(cb1==20){
        clearInterval(ba);
        cb1=1;
        cs1=0.25;
        ct1=4.75;
       localStorage.removeItem(`${event.target.parentNode.getAttribute("id")}`)
       event.target.parentNode.remove();
       c1--;
       title();
    }
}

let jd;
let i1c=1;
let fg
function delete11(event){

    if(i1c==1){
    crh=setInterval(delete11,1);
    jd=event.target.parentNode.parentNode.parentNode.parentNode;
    }
jd.style.translate=`${i1c}vw`;
    i1c++;
    if(i1c>70){
    clearInterval(crh);
    i1c=1;
    localStorage.removeItem(`${jd.getAttribute("id")}`);
    jd.remove();
    c1--;
    title();
    // remove is use to remove the div element

            }
}

// for animation purpose while deleting the all tasks

let sj = document.getElementById("delete_all_task");

sj.addEventListener("click",delete_button);
let cb=1;
let cs=0.275;
let ct=5.225;

function delete_button(){
    if(cb==1){
        ba = setInterval(delete_button,1);
    }
    sj.style.translate=`0px ${cs}px`;
    sj.style.boxShadow=`0px ${ct}px rgb(143, 8, 8)`
    cs=cs+0.275;
    ct=ct-0.275;
    cb++;
    if(cb==20){
        clearInterval(ba);
        cb=1;
        cs=0.275;1
        ct=5.225;
        recover_button();
    }
}
let crh7;
let i2c=1;

function recover_button(){
    if(cb==1){
        ba = setInterval(recover_button,1);
    }
    sj.style.translate=`0px ${ct}px`;
    sj.style.boxShadow=`0px ${cs}px rgb(143, 8, 8)`
    cs=cs+0.275;
    ct=ct-0.275;
    cb++;
    if(cb==20){
        clearInterval(ba);
        cb=1;
        cs=0.275;
        ct=5.225; 
        delete112();  
    }
}
let im=0;
let status1 = false;

function delete112(){
    if(!status1){
        crh7=setInterval(delete112,1);
        status1=true;
        }
    if(localStorage.length!=0){
    document.getElementsByClassName("entered_info1")[im].style.translate=`${i2c}vw`;
        i2c++;
        if(i2c>70){
        i2c=1;
        localStorage.removeItem(document.getElementsByClassName("entered_info1")[im].getAttribute("id"));
        document.getElementsByClassName("entered_info1")[im].remove();
        c1--;
    }
}
    else if(localStorage.length==0){
        clearInterval(crh7);
        title();
        status1=false;
    }
}