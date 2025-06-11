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
      if (Object.keys(this.errors).length > 0) return;

      this.successMessage = "Заявка успешно отправлена! Вы можете отследить её во вкладке 'Уведомления'.";
      
      this.notifications.push({
        type: this.certificateType === 'student' ? 'Справка студента' : 'Справка об обучении',
        copies: this.copies,
        place: this.place,
        date: new Date().toLocaleDateString('ru-RU'), 
        status: 'В работе'
      });

      // очистка
      this.snils = '';
      this.phone = '';
      this.email = '';
      this.place = '';
      this.certificateType = 'student';
      this.copies = 1;
      
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }
  }
}).mount('#app');
