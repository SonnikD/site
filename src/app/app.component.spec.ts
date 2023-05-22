import { TestBed } from '@angular/core/testing'; // Импорт TestBed
import { RouterTestingModule } from '@angular/router/testing'; // Импорт RouterTestingModule 
import { AppComponent } from './app.component'; // Импорт AppComponent

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({ // Вызывается перед каждым тестом
    imports: [RouterTestingModule], // Модуль RouterTestingModule импортируется в тестовый модуль, позволяет использовать маршрутизацию
    declarations: [AppComponent] // Компонент AppComponent объявляется в тестовом модуле 
  }));

  it('should create the app', () => { // Тестовый блок, который проверяет, что приложение успешно создается
    const fixture = TestBed.createComponent(AppComponent); // 
    const app = fixture.componentInstance; // 
    expect(app).toBeTruthy(); // 
  });  

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Вызывается для запуска обнаружения изменений
    const compiled = fixture.nativeElement as HTMLElement; // 
    expect(compiled.querySelector('.content span')?.textContent).toContain('app is running!'); // 
  });
});
