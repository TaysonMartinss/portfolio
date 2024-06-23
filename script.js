
let frasesMotivacionais = [
    {
        pensador: "Walt Disney",
        frase: "Se você pode sonhar, você pode fazer."
    },
    {
        pensador: "Steve Jobs",
        frase: "A única maneira de fazer um excelente trabalho é amar o que você faz."
    },
    {
        pensador: "Nelson Mandela",
        frase: "Sempre parece impossível até que seja feito."
    },
    {
        pensador: "Confúcio",
        frase: "O homem que move montanhas começa carregando pequenas pedras."
    },
    {
        pensador: "Albert Einstein",
        frase: "A criatividade é a inteligência se divertindo."
    }
];

function exibirfrase() {
    let aleatorio = Math.floor(Math.random() * frasesMotivacionais.length);
    let fraseMotivacional = frasesMotivacionais[aleatorio];
    document.getElementById("fraseMotivacional").innerHTML = `"${fraseMotivacional.frase}" <br> <br> - ${fraseMotivacional.pensador}`;


}


window.onload = exibirfrase;
