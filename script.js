const input_text = document.querySelector("#todo-input"); // corrected selector
const add_button = document.getElementById("add-btn"); // removed extra '#'
const task_list = document.getElementById("task-list"); // properly selected UL
const add = () => {
    const text = input_text.value.trim() // get input value
    if (text !== "") {
        const delete_icon = "delete_icon.jpg";
        const li = document.createElement('div');
        li.classList.add("task-item");  // Add the task-item class here
        li.innerHTML =  `<span>${text} </span> <img src="${delete_icon}" class="delete" />`;
        task_list.appendChild(li);
        input_text.value = " ";
        const delete_btn = li.querySelector(".delete")
        delete_btn.addEventListener('click', function(){
          li.remove();
        })
    }
};

add_button.addEventListener('click', function () {
    add()
})