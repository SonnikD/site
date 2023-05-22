import { ComponentFixture, TestBed } from '@angular/core/testing'; // Импорт ComponentFixture, TestBed
import { FormsModule } from '@angular/forms'; // Импорт FormsModule

import { RegistrationFormComponent } from './registration-form.component'; // Импорт RegistrationFormComponent

describe('RegistrationFormComponent', () => { // Описание блока тестов 
  let component: RegistrationFormComponent; // Объявление переменной component для хранения экземпляра RegistrationFormComponent
  let fixture: ComponentFixture<RegistrationFormComponent>; // Объявление переменной fixture для хранения экземпляра ComponentFixture с типом RegistrationFormComponent

  beforeEach(async () => { // Блок, который будет выполняться перед каждым тестом
    await TestBed.configureTestingModule({ // Использование TestBed.configureTestingModule() для конфигурации тестового модуля
      declarations: [ RegistrationFormComponent ], // Определены компоненты для декларации
      imports: [ FormsModule ], // Добавлен импорт FormsModule
    })
    .compileComponents();
  });

  beforeEach(() => { // Блок, который будет выполняться перед каждым тестом
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Метод обновляет представление компонента
  });

  it('should create', () => { // Тест проверяет, должен ли компонент быть создан
    expect(component).toBeTruthy(); // Проверка утверждения
  });
});
