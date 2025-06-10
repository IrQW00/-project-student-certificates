// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       snils: '',
//       phone: '',
//       email: '',
//       place: '',
//       type: 'student',
//       selectedCopies: 1,
//       successMessage: '',
//       errors: {},
//     };
//   },
//   methods: {
//     validateForm() {
//       this.errors = {};
//       if (!this.snils) this.errors.snils = 'Введите СНИЛС';
//       if (!this.phone) this.errors.phone = 'Введите телефон';
//       if (!this.email) this.errors.email = 'Введите email';
//       return Object.keys(this.errors).length === 0;
//     },
//     submitForm() {
//       if (!this.validateForm()) return;

//       this.successMessage = 'Заявка успешно отправлена!';

//       setTimeout(() => {
//         this.successMessage = '';
//         this.snils = '';
//         this.phone = '';
//         this.email = '';
//         this.place = '';
//         this.selectedCopies = 1;
//         this.type = 'student';
//       }, 3000);
//     },
//     selectCopies(num) {
//       this.selectedCopies = num;
//     }
//   }
// }).mount('#app');






// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       snils: '',
//       phone: '',
//       email: '',
//       certificateType: 'student',
//       copies: 1,
//       place: '',
//       activeTab: 'order',
//       errors: {},
//       successMessage: ''
//     };
//   },
//   methods: {
//     submitForm() {
//       this.errors = {};
//       if (!this.snils) this.errors.snils = true;
//       if (!this.phone) this.errors.phone = true;
//       if (!this.email) this.errors.email = true;
//       if (!this.place) this.errors.place = true;

//       if (Object.keys(this.errors).length === 0) {
//         this.successMessage = 'Заявка успешно отправлена! Вы можете просмотреть её во вкладке "Уведомления".';

//         // Очистка
//         this.snils = '';
//         this.phone = '';
//         this.email = '';
//         this.place = '';
//         this.copies = 1;

//         setTimeout(() => this.successMessage = '', 5000);
//       }
//     }
//   }
// }).mount('#app');





// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       activeTab: 'order',
//       snils: '',
//       phone: '',
//       email: '',
//       certificateType: 'student',
//       copies: 1,
//       place: '',
//       errors: {},
//       successMessage: ''
//     };
//   },
//   methods: {
//     submitForm() {
//       this.errors = {};

//       if (!this.snils) this.errors.snils = true;
//       if (!this.phone) this.errors.phone = true;
//       if (!this.email) this.errors.email = true;
//       if (!this.place) this.errors.place = true;

//       if (Object.keys(this.errors).length > 0) return;

//       this.successMessage = "Заявка успешно отправлена! Вы можете отследить её во вкладке 'Уведомления'.";
//       this.activeTab = 'notifications';

//       // здесь ты можешь потом добавить логику добавления в список уведомлений
//     }
//   }
// }).mount('#app');



const { createApp } = Vue;

createApp({
  data() {
    return {
      activeTab: 'order',
      snils: '',
      phone: '',
      email: '',
      certificateType: 'student',
      copies: 1,
      place: '',
      errors: {},
      successMessage: '',
      notifications: [] 
    };
  },
  methods: {
    submitForm() {
      this.errors = {};

      if (!this.snils) this.errors.snils = true;
      if (!this.phone) this.errors.phone = true;
      if (!this.email) this.errors.email = true;
      if (!this.place) this.errors.place = true;

      // если есть ошибки — выходим
      if (Object.keys(this.errors).length > 0) return;

     
      this.successMessage = "Заявка успешно отправлена! Вы можете отследить её во вкладке 'Уведомления'.";

      // добавляем новое уведомление
      this.notifications.push({
        type: this.certificateType === 'student' ? 'Справка студента' : 'Справка об обучении',
        copies: this.copies,
        place: this.place,
        date: new Date().toLocaleDateString('ru-RU'), // добавляем дату
        status: 'В работе'
      });
      

      // очищаем форму
      this.snils = '';
      this.phone = '';
      this.email = '';
      this.place = '';
      this.certificateType = 'student';
      this.copies = 1;

      // сообщение исчезает через 5 секунд (можно не добавлять)
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }
  }
}).mount('#app');
