// Facteurs de conversion pour la longueur en mètres
const lengthFactors = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  inch: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mile: 1609.34
};

function convertLength() {
  const input = parseFloat(document.getElementById('length-input').value);
  const from = document.getElementById('length-from').value;
  const to = document.getElementById('length-to').value;

  if (isNaN(input)) {
    document.getElementById('length-result').textContent = "Entre un nombre valide !";
    return;
  }

  // Convertir en mètres puis dans l'unité cible
  const meters = input * lengthFactors[from];
  const result = meters / lengthFactors[to];

  document.getElementById('length-result').textContent = `${input} ${from} = ${result.toFixed(5)} ${to}`;
}

// Facteurs de conversion pour le poids en kilogrammes
const weightFactors = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
  oz: 0.0283495
};

function convertWeight() {
  const input = parseFloat(document.getElementById('weight-input').value);
  const from = document.getElementById('weight-from').value;
  const to = document.getElementById('weight-to').value;

  if (isNaN(input)) {
    document.getElementById('weight-result').textContent = "Entre un nombre valide !";
    return;
  }

  // Convertir en kilogrammes puis dans l'unité cible
  const kg = input * weightFactors[from];
  const result = kg / weightFactors[to];

  document.getElementById('weight-result').textContent = `${input} ${from} = ${result.toFixed(5)} ${to}`;
}

