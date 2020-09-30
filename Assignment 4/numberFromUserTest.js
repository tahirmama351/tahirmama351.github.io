"use strict";

describe("numberFromUser", function () {

  it("if prompt is 123, returns 123", function () {
    //prompt.returns("123");
    assert.strictEqual(numberFromUser(), 123);
  });

  it("if 0, returns 0", function () {
    //prompt.returns("0");
    assert.strictEqual(numberFromUser(), 0);
  });

  it("continues the loop until meets a number", function () {
    prompt.onCall(0).returns("not a number");
    prompt.onCall(1).returns("not a number again");
    prompt.onCall(2).returns("1");
    assert.strictEqual(numberFromUser(), 1);
  });

  it("if an empty line, returns null", function () {
    prompt.returns("");
    assert.isNull(numberFromUser());
  });

  it("if cancel, returns null", function () {
    prompt.returns(null);
    assert.isNull(numberFromUser());
  });

});