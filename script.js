/**
 * Script Interativo - CYBERSENAI
 */

// Função ativada ao clicar nos cartões do Módulo 1 (Ameaças)
function mostrarDetalhe(tipoAmeaca) {
    let mensagem = "";
    
    switch(tipoAmeaca) {
        case 'phishing':
            mensagem = "🔎 DETALHE DE AMEAÇA: O Phishing causa bilhões de prejuízos anuais. A dica de ouro é: Bancos e instituições sérias nunca pedem sua senha ou token por SMS ou e-mail. Sempre confira o endereço do remetente.";
            break;
        case 'malware':
            mensagem = "🔎 DETALHE DE AMEAÇA: O Malware pode se esconder em pen drives infectados ou softwares piratas. Na indústria, conectar um celular ou pen drive pessoal não autorizado em um computador da empresa pode comprometer toda a rede.";
            break;
        case 'ransomware':
            mensagem = "🔎 DETALHE DE AMEAÇA: O Ransomware é hoje a maior ameaça corporativa. Ele sequestra os dados e para as fábricas. A única proteção 100% eficaz contra ele é ter backups em locais isolados da internet.";
            break;
        default:
            mensagem = "Mantenha-se seguro no ambiente digital!";
    }
    
    // Mostra o alerta interativo para o aluno/visitante
    alert(mensagem);
}

// Log de sucesso no terminal do navegador para fins de teste
console.log("Sistema CYBERSENAI carregado com sucesso. Bem-vindos ao Grand Prix!");