// EMAILJS INIT
(function(){
    emailjs.init("JT-L09nMHj5xcQ9xI");
})();

// TEXTO ANIMADO
var typed = new Typed(".multiple-text", {
    strings: ["Engenharia de Software", "Adm de Banco de Dados", "Desenvolvimento web"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// FORMULÁRIO
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("gmail_lucas", "template_av0dq84", {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    })
    .then(function() {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form-contato").reset();
    }, function(error) {
        alert("Erro ao enviar: " + JSON.stringify(error));
    });
});
