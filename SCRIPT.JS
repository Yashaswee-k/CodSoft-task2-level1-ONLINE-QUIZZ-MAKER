let quiz=[

{
q:"Which language is used for web styling?",
o:["HTML","CSS","Python","Java"],
a:"CSS"
},

{
q:"Which language makes websites interactive?",
o:["Java","C","JavaScript","SQL"],
a:"JavaScript"
},

{
q:"Which tag is used for images in HTML?",
o:["img","pic","src","image"],
a:"img"
},

{
q:"Which company developed JavaScript?",
o:["Google","Netscape","Apple","Microsoft"],
a:"Netscape"
},

{
q:"What does CSS stand for?",
o:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],
a:"Cascading Style Sheets"
},

{
q:"Which symbol is used for id in CSS?",
o:[".","#","*","@"],
a:"#"
},

{
q:"Which method prints data in console?",
o:["display()","write()","console.log()","print()"],
a:"console.log()"
},

{
q:"Which keyword is used for variables in JavaScript?",
o:["var","define","int","data"],
a:"var"
},

{
q:"Which HTML tag creates a hyperlink?",
o:["link","a","url","href"],
a:"a"
},

{
q:"Which property changes text color in CSS?",
o:["font-color","text-color","color","background"],
a:"color"
}

];

let i=0;
let score=0;

function loadQ(){

document.getElementById("question").innerHTML=quiz[i].q;

let data="";

quiz[i].o.forEach(x=>{
data+=`<button onclick="checkAns('${x}')">${x}</button>`;
});

document.getElementById("options").innerHTML=data;

document.getElementById("progress").innerHTML=
`Question ${i+1} of ${quiz.length}`;

}

function checkAns(x){

let btns=document.querySelectorAll("#options button");

btns.forEach(btn=>{

btn.disabled=true;

if(btn.innerHTML==quiz[i].a){
btn.style.background="#16a34a";
}

if(btn.innerHTML==x && x!=quiz[i].a){
btn.style.background="#dc2626";
}

});

if(x==quiz[i].a){
score++;
}

}

function nextQ(){

i++;

if(i<quiz.length){

loadQ();

}
else{

document.getElementById("quiz").innerHTML=
`
<h2>Quiz Completed 🎉</h2>
<p style="font-size:28px;color:#16a34a;font-weight:bold;">
Your Score: ${score}/${quiz.length}
</p>
`;

}

}

loadQ();