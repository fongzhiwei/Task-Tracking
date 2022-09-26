import Column from "./column.js";

export default class Kanban {
    constructor(data) 
    {
        this.data = data;
        Kanban.columns().forEach(column => 
            {
                // instance of column class
                const columnView = new Column(column.id, column.title);

                this.data.appendChild(columnView.elements.data)
            });
        
    }

    // return title of every columns 
    static columns()
    {
        return [
            {
                id: 1,
                title: "To Do"
            },
            {
                id: 2,
                title: "In Progress"
            },
            {
                id: 3,
                title: "Done"
            }
        ];
    }
}