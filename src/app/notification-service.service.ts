import { Injectable } from '@angular/core'; // Импорт Injectable

@Injectable({
  providedIn: 'root'
})
export class NotificationService { // Метод, который отображает уведомление о получении данных с указанием времени
  showDataReceivedMessage(time: number) {
    this.showNotification(`Данные получены за ${time} секунд`);
  }

  showDataSavedMessage(id: number) { // Метод, который отображает уведомление о сохранении данных с указанием идентификатора
    this.showNotification(`Данные сохранены. ID: ${id}`);
  }

  showDataUpdatedMessage() { //  Метод, который отображает уведомление об обновлении данных
    this.showNotification(`Данные обновлены`);
  }

  showDataDeletedMessage() { // Метод, который отображает уведомление об удалении данных
    this.showNotification(`Данные удалены`);
  }

  private showNotification(message: string) { // Отображает фактическое оповещение на странице с заданным сообщением
    const notificationElement = document.createElement('div'); // Создание элемента div, который будет использоваться для отображения оповещения
    notificationElement.classList.add('notification'); // Добавление CSS-класса notification к элементу оповещения
    notificationElement.textContent = message; // Установка текстового содержимого оповещения равным переданному сообщению

    notificationElement.addEventListener('click', () => { // Добавление обработчика события click для скрытия оповещения при клике на него
      notificationElement.remove();
    });

    document.body.appendChild(notificationElement); // Добавление элемента оповещения в тело документа, чтобы он был видимым на странице

    // Автоматическое скрытие оповещения через 5 секунд
    setTimeout(() => {
      notificationElement.remove();
    }, 5000);
  }
}
