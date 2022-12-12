let nav = document.getElementById('nav')

let div = document.getElementById('div')

nav.addEventListener('click', () => {
    div.classList.toggle('show');

})

let nav1 = document.getElementById('nav1')
let div1 = document.getElementById('div1')

nav1.addEventListener('click', () => {
    div1.classList.toggle('show')
})


let cli = document.querySelector(".su");
let clo = document.querySelector(".r1");

cli.onclick = function () {
    let clo1 = clo.cloneNode(true);
    clo1.className = "ttt";
    document.forms[0].appendChild(clo1);
}


