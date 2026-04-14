/**
 * Função principal que inicia a simulação passo a passo
 */
function iniciarSimulacao() {
    const terminal = document.getElementById('terminal-output');
    
    // Referência aos cards (Nível 1 ao 5)
    const niveis = [
        document.getElementById('level-1'),
        document.getElementById('level-2'),
        document.getElementById('level-3'),
        document.getElementById('level-4'),
        document.getElementById('level-5')
    ];

    // Conteúdo educativo para cada etapa
    const passos = [
        {
            titulo: "ETAPA 1: INTEGRIDADE DO HARDWARE",
            acao: "O sistema verifica se o Smart Glass possui o chip de segurança oficial Petrobras.",
            porque: "Garante que o equipamento não foi modificado por terceiros antes de entrar na área industrial."
        },
        {
            titulo: "ETAPA 2: IDENTIDADE BIOMÉTRICA",
            acao: "Reconhecimento facial e de voz do operador são validados via Nuvem Privada.",
            porque: "Impede que o acesso seja feito por pessoas não autorizadas, mesmo em caso de perda do dispositivo."
        },
        {
            titulo: "ETAPA 3: TÚNEL DE DADOS (ZTNA)",
            acao: "Criação de um túnel criptografado ponto-a-ponto, isolando o tráfego da rede local.",
            porque: "Torna a comunicação invisível para hackers que possam estar tentando interceptar o Wi-Fi ou 5G."
        },
        {
            titulo: "ETAPA 4: INTELIGÊNCIA COM FILTRO DLP",
            acao: "A IA processa a informação e filtra termos sensíveis antes da exibição.",
            porque: "Evita o vazamento acidental de segredos industriais ou coordenadas geográficas restritas."
        },
        {
            titulo: "ETAPA 5: ENTREGA SEGURA DO DADO",
            acao: "O dado é projetado na lente do óculos e apagado da memória assim que lido.",
            porque: "Garante que nenhuma informação crítica fique armazenada fisicamente no dispositivo de campo."
        }
    ];

    // Limpa estados anteriores
    niveis.forEach(card => card.classList.remove('active-level'));
    terminal.innerHTML = "<p class='animate-pulse'>[SISTEMA] Iniciando verificação de protocolo seguro...</p>";

    // Inicia a sequência com intervalos de 4 segundos
    passos.forEach((passo, index) => {
        setTimeout(() => {
            // Desliga o card anterior e liga o atual
            niveis.forEach(card => card.classList.remove('active-level'));
            niveis[index].classList.add('active-level');

            // Atualiza o terminal com as explicações
            terminal.innerHTML = `
                <div class="animate-text">
                    <p class="text-[#FFD100] font-bold text-base mb-2">> ${passo.titulo}</p>
                    <p class="text-white mb-2"><span class="text-gray-500">AÇÃO:</span> ${passo.acao}</p>
                    <p class="text-gray-400 italic"><span class="text-gray-500">OBJETIVO:</span> ${passo.porque}</p>
                </div>
            `;

            // Se for o último passo, mostra mensagem de conclusão
            if (index === passos.length - 1) {
                setTimeout(() => {
                    niveis.forEach(card => card.classList.remove('active-level'));
                    terminal.innerHTML = `
                        <div class="border border-[#008542] bg-[#008542]/10 p-4 rounded animate-text">
                            <p class="text-[#008542] font-bold text-lg">✓ FLUXO DE SEGURANÇA VALIDADO</p>
                            <p class="text-sm mt-1">Conexão estabelecida sob o protocolo Petrobras Seguranca-1. O operador pode prosseguir com a assistência de IA.</p>
                        </div>
                    `;
                }, 4000);
            }

        }, (index + 1) * 4000); // 4 segundos entre cada nível para dar tempo de ler
    });
}