import { Pipe } from "@angular/core";

@Pipe({
	name: 'filter'
})
export class FilterFilter {
	private contains(str: string, phrase: string, caseSensitive: boolean = false): boolean {
		if (!caseSensitive) {
			str = str.toLowerCase();
			phrase = phrase.toLowerCase();
		}

		return str.indexOf(phrase) != -1;
	}

	transform(value: any[], phrase: string, key?: string): any[] {
		if (phrase == null) return value;

		var filterPureArray = (item) => this.contains(item, phrase);
		var filterObjectArray = (item) => this.contains(item[key], phrase);

		return value.filter(key == undefined ? filterPureArray : filterObjectArray);
	}
}
