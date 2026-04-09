/* // bt deafault the quertSelector returns the selected element or null. because typescript can not tells for sure that the element selected will be there

const testButton = document.querySelector<HTMLButtonElement>('.test-button')! //to avoid that we have to use the non-null operator (!) 
testButton.disabled = true; // we have to tell typescript the the of the element in order to get all the methods associated with the html element

 */



// alternative approach
/* const testButton = document.querySelector<HTMLButtonElement>('.test-button') //to avoid that we have to use the non-null operator (!) 
if (testButton) {
    testButton.disabled = true;
} */


const tasksForm = document.querySelector<HTMLFormElement>('.form')!;

const tasksInput = document.querySelector<HTMLInputElement>('.form-input')!;

const tasksList = document.querySelector<HTMLUListElement>('.list')!;


interface Tasks { 
    tasks: string;
    isComplete: boolean;
};

// when getting something from the local storage the function must return a value
function loadTasksFromLocalStorage(): Tasks[] { 
    const loadedTasks = localStorage.getItem('tasks');
    return loadedTasks ? JSON.parse(loadedTasks) : [];
}

const listOfTasks: Tasks[] = loadTasksFromLocalStorage(); // the list of tasks is now from the local storage

// displaying the list of items on the screen from the local storage
listOfTasks.forEach(renderTasks)



tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const tasksDescription = tasksInput.value;
    console.log(tasksDescription);
    if (tasksDescription) {
        const newTask: Tasks = {
            tasks: tasksDescription,
            isComplete:false,
        }
        // add task to list
        addTasks(newTask);
        // render tasks
        renderTasks(newTask);
        // update local storage
        storedToLocalStorage();

        tasksInput.value = '';
        return;
    } else
        alert('Input field can not be empty')
});

// create a function to add tasks
function addTasks(task: Tasks): void { 
    listOfTasks.push(task);
    console.log(listOfTasks);
};

// create function to render list of tasks on the screen
function renderTasks(task: Tasks): void { 
    const tasksElement = document.createElement('li');
    tasksElement.textContent = task.tasks;
    tasksList.appendChild(tasksElement);
};

function storedToLocalStorage():void { 
    localStorage.setItem('tasks', JSON.stringify(listOfTasks));
};