#!/bin/node
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static add(a, b) {
        let sum = a + b;
        return sum;
    }
}

exports.modules = {
    Calculator,
};