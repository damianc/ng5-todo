export class Model {
	items;

	constructor(
		public user: string = 'a user'
	) {
		this.items = [
			new TodoItem('Buy flowers', false),
			new TodoItem('Buy new shoes', false),
			new TodoItem('Receive tickets', true),
			new TodoItem('Call to Jack', false)
		];
	}
}

export class TodoItem {
	constructor(
		public action: string,
		public done: boolean
	) {}
}
