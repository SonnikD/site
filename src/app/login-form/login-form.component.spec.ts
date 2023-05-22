import { ComponentFixture, TestBed } from '@angular/core/testing'; //Импорт модулей ComponentFixture, TestBed для настройки юнит-тестов и манипуляции с тестовым экземпляром компонента
import { FormsModule } from '@angular/forms'; // Импорт модуля FormsModule для работы с формами

import { LoginFormComponent } from './login-form.component'; // Импорт компонента LoginFormComponent
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Импорт модуля HttpClientModule для работы с HTTP

describe('LoginFormComponent', () => { // Функция, которая описывает блок тестов для компонента LoginFormComponent
  let component: LoginFormComponent; // Объявление переменной component с типом LoginFormComponent. Эта переменная будет использоваться для доступа к экземпляру LoginFormComponent внутри тестов
  let fixture: ComponentFixture<LoginFormComponent>; // Объявление переменной fixture с типом ComponentFixture<LoginFormComponent>. Эта переменная представляет фикстуру, которая обертывает LoginFormComponent и предоставляет доступ к его экземпляру для тестирования

  beforeEach(async () => { // Функция используется для настройки окружения перед выполнением тестов
    await TestBed.configureTestingModule({ //Функция используется для настройки модуля тестирования
      declarations: [ LoginFormComponent ], // Объявляем, что компонент LoginFormComponent будет использоваться в этом модуле тестирования
      imports: [ FormsModule, HttpClientModule], // Добавлен импорт FormsModule, HttpClientModule
    })
    .compileComponents(); // Компилирование компонентов внутри модуля тестирования
  });

  beforeEach(() => { // Функция используется для настройки окружения перед выполнением тестов
    fixture = TestBed.createComponent(LoginFormComponent); // Создание экземпляра компонента LoginFormComponent с помощью TestBed.createComponent(). fixture представляет собой объект ComponentFixture, который предоставляет доступ к компоненту и его свойствам
    component = fixture.componentInstance; // Присваивание переменной component ссылку на экземпляр компонента LoginFormComponent
    fixture.detectChanges(); // Метод запускает обнаружение изменений в компоненте и его дочерних компонентах
  });

  it('should create', () => { // Блок тест, который проверяет, должен ли компонент быть создан успешно
    expect(component).toBeTruthy(); // Утверждение теста, которое проверяет, что component не является ложным значением
  });
});
