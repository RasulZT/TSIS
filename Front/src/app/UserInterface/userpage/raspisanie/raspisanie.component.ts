import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-raspisanie',
  templateUrl: './raspisanie.component.html',
  styleUrls: ['./raspisanie.component.scss']
})
export class RaspisanieComponent implements OnInit {
  timeSlotHeight = 60;
  constructor( private authService:AuthService) {
  }

  days: any[] = [
    {
      name: 'Понедельник',
      lessons: [
        {title: 'Урок 1', startTime: '15:00', endTime: '16:00', top: '90px', height: '120px'},
        {title: 'Урок 2', startTime: '10:00', endTime: '12:00', top: '90px', height: '120px'},
        {title: 'Урок 3', startTime: '16:00', endTime: '17:00', top: '90px', height: '120px'}
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

  lessonHeight(startTime: string, endTime: string): string {
    // Преобразуйте время начала и окончания урока в минуты
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    // Рассчитайте высоту блока в пикселях
    const height = ((endMinutes - startMinutes) / 60) * this.timeSlotHeight;
    // Верните значение в формате "120px" или другом желаемом формате
    return height + 'px';
  }

  lessonMargin(lessons: any, i: number){
    if (i==0){
      const startMinutes = this.timeToMinutes(lessons[0].startTime);
      const margin =  startMinutes-470;
      return margin + 'px';
    }
    else{
      const timeLesson1 = this.timeToMinutes(lessons[i-1].endTime);
      const timeLesson2 = this.timeToMinutes(lessons[i].startTime)
      const margin =  timeLesson2-timeLesson1 ;

      return margin + 'px';

    }

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
  sortTime(){
    this.days.forEach(day => {
      day.lessons.sort((lesson1:any, lesson2:any) => {
        // Преобразуйте время начала урока в минуты
        const startMinutes1 = this.timeToMinutes(lesson1.startTime);
        const startMinutes2 = this.timeToMinutes(lesson2.startTime);

        // Сравните уроки по времени начала
        if (startMinutes1 < startMinutes2) {
          return -1;
        } else if (startMinutes1 > startMinutes2) {
          return 1;
        } else {
          // Если времена начала одинаковы, сравните по времени окончания
          const endMinutes1 = this.timeToMinutes(lesson1.endTime);
          const endMinutes2 = this.timeToMinutes(lesson2.endTime);
          if (endMinutes1 < endMinutes2) {
            return -1;
          } else if (endMinutes1 > endMinutes2) {
            return 1;
          } else {
            return 0; // Если и времена начала, и времена окончания одинаковы
          }
        }
      });
    });
  }
  ngOnInit() {
     this.sortTime()
    this.authService.getUser()

  }
}
