export default class Column {
    constructor(id, title)
    {
        this.elements = {};
        this.elements.data = Column.createData();
        this.elements.title = this.elements.data.querySelector(".kanban_column-title");
        this.elements.items = this.elements.data.querySelector(".kanban_column-items");
        this.elements.addItem = this.elements.data.querySelector(".kanban_add-item");
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
}