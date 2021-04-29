let precioMartillo = 10
let precioBrocha = 4
let preciollave = 6
let preciotronco = 5
let brocha
document.getElementById("cosas").innerHTML =`<div><h1>Brocha</h1><button onclick="function brochaSuma()">+</button><button onclick="function brochaResta()">-</button></div>
<div><h1>llave</h1><button onclick="function llaveSuma()">+</button><button onclick="function llaveResta()">-</button></div>
<div><h1>martillo</h1><button onclick="function martilloSuma()">+</button><button onclick="function martilloResta()">-</button></div>
<div><h1>tronco </h1><button onclick="function troncoSuma()">+</button><button onclick="function troncoResta()">-</button></div>`

function brochaSuma(brocha){
    brocha+=1
    return brocha;
}