
function calcularTDEE() {
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var genero = document.getElementById("genero").value;
  var nivelAtividade = document.getElementById("nivelAtividade").value;
  var resultadoElement = document.getElementById("resultado");
  var bulkingCaloriesElement = document.getElementById("bulkingCalories");
  var cuttingCaloriesElement = document.getElementById("cuttingCalories");
  var maintenanceCaloriesElement = document.getElementById("maintenanceCalories");

 
  var fatorAtividade = 1.2; // Sedentário por padrão

  switch (nivelAtividade) {
      case "leve":
          fatorAtividade = 1.2;
          break;
      case "moderado":
          fatorAtividade = 1.4;
          break;
      case "ativo":
          fatorAtividade = 1.6;
          break;
      case "muitoAtivo":
          fatorAtividade = 1.8;
          break;
  }

  
  var tdee = 0;

  if (genero === "feminino") {
      tdee = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) * fatorAtividade;
  } else if (genero === "masculino") {
      tdee = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) * fatorAtividade;
  }

  resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   // Calorias para bulking (+500 kcal) e cutting (-500 kcal)
   var bulkingCalories = tdee + 500;
   var cuttingCalories = tdee - 500;
   var maintenanceCalories = tdee;

   // Exibir os resultados na tela
   resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   bulkingCaloriesElement.textContent = bulkingCalories.toFixed(2);
   cuttingCaloriesElement.textContent = cuttingCalories.toFixed(2);
   maintenanceCaloriesElement.textContent = maintenanceCalories.toFixed(2);


}


function calcularTDEE() {
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var genero = document.getElementById("genero").value;
  var nivelAtividade = document.getElementById("nivelAtividade").value;
  var resultadoElement = document.getElementById("resultado");
  var bulkingCaloriesElement = document.getElementById("bulkingCalories");
  var cuttingCaloriesElement = document.getElementById("cuttingCalories");
  var maintenanceCaloriesElement = document.getElementById("maintenanceCalories");

 
  var fatorAtividade = 1.2; // Sedentário por padrão

  switch (nivelAtividade) {
      case "leve":
          fatorAtividade = 1.2;
          break;
      case "moderado":
          fatorAtividade = 1.4;
          break;
      case "ativo":
          fatorAtividade = 1.6;
          break;
      case "muitoAtivo":
          fatorAtividade = 1.8;
          break;
  }

  
  var tdee = 0;

  if (genero === "feminino") {
      tdee = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) * fatorAtividade;
  } else if (genero === "masculino") {
      tdee = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) * fatorAtividade;
  }

  resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   // Calorias para bulking (+500 kcal) e cutting (-500 kcal)
   var bulkingCalories = tdee + 500;
   var cuttingCalories = tdee - 500;
   var maintenanceCalories = tdee;

   // Exibir os resultados na tela
   resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   bulkingCaloriesElement.textContent = bulkingCalories.toFixed(2);
   cuttingCaloriesElement.textContent = cuttingCalories.toFixed(2);
   maintenanceCaloriesElement.textContent = maintenanceCalories.toFixed(2);


}




// Função para obter o valor total de calorias
function obterTotalCaloriasB() {
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var genero = document.getElementById("genero").value;
  var nivelAtividade = document.getElementById("nivelAtividade").value;
  var resultadoElement = document.getElementById("resultado");
  var bulkingCaloriesElement = document.getElementById("bulkingCalories");
  
  var fatorAtividade = 1.2; // Sedentário por padrão

  switch (nivelAtividade) {
      case "leve":
          fatorAtividade = 1.2;
          break;
      case "moderado":
          fatorAtividade = 1.4;
          break;
      case "ativo":
          fatorAtividade = 1.6;
          break;
      case "muitoAtivo":
          fatorAtividade = 1.8;
          break;
  }

  
  var tdee = 0;

  if (genero === "feminino") {
      tdee = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) * fatorAtividade;
  } else if (genero === "masculino") {
      tdee = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) * fatorAtividade;
  }

  resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   // Calorias para bulking (+500 kcal) e cutting (-500 kcal)
   var bulkingCalories = tdee + 500;
   resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   bulkingCaloriesElement.textContent = bulkingCalories.toFixed(2);

  // Substitua esta linha com a lógica para recuperar o valor total de calorias de outra função ou fonte de dados
  return  bulkingCalories// Valor de exemplo, você deve substituir pelo valor real
}

