import { Given, Then, When } from "cucumber";
import { expect } from "chai";
import Mainpage from "../pageobjects/Main.page";
import FormatValidator from "../../lib/FormatValidator";

Given(/^I open the site$/, function () {
  browser.url("http://www.shino.de/parkcalc/");
});

//1
When(/^I fill up the form with the correct data$/, function () {
  const sDate = "7/1/2020";
  const sTime = "9:00";
  const lDate = "7/2/2020";
  const lTime = "9:00";

  expect(FormatValidator.validateDateFormat(sDate)).to.equal(true);

  expect(FormatValidator.validateTimeFormat(sTime)).to.equal(true);

  expect(FormatValidator.validateDateFormat(lDate)).to.equal(true);

  expect(FormatValidator.validateTimeFormat(lTime)).to.equal(true);

  Mainpage.createTicket(0, sDate, sTime, lDate, lTime);
  Mainpage.submit();
});

Then(
  /^The data should be displayed alongside the estimated cost$/,
  function () {
    expect(Mainpage.selectParkingLot.getValue()).to.equal("Valet");
    expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
    expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
    expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/2/2020");
    expect(Mainpage.inputLeavingTime.getValue()).to.equal("9:00");
    expect(Mainpage.ParkingCost.getText()).to.equal("$ 18.00");

    expect(Mainpage.GotError.isExisting()).to.equal(false);
  }
);

//2
When(/^I type my ticket without defining the dates$/, function () {
  Mainpage.createTicket(0, null, "9:00", null, "9:00");
  Mainpage.submit();
});

Then(/^It should throw an Error notifing date formatting$/, function () {
  expect(Mainpage.GotError.getText()).to.equal(
    "ERROR! ENTER A CORRECTLY FORMATTED DATE"
  );
});

//3
When(
  /^I type my ticket and leaving date is before starting date$/,
  function () {
    Mainpage.createTicket(0, "7/2/2020", "9:00", "7/1/2020", "9:00");
    Mainpage.submit();
  }
);

Then(/^It should throw an Error notifing bad leaving date$/, function () {
  expect(Mainpage.GotError.getText()).to.equal(
    "ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME"
  );
});

//4
When(/^I fill the form with invalid date formats$/, function () {
  Mainpage.createTicket(0, "7-99-2020", "9:00", "77/1/2020", "9:00");

  let val;
  val = FormatValidator.validateDateFormat(
    Mainpage.inputStartingDate.getValue()
  );
  expect(val).to.equal(false);

  val = FormatValidator.validateDateFormat(
    Mainpage.inputLeavingDate.getValue()
  );
  expect(val).to.equal(false);
  Mainpage.submit();
});

Then(
  /^It should display an Error explaing the invalidness of the date format$/,
  function () {
    expect(Mainpage.GotError.isExisting()).to.equal(true);
  }
);

//5
When(/^I fill the form with invalid time formats$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "99:00", "7/2/2020", "900");

  let val;
  val = FormatValidator.validateTimeFormat(
    Mainpage.inputStartingTime.getValue()
  );
  expect(val).to.equal(false);

  val = FormatValidator.validateTimeFormat(
    Mainpage.inputLeavingTime.getValue()
  );
  expect(val).to.equal(false);
  Mainpage.submit();
});

Then(
  /^It should display an Error explaing the invalidness of the time format$/,
  function () {
    expect(Mainpage.GotError.isExisting()).to.equal(true);
  }
);

//6
When(/^I fill the form with invalid date types$/, function () {
  Mainpage.createTicket(0, "hello", "9:00", "45c", "9:00");

  let val;
  val = FormatValidator.validateDateFormat(
    Mainpage.inputStartingDate.getValue()
  );
  expect(val).to.equal(false);

  val = FormatValidator.validateDateFormat(
    Mainpage.inputLeavingDate.getValue()
  );
  expect(val).to.equal(false);
  Mainpage.submit();
});

Then(
  /^It should display an Error explaing the invalidness of the date type$/,
  function () {
    expect(Mainpage.GotError.isExisting()).to.equal(true);
  }
);

//7
When(/^I fill the form with invalid time types$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "h00101010101", "7/2/2020", "notXfound");

  let val;
  val = FormatValidator.validateTimeFormat(
    Mainpage.inputStartingTime.getValue()
  );
  expect(val).to.equal(false);

  val = FormatValidator.validateTimeFormat(
    Mainpage.inputLeavingTime.getValue()
  );
  expect(val).to.equal(false);
  Mainpage.submit();
});

Then(
  /^It should display an Error explaing the invalidness of the time type$/,
  function () {
    expect(Mainpage.GotError.isExisting()).to.equal(true);
  }
);
