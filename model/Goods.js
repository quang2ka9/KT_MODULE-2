"use strict";
exports.__esModule = true;
exports.Goods = void 0;
var Goods = /** @class */ (function () {
    function Goods(PLU, productName, sectors, price, quantity, day, description) {
        this.PLU = PLU;
        this.productName = productName;
        this.sectors = sectors;
        this.price = price;
        this.quantity = quantity;
        this.day = day;
        this.description = description;
    }
    Goods.prototype.getPLU = function () {
        return this.PLU;
    };
    Goods.prototype.setPLU = function (PLU) {
        this.PLU = PLU;
    };
    Goods.prototype.getProDuctName = function () {
        return this.productName;
    };
    Goods.prototype.setProductName = function (productName) {
        this.productName = productName;
    };
    Goods.prototype.getSectors = function () {
        return this.sectors;
    };
    Goods.prototype.setSectors = function (sectors) {
        this.sectors = sectors;
    };
    Goods.prototype.getPrice = function () {
        return this.price;
    };
    Goods.prototype.setPrice = function (price) {
        this.price = price;
    };
    Goods.prototype.getQuantity = function () {
        return this.quantity;
    };
    Goods.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Goods.prototype.getDay = function () {
        return this.day;
    };
    Goods.prototype.setDay = function (day) {
        this.day = day;
    };
    Goods.prototype.getDescription = function () {
        return this.description;
    };
    Goods.prototype.setDescription = function (description) {
        this.description = description;
    };
    return Goods;
}());
exports.Goods = Goods;
