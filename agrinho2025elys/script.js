// script.js

// Lógica para a Calculadora de Compostagem
function calculateCompost() {
    const materialType = document.getElementById('materialType').value;
    const quantity = parseInt(document.getElementById('quantity').value); // Converte para número inteiro
    const resultDiv = document.getElementById('result');

    // Validação básica de entrada
    if (!materialType || quantity <= 0 || isNaN(quantity)) { // isNaN verifica se não é um número
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<p style="color: #D32F2F; font-weight: bold;">Por favor, selecione um tipo de material e insira uma quantidade válida.</p>';
        return; // Sai da função se a entrada for inválida
    }

    let message = '';
    let decompositionTime = '';
    let tips = '';

    // Lógica para as dicas baseadas no tipo de material
    switch (materialType) {
        case 'restosVegetais':
            decompositionTime = '3 a 6 semanas (se bem picados)';
            tips = 'Ótimos para o equilíbrio "verde"! Pique-os em pedaços pequenos para acelerar a decomposição. Evite cítricos em excesso para não acidificar muito o composto.';
            break;
        case 'folhasSecas':
            decompositionTime = '8 a 12 semanas (se trituradas)';
            tips = 'Essenciais para a parte "marrom" da composteira! Misture bem com materiais verdes e mantenha a umidade para ajudar na quebra.';
            break;
        case 'gramaCortada':
            decompositionTime = '2 a 4 semanas';
            tips = 'Rica em nitrogênio. Use com moderação e misture com muitos materiais marrons para evitar excesso de umidade e mau cheiro. Espalhe em camadas finas.';
            break;
        case 'borraCafe':
            decompositionTime = '4 a 7 semanas';
            tips = 'Excelente fonte de nitrogênio e ajuda a atrair minhocas. Espalhe bem e não coloque em grandes volumes para evitar que forme uma pasta.';
            break;
        default:
            decompositionTime = 'Não estimado';
            tips = 'Selecione um material para obter dicas específicas sobre ele!';
            break;
    }

    // Cria a mensagem de resultado
    message = `
        <p><strong>Material Selecionado:</strong> ${
            materialType === 'restosVegetais' ? 'Restos de vegetais e frutas' :
            materialType === 'folhasSecas' ? 'Folhas secas e galhos finos' :
            materialType === 'gramaCortada' ? 'Grama cortada fresca' :
            materialType === 'borraCafe' ? 'Borra de café e sachês de chá' : 'Não especificado'
        }</p>
        <p><strong>Quantidade Estimada:</strong> ${quantity} balde(s) de 5L</p>
        <p><strong>Tempo de Decomposição Estimado:</strong> ${decompositionTime}</p>
        <p><strong>Dica Importante para este Material:</strong> ${tips}</p>
        <p style="font-size: 0.9em; margin-top: 15px;"><em>Lembre-se: O tempo de decomposição pode variar bastante com as condições da sua composteira (umidade, aeração, temperatura e tamanho dos materiais).</em></p>
    `;

    // Exibe a div de resultado com a mensagem
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = message;

    // Opcional: Rolagem suave para o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}