import { Component } from '@angular/core';

import { Model, TodoItem } from './model';
import { Crudable } from '@interface/Crudable';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Crudable {
  model = new Model('Johnny');
  showDone = true;
  edited = null;

  getName() {
  	return this.model.user;
  }

  getItems() {
    var res = this.model.items;
  	if (!this.showDone) res = res.filter(item => !item.done);
    return res;
  }

  addItem(itemField) {
    var newItem = itemField.value;

  	if (newItem != '') {
      if (this.edited === null) {
  		  this.model.items.push(new TodoItem(newItem, false));
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
    var items = this.model.items;
    var idx = items.indexOf(item);

    items.splice(idx, 1);
  }

  editItem(item, field) {
    field.value = item.action;
    this.edited = item;
  }
}
