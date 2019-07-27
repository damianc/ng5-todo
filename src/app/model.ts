export class Model {
	user;
	items;

	constructor() {
		this.user = 'John';
		this.items = [
			new TodoItem('Buy flowers', false),
			new TodoItem('Buy new shoes', false),
			new TodoItem('Receive tickets', true),
			new TodoItem('Call to Jack', false)
		];
	}
}

export class TodoItem {
	action;
	done;

	constructor(action, done) {
		this.action = action;
		this.done = done;
	}
}
