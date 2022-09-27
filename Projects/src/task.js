export default class Task 
{
    constructor(id, content)
    {
        this.elements = {};
        this.elements.data = Task.createData();
        this.elements.data = this.elements.querySelector(".kanban_task-input")
        
        this.elements.data.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;
    }

    static createData()
    {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_task" draggable="true">
                <div class="kanban_task-input" contenteditable></div>
            <div>
        `).children[0];
    }
}