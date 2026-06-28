// ==========================================
// SCRIPT.JS - VERSÃO CORRIGIDA
// ==========================================

// Aguarda o DOM carregar completamente antes de executar qualquer coisa
document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // EMAILJS INIT
    // ==========================================
    (function(){
        emailjs.init("JT-L09nMHj5xcQ9xI");
    })();

    // ==========================================
    // TEXTO ANIMADO - Verifica se o elemento existe
    // ==========================================
    var multipleTextElement = document.querySelector(".multiple-text");
    if (multipleTextElement) {
        var typed = new Typed(".multiple-text", {
            strings: ["Engenharia de Software", "Adm de Banco de Dados", "Desenvolvimento web"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
        console.log("✅ Texto animado iniciado!");
    } else {
        console.warn("⚠️ Elemento .multiple-text não encontrado. O texto animado não será exibido.");
    }

    // ==========================================
    // FORMULÁRIO - Verifica se o formulário existe
    // ==========================================
    var formContato = document.getElementById("form-contato");
    if (formContato) {
        formContato.addEventListener("submit", function(event) {
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
        console.log("✅ Formulário de contato configurado!");
    } else {
        console.warn("⚠️ Formulário #form-contato não encontrado.");
    }

    // ==========================================
    // MODAL - SAIBA MAIS
    // ==========================================

    // Pegando os elementos do DOM
    var modal = document.getElementById("modal-projeto");
    var modalTitulo = document.getElementById("modal-titulo");
    var modalCorpo = document.getElementById("modal-corpo");
    var fecharModal = document.querySelector(".modal-fechar");

    // Verifica se o modal existe
    if (!modal) {
        console.error("❌ Modal #modal-projeto não encontrado. Verifique se a div do modal está no HTML.");
        return;
    }

    // Dados detalhados de cada projeto
    var projetosDetalhes = {
        "sistema-bancario": {
            titulo: "🏦 Sistema Bancário",
            corpo: `
                <p><strong> Sobre o projeto:</strong></p>
                <p>Sistema desenvolvido em Java para gerenciar contas bancárias com funcionalidades completas. O projeto foi criado como parte do aprendizado de Programação Orientada a Objetos e simula operações básicas de um banco.</p>
                
                <p><strong> Funcionalidades:</strong></p>
                <ul>
                    <li> Criar nova conta</li>
                    <li> Realizar saque com validação de saldo e limite</li>
                    <li> Realizar depósito</li>
                    <li> Transferência entre contas</li>
                    <li> Listar todas as contas cadastradas</li>
                </ul>
                
                <p><strong>Tecnologias utilizadas:</strong></p>
                <div>
                    <span class="tech-destaque">Java</span>
                
                </div>
                
                <p><strong> Desafios e aprendizados:</strong></p>
                <ul>
                    <li> Implementação de validações de saldo e limites</li>
                    <li> Estruturação de um sistema orientado a objetos com classes bem definidas</li>
                    <li> Gerenciamento de dados em memória com Collections</li>
                </ul>
                
                <p><strong>👨‍💻 Projeto solo</strong></p>
                <p style="color: #0ef; margin-top: 10px;">🔗 <a href="https://github.com/Andrade098/ProjetoBanco.Java" target="_blank" style="color: #0ef;">Ver código no GitHub</a></p>
            `
        },
        
        "vetfarm": {
            titulo: "🐄 VetFarm",
            corpo: `
                <p><strong> Sobre o projeto:</strong></p>
                <p>A VetFarm é um marketplace digital que conecta produtores rurais a fornecedores de insumos veterinários. A plataforma foi desenvolvida para facilitar o acesso a produtos essenciais em regiões rurais, oferecendo catálogo, pagamentos digitais e logística adaptada.</p>
                
                <p><strong> Funcionalidades:</strong></p>
                <ul>
                    <li> Catálogo de produtos veterinários</li>
                    <li> Sistema de pagamentos digitais</li>
                    <li> Logística de entrega adaptada ao campo</li>
                    <li> Conexão entre produtores e fornecedores</li>
                </ul>
                
                <p><strong> Tecnologias utilizadas:</strong></p>
                <div>
                    <span class="tech-destaque">SQL</span>
                    <span class="tech-destaque">Java</span>
                    <span class="tech-destaque">React</span>
                </div>
                
                <p><strong>👥 Trabalho em equipe:</strong></p>
                <p>👤 <strong>Minha contribuição:</strong> Modelagem do banco de dados e integração com a API.</p>
                
                <p><strong> Desafios e aprendizados:</strong></p>
                <ul>
                    <li> Modelagem de banco de dados para um marketplace complexo</li>
                    <li> Integração entre back-end (Java/Spring) e front-end (React)</li>
                    <li> Trabalho em equipe utilizando metodologias ágeis</li>
                </ul>
                
                <p style="color: #0ef; margin-top: 10px;">📄 <a href="https://docs.google.com/document/d/1VqK-bWwCaIc7R8Jrrp1W6yxiFBseVLPEtXyoUJnFitY/edit?usp=sharing" target="_blank" style="color: #0ef;">Ver documentação completa</a></p>
                <p style="color: #0ef;">🔗 <a href="https://github.com/Andrade098/app-vetfarm" target="_blank" style="color: #0ef;">Ver código no GitHub</a></p>
            `
        },
        
        "pitwall": {
            titulo: "🏎️ PitWall - Fórmula 1",
            corpo: `
                <p><strong> Sobre o projeto:</strong></p>
                <p>Plataforma de monitoramento em tempo real para corridas de Fórmula 1, inspirada no Live Timing do F1TV. O projeto simula dados de corrida com WebSockets, exibindo posições, gaps, pneus, eventos e classificação em tempo real.</p>
                
                <p><strong> Funcionalidades:</strong></p>
                <ul>
                    <li> Simulação de dados de corrida em tempo real</li>
                    <li> Posicionamento dos pilotos com gaps</li>
                    <li> Informações de pneus e estratégias</li>
                    <li> Eventos da corrida (ultrapassagens, pit stops, etc.)</li>
                    <li> Classificação final em tempo real</li>
                </ul>
                
                <p><strong> Tecnologias utilizadas:</strong></p>
                <div>
                    <span class="tech-destaque">HTML</span>
                    <span class="tech-destaque">CSS</span>
                    <span class="tech-destaque">JavaScript</span>
                    <span class="tech-destaque">WebSockets</span>
                    <span class="tech-destaque">Node.js</span>
                </div>
                
                <p><strong> Desafios e aprendizados:</strong></p>
                <ul>
                    <li> Implementação de comunicação em tempo real com WebSockets</li>
                    <li> Simulação de dados dinâmicos para corridas</li>
                    <li> Criação de uma interface responsiva e imersiva para fãs de F1</li>
                </ul>
                
                <p><strong>👨‍💻 Projeto solo</strong></p>
                <p style="color: #0ef; margin-top: 10px;">🔗 <a href="#" target="_blank" style="color: #0ef;">Ver código no GitHub (em breve)</a></p>
            `
        }
    };

    // Função para abrir o modal
    function abrirModal(projetoId) {
        var dados = projetosDetalhes[projetoId];
        if (!dados) {
            alert("Projeto não encontrado!");
            return;
        }
        
        modalTitulo.textContent = dados.titulo;
        modalCorpo.innerHTML = dados.corpo;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        console.log("✅ Modal aberto:", projetoId);
    }

    // Função para fechar o modal
    function fecharModalFunc() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        console.log("✅ Modal fechado");
    }

    // Adicionar evento a todos os botões "Saiba Mais"
    var botoes = document.querySelectorAll(".btn-saiba-mais");
    console.log("🔍 Botões 'Saiba Mais' encontrados:", botoes.length);

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", function(event) {
            event.preventDefault();
            var projetoId = this.getAttribute("data-projeto");
            console.log("🖱️ Clique no botão:", projetoId);
            abrirModal(projetoId);
        });
    }

    // Fechar modal ao clicar no X
    if (fecharModal) {
        fecharModal.addEventListener("click", fecharModalFunc);
    }

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharModalFunc();
        }
    });

    // Fechar modal com a tecla ESC
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            fecharModalFunc();
        }
    });

    console.log("✅ script.js carregado com sucesso!");

}); // Fim do DOMContentLoaded
