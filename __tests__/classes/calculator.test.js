#!/bin/node
const { Calculator } = require("../../calculator.js");

test("add method returns the correct value", () => {
    expect(Calculator.add(1, 2)).toEqual(3);
    expect(Calculator.add(5, 10)).toEqual(15);
    });