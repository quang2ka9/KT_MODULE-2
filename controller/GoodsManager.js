"use strict";
exports.__esModule = true;
exports.GoodsManager = void 0;
var Goods_1 = require("../model/Goods");
var GoodsManager = /** @class */ (function () {
    function GoodsManager() {
        this.goodsManager = [];
        this.goodsManager.push(new Goods_1.Goods(1, "Tao", "Hoa qua", 500, 10, 14, "rat tuoi"));
        this.goodsManager.push(new Goods_1.Goods(2, "Xep hinh", "Do choi", 5000, 5, 15, "logic"));
        this.goodsManager.push(new Goods_1.Goods(3, "Thit", "Thuc pham", 10000, 10, 16, "thuc pham sach"));
        this.goodsManager.push(new Goods_1.Goods(4, "May giat", "Dien tu", 2000, 5, 14, "do tot"));
        this.goodsManager.push(new Goods_1.Goods(5, "Tivi", "Dien tu", 30000, 1, 17, "do chat luong"));
    }
    GoodsManager.prototype.addGoods = function (goods) {
        this.goodsManager.push(goods);
        console.log("Them thanh cong! ");
    };
    GoodsManager.prototype.displayAll = function () {
        console.table(this.goodsManager);
    };
    GoodsManager.prototype.finByProductName = function (productName) {
        var result = [];
        this.goodsManager.forEach(function (item, index) {
            if (item.getProDuctName().includes(productName)) {
                result.push(item);
            }
        });
        return result;
    };
    GoodsManager.prototype.findByPLU = function (PLU) {
        for (var i = 0; i < this.goodsManager.length; i++) {
            if (this.goodsManager[i].getPLU() === PLU) {
                return i;
            }
        }
        return -1;
    };
    GoodsManager.prototype.updateGoods = function (PLU, newGoods) {
        var code = this.findByPLU(PLU);
        if (code === -1) {
            return "Khong co hang hoa nay!";
        }
        console.log(code);
        this.goodsManager[code] = newGoods;
        return "Sua thanh cong!";
    };
    GoodsManager.prototype.deleteByPLU = function (PLU) {
        var index = this.findByPLU(PLU);
        if (index === -1) {
            console.log("Khong ton tai hang hoa can xoa!");
            return;
        }
        this.goodsManager.splice(index, 1);
        console.log("Xoa Thanh cong!");
    };
    return GoodsManager;
}());
exports.GoodsManager = GoodsManager;
