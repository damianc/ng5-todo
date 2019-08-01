export class SearchEngine {
	private static contains(str: string, phrase: string, caseSensitive: boolean = false): boolean {
		if (!caseSensitive) {
			str = str.toLowerCase();
			phrase = phrase.toLowerCase();
		}

		return str.indexOf(phrase) != -1;
	}

	public static search(collection: any[], phrase: string, key?: string): any[] {
		if (phrase == null) return collection;

		var filterPureArray = (item) => this.contains(item, phrase);
		var filterObjectArray = (item) => this.contains(item[key], phrase);

		return collection.filter(key == undefined ? filterPureArray : filterObjectArray);
	}
}
