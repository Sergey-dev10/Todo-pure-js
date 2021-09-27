function createTask(value) {
    const task = document.createElement('div');
    const checkBox = document.createElement('input');
    task.className = 'task';
    checkBox.setAttribute('type', 'checkbox');
    task.innerHTML = `<p>${value}</p>`;
    task.insertAdjacentElement('beforeend', checkBox);
    return task;
}

function addTask() {
    const field = document.querySelector('.field');
    const list = document.querySelector('.list');

    if (field.value !== '') {
        const task = createTask(field.value);
        list.append(task);
        field.value = '';
    }
}

const btn = document.querySelector('.add');
btn.addEventListener('click', addTask);