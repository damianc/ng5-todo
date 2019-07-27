import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  showDone = true;

  getName() {
  	return this.model.user;
  }

  getTodoItems() {
    var res = this.model.items;
  	if (!this.showDone) res = res.filter(item => !item.done);
    return res;
  }

  addItem(newItem) {
  	if (newItem != '') {
  		this.model.items.push(new TodoItem(newItem, false));
      return true;
  	}
  }
}
