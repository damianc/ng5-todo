import { Pipe } from "@angular/core";

@Pipe({
	name: 'filter'
})
export class FilterFilter {
	transform(value: any[], phrase: string, key?: string) {
		if (phrase == null) return value;

		var filterPureArray = (item) => item.toLowerCase().indexOf(phrase.toLowerCase()) != -1;
		var filterObjectArray = (item) => item[key].toLowerCase().indexOf(phrase.toLowerCase()) != -1;

		return value.filter(key == undefined ? filterPureArray : filterObjectArray);
	}
}
