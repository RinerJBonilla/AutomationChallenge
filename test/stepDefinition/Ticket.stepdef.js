import { Then, When } from "cucumber";
import { expect } from "chai";
import Mainpage from "../pageobjects/Main.page";

//1
When(/^I type my valet ticket down$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "9:00", "7/2/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated valet Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 18.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//2
When(/^I type my valet ticket down 2$/, function () {
  Mainpage.createTicket(0, "7/1/2020", "9:00", "7/1/2020", "14:00");

  Mainpage.submit();
});

Then(/^My Estimated valet cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 12.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//3
When(/^I Write my short Ticket Down$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/1/2020", "13:00");

  Mainpage.submit();
});

Then(/^My Estimated short Parking cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//4
When(/^I Write my short Ticket Down 2$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/2/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated short cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 24.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//5
When(/^I Write my short Ticket Down 3$/, function () {
  Mainpage.createTicket(1, "7/1/2020", "9:00", "7/2/2020", "19:00");

  Mainpage.submit();
});

Then(/^My Estimated short cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 44.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//6
When(/^I Write my long garage Ticket Down$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/1/2020", "13:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//7
When(/^I Write my long garage Ticket Down 2$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/2/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 12.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//8
When(/^I Write my long garage Ticket Down 3$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/7/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 72.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//9
When(/^I Write my long garage Ticket Down 4$/, function () {
  Mainpage.createTicket(3, "7/1/2020", "9:00", "7/8/2020", "14:00");

  Mainpage.submit();
});

Then(/^My Estimated long garage cost should be correct 3$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 82.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//10
When(/^I Write my long surface Ticket Down$/, function () {
  Mainpage.createTicket(4, "7/1/2020", "9:00", "7/1/2020", "13:00");

  Mainpage.submit();
});

Then(/^My Estimated long surface Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//11
When(/^I Write my long surface Ticket Down 2$/, function () {
  Mainpage.createTicket(4, "7/1/2020", "9:00", "7/1/2020", "18:00");

  Mainpage.submit();
});

Then(/^My Estimated long surface cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 10.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//12
When(/^I Write my long surface Ticket Down 3$/, function () {
  Mainpage.createTicket(4, "7/1/2020", "9:00", "7/7/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated long surface cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 60.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//13
When(/^I Write my long surface Ticket Down 4$/, function () {
  Mainpage.createTicket(4, "7/1/2020", "9:00", "7/9/2020", "13:00");

  Mainpage.submit();
});

Then(/^My Estimated long surface cost should be correct 3$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 78.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//14
When(/^I Write my economy Ticket Down$/, function () {
  Mainpage.createTicket(2, "7/1/2020", "9:00", "7/1/2020", "13:00");

  Mainpage.submit();
});

Then(/^My Estimated economy Parking Cost should show up$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 8.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//15
When(/^I Write my economy Ticket Down 2$/, function () {
  Mainpage.createTicket(2, "7/1/2020", "9:00", "7/1/2020", "20:00");

  Mainpage.submit();
});

Then(/^My Estimated economy cost should be correct$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 9.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//16
When(/^I Write my economy Ticket Down 3$/, function () {
  Mainpage.createTicket(2, "7/1/2020", "9:00", "7/7/2020", "9:00");

  Mainpage.submit();
});

Then(/^My Estimated economy cost should be correct 2$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 54.00");
  console.log(Mainpage.CalculatedTime.getText());
});

//17
When(/^I Write my economy Ticket Down 4$/, function () {
  Mainpage.createTicket(2, "7/1/2020", "9:00", "7/9/2020", "14:00");

  Mainpage.submit();
});

Then(/^My Estimated economy cost should be correct 3$/, function () {
  expect(Mainpage.ParkingCost.getText()).to.equal("$ 72.00");
  console.log(Mainpage.CalculatedTime.getText());
});
