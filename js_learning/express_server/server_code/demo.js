const express = require("express");
const fs = require("fs");

function getAllProperties(obj) {
  const props = new Set();

  while (obj && obj !== Object.prototype) {
    Object.getOwnPropertyNames(obj).forEach(p => props.add(p));
    obj = Object.getPrototypeOf(obj);
  }

  return [...props].sort();
}

const api = {
  application: getAllProperties(express.application),
  request: getAllProperties(express.request),
  response: getAllProperties(express.response)
};

fs.writeFileSync(
  "express-api.json",
  JSON.stringify(api, null, 2)
);

console.log("Saved express-api.json");