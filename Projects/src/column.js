export default class Column {
    constructor(id, title) {

		this.elements = {};
		this.elements.root = Column.createRoot();
		this.elements.title = this.elements.root.querySelector(".kanban__column-title");

		this.elements.root.dataset.id = id;
		this.elements.title.textContent = title;
    }

    static createRoot() {
		const range = document.createRange();

		range.selectNode(document.body);

		return range.createContextualFragment(`
			<div class="kanban__column">
				<div class="kanban__column-title"></div>
				<div class="kanban__column-items"></div>
			</div>
		`).children[0];
	}
}