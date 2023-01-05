import {GoodsManager} from "../controller/GoodsManager";
import {Goods} from "../model/Goods";

const readlineSync = require('readline-sync')

export class MainMenu {
    private GoodsManager: GoodsManager = new GoodsManager();
    private menu = `
    1. Hiển thị DS hàng hóa
    2. Tìm kiếm hàng hóa theo tên hàng
    3. Nhập thông tin một mặt hàng mới
    4. Chỉnh sửa thông tin một mặt hàng
    5. Xóa một mặt hàng ra khỏi ứng dụng
    6. Thoát
    `;

    public selection(): void {
        let isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            let choice;
            do {
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                    if (choice <1 || choice >6){
                    console.log("Su lua chon sai lam. Vui long thu lai: ");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1: {
                    this.GoodsManager.displayAll();
                    break;
                }
                case 2: {
                    let productName = readlineSync.question("Nhap ten hang hoa ban muon tim kiem: ");
                    console.table(this.GoodsManager.finByProductName(productName));
                    break;
                }
                case 3: {
                    let goods = this.inputGoods(null)
                    this.GoodsManager.addGoods(goods);
                    break;
                }
                case 4: {
                    let loverCode = +readlineSync.question("Nhap ma hang hoa ban muon sua: ");
                    let newLover = this.inputGoods(loverCode);
                    this.GoodsManager.updateGoods(loverCode,newLover)
                    break;
                }
                case 5: {
                    let PLU = +readlineSync.question("Nhap ma hang hoa ma ban muon xoa: ")
                    this.GoodsManager.deleteByPLU(PLU);
                    break;
                }
                case 6:{
                    isLoop = false;
                    break;
                }
            }
        }
    }

    private inputGoods(PLU:number | null): Goods{
        if(PLU!== null){
            let index = -1;
            do {
                index =this.GoodsManager.findByPLU(PLU);
                if(index === -1){
                    console.log("Ma nay khong ton tai. Vui long thu lai! ");
                }
                else{
                    let PLU = +readlineSync.question("Nhap ma hang: ");
                    let productName = readlineSync.question("Nhap ten hang: ");
                    let sectors = readlineSync.question("Nhap loai hang: ");
                    let price = readlineSync.question("Nhap gia : ");
                    let quantity = +readlineSync.question("Nhap so luong: ");
                    let day = +readlineSync.question("Nhap ngay tao: ");
                    let description =readlineSync.question("Mo ta mat hang: ")
                    return new Goods(PLU,productName,sectors,price,quantity,day,description)
                }
            }while (index !==-1);
        }else {
            let PLU = +readlineSync.question("Nhap ma hang: ");
            let productName = readlineSync.question("Nhap ten hang: ");
            let sectors = readlineSync.question("Nhap loai hang: ");
            let price = readlineSync.question("Nhap gia : ");
            let quantity = +readlineSync.question("Nhap so luong: ");
            let day = +readlineSync.question("Nhap ngay tao: ");
            let description =readlineSync.question("Mo ta mat hang: ")
            return new Goods(PLU,productName,sectors,price,quantity,day,description)
        }
    }
}