function calcularGramasB() {
  var proteinasPorcentagem = parseFloat(document.getElementById("proteinasPorcentagem1").value);
  var carboidratosPorcentagem = parseFloat(document.getElementById("carboidratosPorcentagem1").value);
  var gordurasPorcentagem = parseFloat(document.getElementById("gordurasPorcentagem1").value);
  
  var totalCalorias = obterTotalCaloriasB(); // Chama a função para obter o valor total de calorias
  
  var totalPorcentagem = proteinasPorcentagem + carboidratosPorcentagem + gordurasPorcentagem;

  if (totalPorcentagem !== 100) {
      alert("As porcentagens devem somar 100%.");
      return;
  }

  var proteinasGramas = (proteinasPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de proteína
  var carboidratosGramas = (carboidratosPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de carboidrato
  var gordurasGramas = (gordurasPorcentagem / 100) * totalCalorias / 9; // 9 calorias por grama de gordura

  document.getElementById("proteinasGramas1").textContent = proteinasGramas.toFixed(2) + " gramas";
  document.getElementById("carboidratosGramas1").textContent = carboidratosGramas.toFixed(2) + " gramas";
  document.getElementById("gordurasGramas1").textContent = gordurasGramas.toFixed(2) + " gramas";
}



 // Função para obter o valor total de calorias
 function obterTotalCaloriasC() {
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var genero = document.getElementById("genero").value;
  var nivelAtividade = document.getElementById("nivelAtividade").value;
  var resultadoElement = document.getElementById("resultado");
  var cuttingCaloriesElement = document.getElementById("cuttingCalories");
  
  var fatorAtividade = 1.2; // Sedentário por padrão

  switch (nivelAtividade) {
      case "leve":
          fatorAtividade = 1.2;
          break;
      case "moderado":
          fatorAtividade = 1.4;
          break;
      case "ativo":
          fatorAtividade = 1.6;
          break;
      case "muitoAtivo":
          fatorAtividade = 1.8;
          break;
  }

  
  var tdee = 0;

  if (genero === "feminino") {
      tdee = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) * fatorAtividade;
  } else if (genero === "masculino") {
      tdee = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) * fatorAtividade;
  }

  resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   // Calorias para bulking (+500 kcal) e cutting (-500 kcal)
   var cuttingCalories = tdee - 500;

   resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   cuttingCaloriesElement.textContent = cuttingCalories.toFixed(2);

  // Substitua esta linha com a lógica para recuperar o valor total de calorias de outra função ou fonte de dados
  return cuttingCalories// Valor de exemplo, você deve substituir pelo valor real
}

