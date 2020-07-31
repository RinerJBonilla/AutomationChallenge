import { Given, Then, When } from "cucumber";
import { expect } from "chai";
import Mainpage from "../pageobjects/Main.page";

Given(/^I open the site$/, function () {
  browser.url("http://www.shino.de/parkcalc/");
});

//1
When(/^I type my ticket without defining the dates$/, function () {
  Mainpage.createTicket(0, null, "9:00", null, "9:00");
  Mainpage.submit();
});

Then(/^It should throw an Error notifing date formatting$/, function () {
  expect(Mainpage.GotError.getText()).to.equal(
    "ERROR! ENTER A CORRECTLY FORMATTED DATE"
  );
});

//2
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
