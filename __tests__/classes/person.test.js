#!/bin/node
const Person = require("../../person.js");

test("should create a person and have the correct public property", () => {
  const person = new Person("Joe Bloggs", 35);
  expect(person.name).toBe("Joe Bloggs");
});

test("should create a person and have the correct public property", () => {
  const person = new Person("Joe Bloggs", 35);
  expect(person.getAge()).toBe(35);
  person.setAge(36);
  expect(person.getAge()).toBe(36);
});