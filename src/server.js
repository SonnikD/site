const express = require('express'); // Подключение модуля Express.js, который предоставляет функциональность для создания сервера и обработки HTTP-запросов
const bodyParser = require('body-parser'); // Подключение модуля body-parser, который обеспечивает парсинг данных запроса в формате JSON
const jwt = require('jsonwebtoken'); // Подключение модуля jsonwebtoken, который используется для создания и проверки JWT-токенов

const app = express(); // Создание экземпляра приложения Express
app.use(bodyParser.json());

// Ключ для подписи и проверки токена
const secretKey = '12345';

// Middleware для настройки CORS
app.use((req, res, next) => {
  // Разрешение доступа с локального хоста
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Разрешение определенных методов
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');

  // Разрешение определенных заголовков
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Разрешение отправки куки и аутентификации
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Продолжение выполнения следующих маршрутов
  next();
});


// Маршрут для получения объектов
app.all('/objects', (req, res) => {
  const objects = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' }
  ];

  // Отправка списка объектов в качестве ответа
  res.json(objects);
});


// Маршрут для проверки токена
app.post('/check-token', (req, res) => {
  const token = req.body.token; // Получение токена из тела запроса

  // Проверка действительности токена
  try {
    if (!token) {
      res.json({ valid: false });
      return;
    }

    const decodedToken = jwt.verify(token, secretKey);
    // Считаем токен действительным, если его подпись успешно проверена
    res.json({ valid: true });

    // Использование расшифрованных данных
    console.log(decodedToken);
    // Доступ к определенным свойствам расшифрованного токена
    console.log(decodedToken.userId);
    console.log(decodedToken.username);
  } catch (error) {
    // Если произошла ошибка при проверке токена, считаем его недействительным
    res.json({ valid: false });
  }
});

// Запуск сервера
const port = 4200;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
