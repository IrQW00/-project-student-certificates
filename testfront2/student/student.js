
function renderNotifications() {
    const notifications = [
        {
            type: "Справка студента",
            copies: 2,
            dateOrdered: "11.11.1111",
            location: "Уполномоченное подразделение института (деканат)",
            status: "done",
            dateCompleted: "21.11.1111"
        },
        {
            type: "Справка студента",
            copies: 2,
            dateOrdered: "11.11.1111",
            location: "Уполномоченное подразделение института (деканат)",
            status: "in-progress"
        },
        {
            type: "Справка студента",
            copies: 2,
            dateOrdered: "11.11.1111",
            location: "Уполномоченное подразделение института (деканат)",
            status: "rejected"
        }
    ];

    const container = document.getElementById("notifications-list");
    container.innerHTML = "";

    notifications.forEach(notif => {
        const div = document.createElement("div");
        div.className = `notification ${notif.status}`;

        let statusLabel = "";
        if (notif.status === "done") statusLabel = '<div class="status done">Выполнена ✓</div>';
        if (notif.status === "in-progress") statusLabel = '<div class="status in-progress">В процессе ⏳</div>';
        if (notif.status === "rejected") statusLabel = '<div class="status rejected">Отклонено ✖</div>';

        div.innerHTML = `
            ${statusLabel}
            <p><strong>Вид справки:</strong> ${notif.type}</p>
            <p><strong>Количество экземпляров:</strong> ${notif.copies}</p>
            <p><strong>Дата заказа:</strong> ${notif.dateOrdered}</p>
            <p><strong>Место получения справки:</strong> ${notif.location}</p>
            ${notif.status === "done" ? `<p><strong>Дата выполнения:</strong> ${notif.dateCompleted}</p>` : ""}
        `;

        container.appendChild(div);
    });
}



let selectedCopies = 1;

function switchTab(tabName) {
  document.getElementById("order-tab").style.display = tabName === 'order' ? 'block' : 'none';
  document.getElementById("notifications-tab").style.display = tabName === 'notifications' ? 'block' : 'none';

  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  const activeButton = tabName === 'order' ? document.querySelectorAll('.tab-button')[0] : document.querySelectorAll('.tab-button')[1];
  activeButton.classList.add('active');
}



function selectCopies(num) {
  selectedCopies = num;
  document.querySelectorAll('.button-group button').forEach((btn, i) => {
    btn.classList.toggle('active', i + 1 === num);
  });
}
  
function orderCertificate() {
  const snils = document.getElementById("snils").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const place = document.getElementById("submissionPlace").value.trim();
  const type = document.querySelector('input[name="certificate"]:checked').value;

    if (!snils || !email || !phone) {
      alert("Пожалуйста, заполните все обязательные поля: СНИЛС, почта и телефон.");
      return;
    }

    alert("Заявка успешно отправлена. Вы можете отслеживать её статус во вкладке 'Уведомления'.");
  
    const notification = document.createElement('div');
    notification.className = 'notification processing';
    notification.innerHTML = `
      <strong>Заявка в процессе</strong><br>
      Вид справки: ${type === 'student' ? 'Справка студента' : 'Справка об обучении'}<br>
      Кол-во экземпляров: ${selectedCopies}<br>
      Место предъявления: ${place}<br>
      Дата подачи: ${new Date().toLocaleDateString()}
    `;
    document.getElementById("notifications-list").appendChild(notification);
  }
  
  const newOrder = {
    fio: fioInput.value,
    snils: snilsInput.value,
    birth: birthInput.value,
    faculty: facultyInput.value,
    group: groupInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    type: spravkaInput.value,
    count: countInput.value,
    date: getToday(),
    status: "новый", 
  };
  
