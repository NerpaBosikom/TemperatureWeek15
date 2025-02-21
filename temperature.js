// Получаем ссылки на HTML-элементы
const list = document.querySelector(".temperature__list");
const temperatureMin = document.querySelector(".temperature__min");
const temperatureMax = document.querySelector(".temperature__max");

// Массив городов
const cities = ["Москва", "Сеул", "Токио", "Барселона", "Гродно"];
let temperature = []; // Массив для хранения температур

// Функция для запроса температуры с валидацией
function getValidTemperature(city) {
  let temp;
  while (true) {
    temp = prompt(`Введите температуру для города ${city}`);

    // Проверяем, введено ли значение и является ли оно числом
    if (temp !== null && temp.trim() !== "" && !isNaN(temp)) {
      return parseFloat(temp);
    }

    alert("Ошибка! Введите корректное число температуры.");
  }
}

// Запрашиваем у пользователя температуру для каждого города
for (let i = 0; i < cities.length; i++) {
  temperature.push(getValidTemperature(cities[i]));
}

// Добавляем температуры в список на страницу
for (let i = 0; i < cities.length; i++) {
  const li = document.createElement("li");
  li.textContent = `Температура в городе ${cities[i]}: ${temperature[i]} °C`;
  list.appendChild(li);
}

// Вычисляем минимальную и максимальную температуру
const min = Math.floor(Math.min(...temperature)); // Округляем минимальное значение вниз
const max = Math.ceil(Math.max(...temperature)); // Округляем максимальное значение вверх

// Выводим минимальную и максимальную температуру на страницу
temperatureMin.textContent = `Минимальная температура: ${min}°C`;
temperatureMax.textContent = `Максимальная температура: ${max}°C`;
