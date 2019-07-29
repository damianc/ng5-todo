import { Pipe } from "@angular/core";

@Pipe({
	name: 'filter'
})
export class FilterFilter {
	private contains(str, phrase) {
		return str.toLowerCase().indexOf(phrase.toLowerCase()) != -1;
	}

	transform(value: any[], phrase: string, key?: string) {
		if (phrase == null) return value;

		var filterPureArray = (item) => this.contains(item, phrase);
		var filterObjectArray = (item) => this.contains(item[key], phrase);

		return value.filter(key == undefined ? filterPureArray : filterObjectArray);
	}
}
