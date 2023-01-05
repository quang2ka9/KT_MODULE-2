"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var GoodsManager_1 = require("../controller/GoodsManager");
var Goods_1 = require("../model/Goods");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.GoodsManager = new GoodsManager_1.GoodsManager();
        this.menu = "\n    1. Hi\u1EC3n th\u1ECB DS h\u00E0ng h\u00F3a\n    2. T\u00ECm ki\u1EBFm h\u00E0ng h\u00F3a theo t\u00EAn h\u00E0ng\n    3. Nh\u1EADp th\u00F4ng tin m\u1ED9t m\u1EB7t h\u00E0ng m\u1EDBi\n    4. Ch\u1EC9nh s\u1EEDa th\u00F4ng tin m\u1ED9t m\u1EB7t h\u00E0ng\n    5. X\u00F3a m\u1ED9t m\u1EB7t h\u00E0ng ra kh\u1ECFi \u1EE9ng d\u1EE5ng\n    6. Tho\u00E1t\n    ";
    }
    MainMenu.prototype.selection = function () {
        var isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            var choice = void 0;
            do {
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                if (choice < 1 || choice > 6) {
                    console.log("Su lua chon sai lam. Vui long thu lai: ");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1: {
                    this.GoodsManager.displayAll();
                    break;
                }
                case 2: {
                    var productName = readlineSync.question("Nhap ten hang hoa ban muon tim kiem: ");
                    console.table(this.GoodsManager.finByProductName(productName));
                    break;
                }
                case 3: {
                    var goods = this.inputGoods(null);
                    this.GoodsManager.addGoods(goods);
                    break;
                }
                case 4: {
                    var loverCode = +readlineSync.question("Nhap ma hang hoa ban muon sua: ");
                    var newLover = this.inputGoods(loverCode);
                    this.GoodsManager.updateGoods(loverCode, newLover);
                    break;
                }
                case 5: {
                    var PLU = +readlineSync.question("Nhap ma hang hoa ma ban muon xoa: ");
                    this.GoodsManager.deleteByPLU(PLU);
                    break;
                }
                case 6: {
                    isLoop = false;
                    break;
                }
            }
        }
    };
    MainMenu.prototype.inputGoods = function (PLU) {
        if (PLU !== null) {
            var index = -1;
            do {
                index = this.GoodsManager.findByPLU(PLU);
                if (index === -1) {
                    console.log("Ma nay khong ton tai. Vui long thu lai! ");
                }
                else {
                    var PLU_1 = +readlineSync.question("Nhap ma hang: ");
                    var productName = readlineSync.question("Nhap ten hang: ");
                    var sectors = readlineSync.question("Nhap loai hang: ");
                    var price = readlineSync.question("Nhap gia : ");
                    var quantity = +readlineSync.question("Nhap so luong: ");
                    var day = +readlineSync.question("Nhap ngay tao: ");
                    var description = readlineSync.question("Mo ta mat hang: ");
                    return new Goods_1.Goods(PLU_1, productName, sectors, price, quantity, day, description);
                }
            } while (index !== -1);
        }
        else {
            var PLU_2 = +readlineSync.question("Nhap ma hang: ");
            var productName = readlineSync.question("Nhap ten hang: ");
            var sectors = readlineSync.question("Nhap loai hang: ");
            var price = readlineSync.question("Nhap gia : ");
            var quantity = +readlineSync.question("Nhap so luong: ");
            var day = +readlineSync.question("Nhap ngay tao: ");
            var description = readlineSync.question("Mo ta mat hang: ");
            return new Goods_1.Goods(PLU_2, productName, sectors, price, quantity, day, description);
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
