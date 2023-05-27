 export class Item{
    constructor(itemCode,name,price,itemQTY) {
    this._itemCode=itemCode;
    this._name=name;
    this._price=price;

    this._itemQTY = itemQTY;

}

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get itemQTY() {
        return this._itemQTY;
    }

    set itemQTY(value) {
        this._itemQTY = value;
    }
}