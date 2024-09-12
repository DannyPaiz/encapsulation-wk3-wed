#!/bin/node
const { Passenger } = require("../../passenger.js");

test("Passenger class has public seatNumber property", () => {
  const p1 = new Passenger("John", "ABC123", "23E");
  expect(p1.seatNumber).toEqual("23E");
});

describe("Passenger class name property", () => {
  const p1 = new Passenger("John", "ABC123", "23E");

  it("is defined", () => {
    expect(p1.getName()).toEqual("John");
  });

  it("is private", () => {
    expect(p1.name).toEqual(undefined);
  });
});

describe("Passenger passportNum", () => {
  const p1 = new Passenger("John", "ABC123", "23E");

  it("is defined", () => {
    expect(p1.getPassportNum()).toEqual("ABC123");
  });

  it("is private", () => {
    expect(p1.passportNum).toEqual(undefined);
  });
});