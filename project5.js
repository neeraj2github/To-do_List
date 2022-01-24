let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'Quit' && input !== 'q') {
    if (input === 'List') {
        console.log('**************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**************');
    }
    else if (input === 'New') {
        const newTodo = prompt('OK, what is new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the List!`);
    }
    else if (input === 'Delete') {
        const index = parseInt(prompt('OK, enetr an index to delete:'));
if(!Number.isNaN(index)){
    const deleted = todos.splice(index, 1);
    console.log(`OK, deleted ${deleted[0]}`);
}else{
    console.log('Unknown Index');
}
        
    }
    input = prompt('what would you like to do');
}
console.log('OK YOU QUIT THE APP');