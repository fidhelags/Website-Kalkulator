// triangle area

var alasSegitga = document.getElementById('a-triangle-area');
var tinggiSegitiga = document.getElementById('t-triangle-area');
var hitungLuasSegitiga = document.getElementById('h-triangle-area');
var outputLuasSegitiga = document.getElementById('output-triangle-area');
hitungLuasSegitiga.addEventListener('click', function()
{
    let a = alasSegitga.value
    let t = tinggiSegitiga.value
    let l = 0.5*a*t
    outputLuasSegitiga.innerHTML = `L = 1/2 x a x t <br>
    L = 1/2 x ${a} x ${t} <br>
    L = ${l}`
});

var form=document.getElementById("form-triangle-area");
function submitForm(event){
   event.preventDefault();
}

form.addEventListener('submit', submitForm);

// triangle perimeter
(function () {})
var SisiA = document.getElementById('a-triangle-perimeter')
var SisiB = document.getElementById('b-triangle-perimeter')
var SisiC = document.getElementById('c-triangle-perimeter')
var hitungKelilingSegitiga = document.getElementById('h-triangle-perimeter')
var outputKelilingSegitiga = document.getElementById('output-triangle-perimeter')
hitungKelilingSegitiga.addEventListener('click', function()
{
    let x = SisiA.value
    let y = SisiB.value
    let z = SisiC.value
    let k = parseInt(x) + parseInt(y) + parseInt(z)
    outputKelilingSegitiga.innerHTML = `K = a + b + c <br>
    K = ${x} + ${y} + ${z} <br>
    K = ${k}`
})

var form=document.getElementById("form-triangle-perimeter");
function submitForm(event){

   event.preventDefault();
}

form.addEventListener('submit', submitForm);

//parallelogram area
var alasJajarGenjang = document.getElementById('a-parallelogram-area');
var tinggiJajarGenjang = document.getElementById('t-parallelogram-area');
var hitungLuasJajarGenjang = document.getElementById('h-parallelogram-area');
var outputLuasJajarGenjang = document.getElementById('output-parallelogram-area');
hitungLuasJajarGenjang.addEventListener('click', function()
{
    let m = alasJajarGenjang.value
    let n = tinggiJajarGenjang.value
    let o = m*n
    outputLuasJajarGenjang.innerHTML = `L = a x t <br>
    L = ${m} x ${n} <br>
    L = ${o}`
});

var form=document.getElementById("form-parallelogram-area");
function submitForm(event){
   event.preventDefault();
}

form.addEventListener('submit', submitForm);

// parallelogram perimeter
(function () {})
var SisiAlas = document.getElementById('a-parallelogram-perimeter')
var SisiMiring = document.getElementById('b-parallelogram-perimeter')
var hitungKelilingJajarGenjang = document.getElementById('h-parallelogram-perimeter')
var outputKelilingJajarGenjang = document.getElementById('output-parallelogram-perimeter')
hitungKelilingJajarGenjang.addEventListener('click', function()
{
    let p = SisiAlas.value
    let q = SisiMiring.value
    let r = 2*(parseInt(p) + parseInt(q))
    outputKelilingJajarGenjang.innerHTML = `K = 2 x (a + b) <br>
    K = 2 x (${p} + ${q}) <br>
    K = ${r}`
})

var form=document.getElementById("form-parallelogram-perimeter");
function submitForm(event){

   event.preventDefault();
}

form.addEventListener('submit', submitForm);