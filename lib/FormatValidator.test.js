import { assert } from "chai";
import FormatValidator from "./FormatValidator";

describe("Format Validator Date", function () {
  it("should accept a valid date format", function () {
    const date = "2/2/2020";
    assert.equal(FormatValidator.validateDateFormat(date), true);
  });

  it("should not accept invalid numbers of days months and years", function () {
    let date = "32/1/2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);

    date = "30/13/2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);

    date = "31/12/2";
    assert.equal(FormatValidator.validateDateFormat(date), false);
  });

  it("should not accept negative numbers", function () {
    let date = "-1/1/2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);
    date = "1/-1/2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);
    date = "1/1/-2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);
  });

  it("should not accpet any other date format but dd/mm/yyyy", function () {
    let date = "1-31-2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);

    date = "12/30/2020";
    assert.equal(FormatValidator.validateDateFormat(date), false);

    date = "2020/12/1";
    assert.equal(FormatValidator.validateDateFormat(date), false);

    date = "2020-30-12";
    assert.equal(FormatValidator.validateDateFormat(date), false);
  });

  it("should only accept the 31st day on valid months", function () {
    let month = "1";

    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "2";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      false
    );
    month = "3";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "4";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      false
    );
    month = "5";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "6";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      false
    );
    month = "7";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "8";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "9";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      false
    );
    month = "10";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
    month = "11";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      false
    );
    month = "12";
    assert.equal(
      FormatValidator.validateDateFormat("31/" + month + "/2020"),
      true
    );
  });
});

describe("Format Validator Time", function () {
  it("should accept a valid time format", function () {
    let time = "9:00";
    assert.equal(FormatValidator.validateTimeFormat(time), true);
  });

  it("should accept both standard and military formats", function () {
    let time = "00:00";
    assert.equal(FormatValidator.validateTimeFormat(time), true);
    time = "23:00";
    assert.equal(FormatValidator.validateTimeFormat(time), true);
  });

  it("it should not accept any time format other than hh:mm", function () {
    let time = "2300";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
    time = "23-00";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
    time = "23/00";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
  });

  it("it should not accept invalid and negative numbers", function () {
    let time = "25:00";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
    time = "22:61";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
    time = "-22:00";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
    time = "22:-15";
    assert.equal(FormatValidator.validateTimeFormat(time), false);
  });
});
