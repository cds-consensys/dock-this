// really dumb tests just to make sure we have the interface we need published as it should be.
var assert = require("assert");
var ganache = require("ganache-cli");
assert.strictEqual(typeof ganache.server, "function");
assert.strictEqual(typeof ganache.provider, "function");
console.log("worked. thanks!");
