export class Model {
	items;

	constructor(
		public user: string = 'a user'
	) {
		this.items = [
			new TodoItem('Buy flowers', false, 1),
			new TodoItem('Buy new shoes', false, 2),
			new TodoItem('Receive tickets', true, 3),
			new TodoItem('Call to Jack', false, 4)
		];
	}
}

export class TodoItem {
	constructor(
		public action: string,
		public done: boolean,
		public id?: number
	) {}
}
