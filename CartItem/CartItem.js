"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");
const InvalidCurrencyException = require("./InvalidCurrencyException.js");
const InvalidNameException = require("./InvalidNameException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    #currency = 'CHF';




    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {

        if(articleId < 1){
            throw new InvalidArticleIdException();
        }

        if(price < 10){
            throw  new InvalidPriceException();
        }
        if(quantity < 1){
            throw new InvalidQuantityException();
        }
        if(name.length > 20 || name.length < 3){
            throw new InvalidNameException();
        }


        this.#articleId = articleId;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        //return this.#currency;
        if(value < 1){
            throw new InvalidQuantityException;
        }
    }

    get price() {
        return this.#price;

    }

    set price(value) {
        if(value < 10){
            throw new InvalidPriceException;
        }
    }

    get currency(){
        return this.#currency;
    }

    get total() {
        return this.quantity*this.price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



