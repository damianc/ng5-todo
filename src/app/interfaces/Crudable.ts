export interface Crudable {
	getItems(itemInfo?: any) : any[];
	addItem(itemInfo: any) : any|void;
	editItem(itemInfo: any, newInfo: any) : any|void;
	deleteItem(itemInfo: any) : any|void;
}
