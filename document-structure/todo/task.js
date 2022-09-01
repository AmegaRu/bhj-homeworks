const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();

    if (tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML('beforeEnd',
        `<div class='task'>
            <div class='task__title'>
                ${tasksInput.value}
            </div >
            <a href='#' class='task__remove'>&times;</a>
        </div >`);
        
        const task = Array.from(document.querySelectorAll('.task__remove'));
        task[task.length - 1].addEventListener('click', () => {
            tasksList.removeChild(task[task.length - 1].closest('.task'));
        });
        tasksInput.value = '';
    }
})