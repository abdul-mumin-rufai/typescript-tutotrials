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

const tasksList = document.querySelector<HTMLUListElement>('.list-tasks')!;
tasksList

interface Tasks { 
    tasks: string;
    isComplete: boolean;
};

const listOfTasks: Tasks[] = [];
listOfTasks

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectTasks = tasksInput.value;
    if (selectTasks) {
        // add task to list
        // render tasks
        // update local storage
        tasksInput.value = '';
    } else
        alert('Input field can not be empty')
});