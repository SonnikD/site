import { TestBed } from '@angular/core/testing'; // Импорт TestBed

import { ObjectService } from './myobject.service'; // Импорт ObjectService
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Импорт HttpClient, HttpClientModule

describe('ObjectService', () => { // Блок описания тестов для сервиса ObjectService
  let service: ObjectService; // Объявление переменной service, которая будет использоваться для доступа к экземпляру сервиса 

  beforeEach(() => { // Функция, которая выполняется перед каждым тестом
    TestBed.configureTestingModule({  imports: [HttpClientModule],}); // Создание экземпляра TestBed и вызов метода для настройки модуля тестирования
    service = TestBed.inject(ObjectService); // Получение экземпляра сервиса ObjectService из контейнера
  });

  it('should be created', () => { // Тест, который проверяет, что сервис ObjectService был успешно создан
    expect(service).toBeTruthy(); // Проверка утверждения 
  });
});
