export default class DateFormatter {

  _daysOfWeekArray = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
  ];
  _monthsArray = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  date = new Date();

  get daysOfWeekArray() {
    return this._daysOfWeekArray;
  }

  get monthsArray() {
    return this._monthsArray;
  }

  makeDate() {
    return {
      dayOfWeek: this.daysOfWeekArray[this.date.getDay()],
      currentDate: this.date.getDate(),
      currentMonth: this.monthsArray[this.date.getMonth()],
      currentTime: `${this.date.getHours()}:${this.date.getMinutes()}`,
    }
  }

  formatDate() {
    const dateObject = this.makeDate();
    const {dayOfWeek, currentDate, currentMonth, currentTime} = dateObject;
    return `${dayOfWeek}, ${currentDate} ${currentMonth} ${currentTime}`;
  }
}