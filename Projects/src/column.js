import Task from "./task";

export default class Column {
    constructor(id, title)
    {
        this.elements = {};
        this.elements.data = Column.createData();
        this.elements.title = this.elements.data.querySelector(".kanban_column-title");
        this.elements.items = this.elements.data.querySelector(".kanban_column-items");
        this.elements.addItem = this.elements.data.querySelector(".kanban_add-item");
    
        this.elements.data.dataset.id = id;
        this.elements.title.textContent = title;

        this.elements.addItem.addEventListener("click", () => {

        });

        // i need database support to get the item (shiau yen)
    }

    // to create html
    static createData() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_column">
                <div class="kanban_column-title"></div>
                <div class="kanban_column-items"></div>
                <button class="kanban_add-item">Add +</button>
            </div>
        `).children[0];
    }

    // this will work only after implementing the database
    renderItem(task)
    {
        // instance of create task
        const item = new Task(task.id, task.content);

        this.elements.items.appendChild(item.elements.data)
    }
}