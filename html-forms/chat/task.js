const widget = document.querySelector('.chat-widget');  
const widgetMessages = document.querySelector('.chat-widget__messages');
const widgetInput = document.getElementById('chat-widget__input');
const Messages = [
    'Здравствуйте',
    'Прощайте!',
    'Пожалуйста',   
    'Сайт временно не работает',
    'Скоро появится оператор',
    'Я робот'
];

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
});

widgetInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && widgetInput.value != '') {
        let time = new Date().getHours() + ':' + ('0' + new Date().getMinutes()).slice(-2);
        let botMessage = Messages[Math.floor(Math.random() * Messages.length)]

        widgetMessages.innerHTML += `
        <div class="message message_client">  
            <div class="message__time">${time}</div>
            <div class="message__text">${widgetInput.value}</div>
        </div>
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${botMessage}</div>
        </div>`;

        widgetInput.value = '';
    };
});