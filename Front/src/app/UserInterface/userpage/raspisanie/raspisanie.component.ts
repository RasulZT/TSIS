import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-raspisanie',
  templateUrl: './raspisanie.component.html',
  styleUrls: ['./raspisanie.component.scss']
})
export class RaspisanieComponent implements OnInit {
  timeSlotHeight = 60;
  constructor() {
  }

  days: any[] = [
    {
      name: 'Понедельник',
      lessons: [
        {title: 'Урок 1', startTime: '09:00', endTime: '11:00', top: '90px', height: '120px'},
        // Добавьте другие уроки для понедельника
      ]
    },
    {
      name: 'Вторник',
      lessons: [
        {title: 'Урок 1', startTime: '09:00', endTime: '11:00', top: '90px', height: '120px'},
        // Добавьте другие уроки для вторника
      ]
    },
    // Продолжайте для остальных дней недели
  ];
  lessonTop(startTime: string): string {
    // Преобразуйте время начала урока в минуты
    const startMinutes = this.timeToMinutes(startTime);
    // Рассчитайте верхний край блока в пикселях
    const top = (startMinutes / 60) * this.timeSlotHeight;
    // Верните значение в формате "90px" или другом желаемом формате
    return top + 'px';
  }

  lessonHeight(startTime: string, endTime: string): string {
    // Преобразуйте время начала и окончания урока в минуты
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    // Рассчитайте высоту блока в пикселях
    const height = ((endMinutes - startMinutes) / 60) * this.timeSlotHeight;
    // Верните значение в формате "120px" или другом желаемом формате
    return height + 'px';
  }

  timeToMinutes(time: string): number {
    // Преобразуйте время в формате "HH:mm" в минуты
    const parts = time.split(':');
    if (parts.length === 2) {
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      return hours * 60 + minutes;
    }
    return 0;
  }

  ngOnInit() {
    // Здесь можно загрузить данные о событиях ученика и отобразить их на странице
  }
}
