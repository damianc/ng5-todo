import { Component } from '@angular/core';

import { Model, TodoItem } from './model';
import { Crudable } from '@interface/Crudable';

import { SearchEngine } from './search-engine';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Crudable {
  model = new Model('Johnny');
  showDone = true;
  edited = null;
  selectedTask: TodoItem;

  getName() {
  	return this.model.user;
  }

  getItems() {
    var res = this.model.items;
  	if (!this.showDone) res = res.filter(item => !item.done);
    if (this.phrase) res = SearchEngine.search(res, this.phrase, 'action');
    return res;
  }

  addItem(itemField) {
    var newItem = itemField.value;

  	if (newItem != '') {
      if (this.edited === null) {
  		  this.model.items.push(new TodoItem(newItem, false, this.model.items.length + 1));
      } else {
        let item = this.edited;
        let idx = this.model.items.indexOf(item);

        itemField.value = item.action;
        item.action = newItem;

        this.model.items.splice(idx, 1, item);
        this.edited = null;
      }
      return true;
  	}
  }

  deleteItem(item) {
    var idx = this.model.items.indexOf(item);

    if (idx !== -1) this.model.items.splice(idx, 1);
  }

  editItem(item, field) {
    field.value = item.action;
    field.focus();
    this.edited = item;
  }

  selectTask(item) {
    if (this.selectedTask == item) {
      this.selectedTask = null;
    } else {
      this.selectedTask = item;
    }
  }
}
