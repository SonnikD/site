import { ComponentFixture, TestBed } from '@angular/core/testing'; // Импорт ComponentFixture, TestBed для тестирования

import { ObjectModalComponent } from './object-modal.component'; // Импорт ObjectModalComponent

describe('ObjectModalComponent', () => {  // Блок описания для компонента
  let component: ObjectModalComponent; // Переменная component, которая будет представлять экземпляр компонента ObjectModalComponent 
  let fixture: ComponentFixture<ObjectModalComponent>; // Фикстура предоставляет доступ к созданному экземпляру компонента и позволяет взаимодействовать с ним во время тестирования

  beforeEach(() => { // Блок, который будет выполняться перед каждым тестом
    TestBed.configureTestingModule({ // Определяются необходимые зависимости и компоненты, которые будут использоваться во время тестирования
      declarations: [ObjectModalComponent] // 
    });
    fixture = TestBed.createComponent(ObjectModalComponent); // Позволяет создать экземпляр компонента ObjectModalComponent для последующего использования в тестах
    component = fixture.componentInstance; // Доступ к экземпляру компонента через свойство componentInstance
    fixture.detectChanges(); // Обнаружение изменений для компонента
  });

  it('should create', () => { // Проверка, что компонент был успешно создан и существует
    expect(component).toBeTruthy(); // Проверка утверждения
  });
});
