import { TestBed } from '@angular/core/testing'; // Импорт TestBed
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Импорт HttpClientTestingModule, HttpTestingController

import { AuthService } from './auth-service.service'; // Импорт AuthService

describe('AuthService', () => {   // Используется для описания набора тестов
  let service: AuthService; // Объявление переменной service, которая будет использоваться для взаимодействия с сервисом аутентификации
  let httpMock: HttpTestingController; // Объявление переменной httpMock, которая будет использоваться для создания и управления тестовыми HTTP-запросами

  beforeEach(() => { // Блок, который выполняется перед каждым тестом
    TestBed.configureTestingModule({ // Используется TestBed для конфигурации модуля тестирования
      imports: [HttpClientTestingModule], // Предоставляет тестовое окружение для HTTP-запросов
      providers: [AuthService] // Предоставление AuthService в качестве провайдера
    });
    service = TestBed.inject(AuthService); // Получение экземпляра AuthService из TestBed и присвоение его переменной service
    httpMock = TestBed.inject(HttpTestingController); // Получение экземпляра HttpTestingController из TestBed и присвоение его переменной httpMock
  });

  afterEach(() => { // Блок, который выполняется после каждого теста
    httpMock.verify(); // Проверка, что все ожидаемые HTTP-запросы были выполнены
  });

  it('should be created', () => { // Тест проверяет, что AuthService был создан
    expect(service).toBeTruthy(); // Проверка, что переменная service имеет значение и не является ложным 
  });

  it('should login and save token', () => { // Тест проверяет, что метод login сервиса AuthService выполняет вход и сохраняет токен
    const email = 'test@example.com'; // Электронная почта, которая будет использоваться в тесте
    const password = 'password'; //  Пароль, который будет использоваться в тесте
    const token = 'sample-token'; // Образец токена, который будет использоваться в тесте

    service.login(email, password); // Эмуляция входа пользователя

    const req = httpMock.expectOne('http://localhost:4200/login'); // Создание переменной req, которая будет содержать информацию о тестовом HTTP-запросе
    expect(req.request.method).toBe('POST'); // Проверка, что метод HTTP-запроса является POST
    expect(req.request.body).toEqual({ email, password }); // Проверка, что тело HTTP-запроса соответствует ожидаемым значениям email и password

    req.flush({ token }); // Эмуляция успешного ответа на тестовый HTTP-запрос с передачей token в качестве данных ответа

    expect(service.getToken()).toBe(token); // Проверка, что метод getToken сервиса AuthService возвращает ожидаемый токен
  });

  it('should register and save token', () => { // // Тест проверяет, что метод register сервиса AuthService выполняет регистрацию и сохраняет токен
    const email = 'test@example.com'; // Электронная почта, которая будет использоваться в тесте
    const password = 'password'; // Пароль, который будет использоваться в тесте
    const token = 'sample-token'; // Образец токена, который будет использоваться в тесте
  
    service.register(email, password); // Эмуляция регистрации пользователя
  
    const req = httpMock.expectOne('http://localhost:4200/register'); // Создание переменной req, которая будет содержать информацию о тестовом HTTP-запросе
    expect(req.request.method).toBe('POST'); // Проверка, что метод HTTP-запроса является POST
    expect(req.request.body).toEqual({ email, password }); // Проверка, что тело HTTP-запроса соответствует ожидаемым значениям email и password
   
    req.flush({ token }); // Эмуляция успешного ответа на тестовый HTTP-запрос с передачей token в качестве данных ответа
  
    expect(service.getToken()).toBe(token); // Проверка, что метод getToken сервиса AuthService возвращает ожидаемый токен
  });
  
});