function calcularGramasC() {
  var proteinasPorcentagem = parseFloat(document.getElementById("proteinasPorcentagem2").value);
  var carboidratosPorcentagem = parseFloat(document.getElementById("carboidratosPorcentagem2").value);
  var gordurasPorcentagem = parseFloat(document.getElementById("gordurasPorcentagem2").value);
  
  var totalCalorias = obterTotalCaloriasC(); // Chama a função para obter o valor total de calorias
  
  var totalPorcentagem = proteinasPorcentagem + carboidratosPorcentagem + gordurasPorcentagem;

  if (totalPorcentagem !== 100) {
      alert("As porcentagens devem somar 100%.");
      return;
  }

  var proteinasGramas = (proteinasPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de proteína
  var carboidratosGramas = (carboidratosPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de carboidrato
  var gordurasGramas = (gordurasPorcentagem / 100) * totalCalorias / 9; // 9 calorias por grama de gordura

  document.getElementById("proteinasGramas2").textContent = proteinasGramas.toFixed(2) + " gramas";
  document.getElementById("carboidratosGramas2").textContent = carboidratosGramas.toFixed(2) + " gramas";
  document.getElementById("gordurasGramas2").textContent = gordurasGramas.toFixed(2) + " gramas";
}




function obterTotalCaloriasM() {
  var idade = parseFloat(document.getElementById("idade").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var genero = document.getElementById("genero").value;
  var nivelAtividade = document.getElementById("nivelAtividade").value;
  var resultadoElement = document.getElementById("resultado");
  var maintenanceCaloriesElement = document.getElementById("maintenanceCalories");
  
  var fatorAtividade = 1.2; // Sedentário por padrão

  switch (nivelAtividade) {
      case "leve":
          fatorAtividade = 1.2;
          break;
      case "moderado":
          fatorAtividade = 1.4;
          break;
      case "ativo":
          fatorAtividade = 1.6;
          break;
      case "muitoAtivo":
          fatorAtividade = 1.8;
          break;
  }

  
  var tdee = 0;

  if (genero === "feminino") {
      tdee = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) * fatorAtividade;
  } else if (genero === "masculino") {
      tdee = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)) * fatorAtividade;
  }

  resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   // Calorias para bulking (+500 kcal) e cutting (-500 kcal)
   var maintenanceCalories = tdee;


   resultadoElement.textContent = "Sua TDEE estimada é: " + tdee.toFixed(2) + " calorias por dia.";
   maintenanceCaloriesElement.textContent = maintenanceCalories.toFixed(2);

  // Substitua esta linha com a lógica para recuperar o valor total de calorias de outra função ou fonte de dados
  return maintenanceCalories// Valor de exemplo, você deve substituir pelo valor real
}

function calcularGramasM() {
  var proteinasPorcentagem = parseFloat(document.getElementById("proteinasPorcentagem3").value);
  var carboidratosPorcentagem = parseFloat(document.getElementById("carboidratosPorcentagem3").value);
  var gordurasPorcentagem = parseFloat(document.getElementById("gordurasPorcentagem3").value);
  
  var totalCalorias = obterTotalCaloriasM(); // Chama a função para obter o valor total de calorias
  
  var totalPorcentagem = proteinasPorcentagem + carboidratosPorcentagem + gordurasPorcentagem;

  if (totalPorcentagem !== 100) {
      alert("As porcentagens devem somar 100%.");
      return;
  }

  var proteinasGramas = (proteinasPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de proteína
  var carboidratosGramas = (carboidratosPorcentagem / 100) * totalCalorias / 4; // 4 calorias por grama de carboidrato
  var gordurasGramas = (gordurasPorcentagem / 100) * totalCalorias / 9; // 9 calorias por grama de gordura

  document.getElementById("proteinasGramas3").textContent = proteinasGramas.toFixed(2) + " gramas";
  document.getElementById("carboidratosGramas3").textContent = carboidratosGramas.toFixed(2) + " gramas";
  document.getElementById("gordurasGramas3").textContent = gordurasGramas.toFixed(2) + " gramas";
}






//card 1

var botaoMostrar = document.getElementById("b");
var meuCard = document.getElementById("cb");

// Adicione um ouvinte de clique ao botão
botaoMostrar.addEventListener("click", function() {
    // Verifique o estado atual do card
    if (meuCard.classList.contains("ativo")) {
        meuCard.classList.remove("ativo");
    } else {
        meuCard.classList.add("ativo");
    }
});


//card 2

var botaoMostrar = document.getElementById("c");
var meuCard2 = document.getElementById("cc");

// Adicione um ouvinte de clique ao botão
botaoMostrar.addEventListener("click", function() {
    // Verifique o estado atual do card
    if (meuCard2.classList.contains("ativo")) {
        meuCard2.classList.remove("ativo");
    } else {
        meuCard2.classList.add("ativo");
    }
});


//card 3

var botaoMostrar = document.getElementById("m");
var meuCard3 = document.getElementById("cm");

// Adicione um ouvinte de clique ao botão
botaoMostrar.addEventListener("click", function() {
    // Verifique o estado atual do card
    if (meuCard3.classList.contains("ativo")) {
        meuCard3.classList.remove("ativo");
    } else {
        meuCard3.classList.add("ativo");
    }
});

















