import { TestBed } from '@angular/core/testing'; // Импорт TestBed

import { NotificationService } from './notification-service.service'; // Импорт NotificationService

describe('NotificationService', () => { // Описание блока тестов для сервиса уведомлений
  let service: NotificationService;

  beforeEach(() => { // Блок кода, который будет выполнен перед каждым тестом
    TestBed.configureTestingModule({}); // Настройка тестового модуля 
    service = TestBed.inject(NotificationService); // Позволяет получить доступ к сервису для проведения тестов
  });

  it('should be created', () => { // Проверка, что сервис уведомлений был создан
    expect(service).toBeTruthy(); // Проверка утверждения 
  });
});
