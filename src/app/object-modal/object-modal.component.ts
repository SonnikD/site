import { Component, Input } from '@angular/core'; // Импорт Component, Input
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Импорт для работы с формами и валидации данных
import { ObjectService } from '../myobject.service'; // Импорт ObjectService
import { MyObject } from '../myobject'; // Импорт MyObject

@Component({
  selector: 'app-object-modal', // Селектор компонента
  templateUrl: 'object-modal.component.html', // Путь к шаблону компонента, который определяет его внешний вид и разметку
  styleUrls: ['object-modal.component.css'], // Путь к файлу стилей компонента 
})
export class ObjectModalComponent { // Экспор класса 
  @Input() object: MyObject; // Свойство будет получать значение извне компонента
  objectForm: FormGroup; // Свойство objectForm, которое будет представлять экземпляр класса FormGroup
  showModal: boolean = false; // Добавлено свойство для управления видимостью модального окна

  constructor(
    private formBuilder: FormBuilder, 
    private objectService: ObjectService 
  ) {
    this.object = {} as MyObject; // Устанавливается начальное значение свойства object как пустой объект типа MyObject
    this.objectForm = this.formBuilder.group({ // Создается экземпляр класса FormGroup
      name: ['', Validators.required], // Определение поле name с пустым значением
      description: ['', Validators.required] // Определение поле description с пустым значением
    });
  }
  
  openModal() {
    this.showModal = true; // Открывает модальное окно
  }

  onSubmit() {
    if (this.objectForm.valid) { // Проверяется валидность формы
      const formData = this.objectForm.value; // Создается переменная formData, которая содержит значения полей формы
      if (this.object) { // Проверяется, существует ли объект this.object
        // Редактирование объекта
        formData.id = this.object.id;
        this.objectService.updateObject(formData).subscribe(updatedObject => {
          // Обработка успешного обновления объекта
          this.closeModal(); // Закрытие модального окна
        });
      } else {
        // Создание нового объекта
        this.objectService.createObject(formData).subscribe(newObject => {
          this.closeModal(); // Закрытие модального окна
        });
      }
    }
  }

  closeModal() {
    // Логика закрытия модального окна
    this.objectForm.reset();
    this.showModal = false; // Скрывает модальное окно
  }
}
