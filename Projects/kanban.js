export default class kanban {
    constructor(data) {
        this.data = data;
        kanban.columns().forEach(column => 
            {
                // to be continue (database needed)
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