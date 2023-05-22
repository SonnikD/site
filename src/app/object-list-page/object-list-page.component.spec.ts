import { ComponentFixture, TestBed } from '@angular/core/testing'; // Импорт ComponentFixture и TestBed, используются для создания и настройки компонента во время юнит-тестирования 

import { ObjectListPageComponent } from './object-list-page.component'; // Импорт компонента ObjectListPageComponent

describe('ObjectListPageComponent', () => { // Внутри этого блока будут содержаться тесты
  let component: ObjectListPageComponent; // Оъявляется переменная component, которая будет содержать экземпляр компонента ObjectListPageComponent
  let fixture: ComponentFixture<ObjectListPageComponent>; // объявляется переменная fixture, которая будет содержать объект типа ComponentFixture для компонента ObjectListPageComponent

  beforeEach(() => { // Перед каждым тестом в блоке describe будет выполнена функция, указанная внутри beforeEach
    TestBed.configureTestingModule({ // Создается экземпляр класса TestBed для настройки и конфигурации модуля тестирования
      declarations: [ObjectListPageComponent] // Внутри TestBed.configureTestingModule указывается массив компонентов, которые будут доступны для тестирования в этом модуле
    });
    fixture = TestBed.createComponent(ObjectListPageComponent); // Создается экземпляр компонента ObjectListPageComponent с помощью TestBed.createComponent
    component = fixture.componentInstance; // Присваивается значение переменной component, которая будет содержать экземпляр компонента ObjectListPageComponent
    fixture.detectChanges(); // Вызывается метод detectChanges() объекта fixture
  });

  it('should create', () => { // Проверка, что компонент создан успешно
    expect(component).toBeTruthy(); // Функция expect для сравнения значения component с toBeTruthy(). Если значение component истинно, то тест считается успешным
  }); 
});
