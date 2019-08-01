import { Component, Input } from '@angular/core';

@Component({
  selector: 'priority',
  templateUrl: './priority.component.html'
})
export class PriorityComponent {
	@Input() index: number;
	priority: string;

	ngOnInit() {
 		this.priority = this.getPriorityByIndex(this.index);
 	}

 	private getPriorityByIndex(index) {
 		if (index < 2) return 'high';
 		else if (index < 3) return 'medium';
 		else return 'low';
 	}

 	private getClassNameByPriority(priority) {
 		var classes = {
 			high: 'bg-danger',
 			medium: 'bg-success',
 			low: 'bg-secondary'
 		};

 		return classes[priority];
 	}
}
