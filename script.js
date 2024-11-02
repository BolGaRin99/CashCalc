// Функция для вычисления общей суммы
function calculateTotal() {
    // Получаем значения полей ввода купюр
    var hryvnia1000 = parseInt(document.getElementById('hryvnia1000').value) || 0;
    var hryvnia500 = parseInt(document.getElementById('hryvnia500').value) || 0;
    var hryvnia200 = parseInt(document.getElementById('hryvnia200').value) || 0;
    var hryvnia100 = parseInt(document.getElementById('hryvnia100').value) || 0;
    var hryvnia50 = parseInt(document.getElementById('hryvnia50').value) || 0;
    var hryvnia20 = parseInt(document.getElementById('hryvnia20').value) || 0;
    var hryvnia10 = parseInt(document.getElementById('hryvnia10').value) || 0;
    var hryvnia5 = parseInt(document.getElementById('hryvnia5').value) || 0;
    var hryvnia2 = parseInt(document.getElementById('hryvnia2').value) || 0;
    var hryvnia1 = parseInt(document.getElementById('hryvnia1').value) || 0;

    // Получаем значения полей ввода монет
    var coin50 = parseInt(document.getElementById('coin50').value) || 0;
    var coin10 = parseInt(document.getElementById('coin10').value) || 0;

    // Вычисляем общую сумму для каждого инпута
    var total1000 = hryvnia1000 * 1000;
    var total500 = hryvnia500 * 500;
    var total200 = hryvnia200 * 200;
    var total100 = hryvnia100 * 100;
    var total50 = hryvnia50 * 50;
    var total20 = hryvnia20 * 20;
    var total10 = hryvnia10 * 10;
    var total5 = hryvnia5 * 5;
    var total2 = hryvnia2 * 2;
    var total1 = hryvnia1 * 1;

    var totalCoin50 = coin50 * 0.5;
    var totalCoin10 = coin10 * 0.10;

    // Обновляем значения элементов <span> для отображения суммы рядом с каждым инпутом
    document.getElementById('total1000').textContent = total1000 + " грн";
    document.getElementById('total500').textContent = total500 + " грн";
    document.getElementById('total200').textContent = total200 + " грн";
    document.getElementById('total100').textContent = total100 + " грн";
    document.getElementById('total50').textContent = total50 + " грн";
    document.getElementById('total20').textContent = total20 + " грн";
    document.getElementById('total10').textContent = total10 + " грн";
    document.getElementById('total5').textContent = total5 + " грн";
    document.getElementById('total2').textContent = total2 + " грн";
    document.getElementById('total1').textContent = total1 + " грн";
    document.getElementById('totalCoin50').textContent = totalCoin50 + " грн";
    document.getElementById('totalCoin10').textContent = totalCoin10 + " грн";

    // Вычисляем общую сумму
    var total = total1000 + total500 + total200 + total100 + total50 + total20 + total10 + total5 + total2 + total1 + totalCoin50 + totalCoin10;

    // Обновляем значение на странице
    document.getElementById('total').innerHTML = "Загальна сума: " + total + " грн";
}

// Функция для сброса значений полей ввода
function resetFields() {
    // Сброс значений полей ввода
    document.querySelectorAll('input[type="number"]').forEach(function(input) {
        input.value = '';
    });

    // Обнуление содержимого всех элементов <span>
    document.querySelectorAll('span[id^="total"]').forEach(function(span) {
        span.textContent = "0 грн"; // Устанавливаем пустую строку в качестве содержимого
    });

    // Обнуляем общую сумму
    document.getElementById('total').textContent = "Загальна сума: 0 грн";
}


// Получаем ссылки на все поля ввода
var inputs = document.querySelectorAll('input[type="number"]');

// Функция для обновления суммы
function updateTotal() {
    calculateTotal(); // Вызываем функцию calculateTotal() при каждом изменении значения поля ввода
}

// Добавляем обработчик события input к каждому полю ввода
inputs.forEach(function(input) {
    input.addEventListener('input', updateTotal);
});