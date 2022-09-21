

    let mass = +prompt('Маса тіла (кг)');

    console.log(`Маса тіла ${mass} кг.`);
   
    let height = +prompt('Зріст: (м)');
   
    console.log(`Зріст: ${height} м.`);
   
    let index = mass / (height ** 2);

    if(index < 18.5 ) {
        console.log(`Індекс маси тіла: ${index} недостатня маса`);
        alert(`Індекс маси тіла: ${index} недостатня маса`);
    } else if(index >= 18.5 && index <= 24.9) {
        console.log(`Індекс маси тіла: ${index} норма`);
        alert(`Індекс маси тіла: ${index} норма`);
    } else if(index >= 25 && index <= 29.9) {
        console.log(`Індекс маси тіла: ${index} передожиріння`);
        alert(`Індекс маси тіла: ${index} передожиріння`);
    } else if(index >= 30 && index <= 34.9) {
        console.log(`Індекс маси тіла: ${index} ожиріння І ступеня`);
        alert(`Індекс маси тіла: ${index} ожиріння І ступеня`);
    } else if(index >= 35 && index <= 39.9) {
        console.log(`Індекс маси тіла: ${index} ожиріння ІІ ступеня`);
        alert(`Індекс маси тіла: ${index} ожиріння ІІ ступеня`);
    } else if(index >= 40) {
        console.log(`Індекс маси тіла: ${index} ожиріння ІІІ ступеня`);
        alert(`Індекс маси тіла: ${index} ожиріння ІІІ ступеня`);
    }
   
