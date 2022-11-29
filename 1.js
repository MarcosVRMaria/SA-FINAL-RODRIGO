var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var x = 10
var y = 500
var TA // TA= Taxa de atualização
var estouro //crash de aposta
TA = estouro / 10
var min = 1
var max = 100
var contador = 0


estouro = Math.random() * (max - min) + min;
estouro = Math.floor(estouro)
console.log(estouro)

for (var i = 0; i <= estouro; i++) {
    function animacao() {

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x = x + 5, y = y - 3);
        ctx.stroke();

    }
    setInterval(animacao, 100)
    console.log("a" + i)
}
function crash() {

    ctx.moveTo(x, y);
    ctx.lineTo(x, y = y + 1000);
    ctx.stroke();
}
crash()

console.log("b" + contador)
console.log(estouro)
