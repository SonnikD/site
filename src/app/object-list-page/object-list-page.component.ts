import { Component, OnInit } from '@angular/core'; // Импорт Component и OnInit для создания компонентов и обработки событий жизненного цикла компонента
import { ObjectService } from '../myobject.service'; // Импорт ObjectService представляет сервис для работы с объектами
import { MyObject } from '../myobject'; // Импорт MyObject
import { MatTableModule } from '@angular/material/table'; // Импорт MatTableModule, для отображение данных в виде таблицы

@Component({ // Декоратор
  selector: 'app-object-list-page', //  Селектор компонента
  templateUrl: 'object-list-page.component.html', // Путь к файлу шаблона компонента
  styleUrls: ['object-list-page.component.css'] //  Путь к файлу стилей компонента
})
export class ObjectListPageComponent implements OnInit { // Экспортирование класса компонента
  objects: MyObject[] = []; // Массив объектов
  currentForm: string = 'login'; // Переменная, которая представляет текущую форму
  showLoginForm: boolean = true; // Перемменная, которая определяет, должна ли отображаться форма входа 
  showRegistrationForm: boolean = false; // Переменная, которая определяет, должна ли отображаться форма регистрации

  constructor(private objectService: ObjectService) {} // Конструктор копмпонента

  ngOnInit() { // Метод жизненного цикла компонента
    this.getObjects(); // Вызывает метод getObjects() для получения списка объектов
  }

  getObjects() { // Метод, который используется для получения списка объектов
    this.objectService.getObjects().subscribe(objects => { 
      this.objects = objects; 
    });
  }

  switchToLogin() { // Метод, который переключает текущую форму на форму входа
    this.currentForm = 'login'; 
    this.showLoginForm = true; 
    this.showRegistrationForm = false; 
  }

  switchToRegistration() { // Метод, который переключает текущую форму на форму регистрации
    this.currentForm = 'registration'; 
    this.showLoginForm = false; 
    this.showRegistrationForm = true; 
  }

  openCreateModal() {
    // Логика открытия модального окна с формой создания объекта
  }

  openEditModal(object: Object) {
    // Логика открытия модального окна с формой редактирования объекта
  }

  deleteObject(objectId: number) {
    // Логика удаления объекта
  }
}
