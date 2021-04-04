function revelidade(){
    var cxidade = document.getElementById('idade')
    var nascimento = Number(new Date("June 5, 2000 03:24:00"))
    var hoje = Number(new Date())
    var idade = parseInt((hoje-nascimento)/31557600000)
    document.getElementById("idade").innerText = Number(idade)
}