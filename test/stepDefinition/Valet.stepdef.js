import { Given, Then, When } from "cucumber";
import { expect } from "chai";
import Mainpage from "../pageobjects/Main.page";

Given(/^I open the site$/, function () {
  browser.url("http://www.shino.de/parkcalc/");
});

//1
When(/^I type my valet ticket down$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "9:00", "7/2/2020", "9:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Valet");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/2/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("9:00");

  Mainpage.submit();
});

Then(/^My Estimated valet Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 18.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//2
When(/^I type my valet ticket down 2$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "9:00", "7/1/2020", "14:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Valet");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("14:00");

  Mainpage.submit();
});

Then(/^My Estimated valet cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 12.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//3
When(/^I Write my short Ticket Down$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/1/2020", "13:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Short");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("13:00");

  Mainpage.submit();
});

Then(/^My Estimated short Parking cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//4
When(/^I Write my short Ticket Down 2$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/2/2020", "9:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Short");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/2/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("9:00");

  Mainpage.submit();
});

Then(/^My Estimated short cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 24.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//5
When(/^I Write my short Ticket Down 3$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/2/2020", "19:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Short");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/2/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("19:00");

  Mainpage.submit();
});

Then(/^My Estimated short cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 44.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//6
When(/^I Write my long garage Ticket Down$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/1/2020", "13:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Long-Garage");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("13:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//7
When(/^I Write my long garage Ticket Down 2$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/2/2020", "9:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Long-Garage");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/2/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("9:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 12.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//8
When(/^I Write my long garage Ticket Down 3$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/7/2020", "9:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Long-Garage");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/7/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("9:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 72.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//9
When(/^I Write my long garage Ticket Down 4$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/8/2020", "14:00");

  expect(Mainpage.selectParkingLot.getValue()).to.equal("Long-Garage");
  expect(Mainpage.inputStartingDate.getValue()).to.equal("7/1/2020");
  expect(Mainpage.inputStartingTime.getValue()).to.equal("9:00");
  expect(Mainpage.inputLeavingDate.getValue()).to.equal("7/8/2020");
  expect(Mainpage.inputLeavingTime.getValue()).to.equal("14:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct 3$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 82.00");
  console.log(Mainpage.CalculatedTime.getText());
});
