export class Goods {
    private PLU: number;
    private productName: string;
    private sectors: string;
    private price: number;
    private quantity: number;
    private day: number;
    private description: string;

    constructor(PLU: number, productName: string, sectors: string, price: number, quantity: number, day: number, description: string) {
        this.PLU = PLU;
        this.productName = productName;
        this.sectors = sectors;
        this.price = price;
        this.quantity = quantity;
        this.day = day;
        this.description = description;
    }

    getPLU(): number {
        return this.PLU;
    }

    setPLU(PLU: number) {
        this.PLU = PLU;
    }

    getProDuctName(): string {
        return this.productName;
    }

    setProductName(productName: string): void {
        this.productName = productName;
    }

    getSectors(): string {
        return this.sectors;
    }

    setSectors(sectors: string): void {
        this.sectors = sectors;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    getDay(): number {
        return this.day;
    }

    setDay(day: number): void {
        this.day = day;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }


}
