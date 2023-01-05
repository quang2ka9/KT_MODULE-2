import {Goods} from "../model/Goods";


import readlineSync from "readline-sync";

export class GoodsManager {
    private goodsManager: Goods[] = []; 

    constructor() {
        this.goodsManager.push(new Goods(1, "Tao", "Hoa qua", 500, 10, 14,"rat tuoi"));
        this.goodsManager.push(new Goods(2, "Xep hinh", "Do choi", 5000, 5, 15,"logic"));
        this.goodsManager.push(new Goods(3, "Thit", "Thuc pham", 10000, 10, 16,"thuc pham sach"));
        this.goodsManager.push(new Goods(4, "May giat", "Dien tu", 2000,5, 14, "do tot"));
        this.goodsManager.push(new Goods(5, "Tivi", "Dien tu", 30000, 1, 17, "do chat luong"));
    }

    addGoods(goods: Goods) {
        this.goodsManager.push(goods);
        console.log("Them thanh cong! ");
    }

    displayAll() {
        console.table(this.goodsManager);
    }

    finByProductName(productName: string): Goods[] {
        let result: Goods[] = [];

        this.goodsManager.forEach((item, index) => {
            if (item.getProDuctName().includes(productName)) {
                result.push(item);
            }
        })
        return result;
    }

    findByPLU(PLU: number) {
        for (let i = 0; i < this.goodsManager.length; i++) {
            if (this.goodsManager[i].getPLU() === PLU) {
                return i;
            }
        }
        return -1;
    }

    updateGoods(PLU: number, newGoods: Goods) {
        let code = this.findByPLU(PLU);
        if (code === -1) {
            return "Khong co hang hoa nay!";
        }
        console.log(code)
        this.goodsManager[code] = newGoods;
        return "Sua thanh cong!";
    }

    deleteByPLU(PLU: number){

        let index = this.findByPLU(PLU);
        if(index === -1){
            console.log("Khong ton tai hang hoa can xoa!");
            return;
        }

        this.goodsManager.splice(index, 1);
        console.log("Xoa Thanh cong!");

    }
}



