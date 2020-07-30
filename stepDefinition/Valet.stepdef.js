import { Given, Then, When } from "cucumber";
import { expect } from "chai";

Given(/^I open the site$/, function () {
  browser.url("http://www.shino.de/parkcalc/");
});

When(/^I type my valet ticket down$/, function () {
  const pk = $("select#ParkingLot");
  pk.selectByIndex(0);

  expect(pk.getValue()).to.equal("Valet");

  const inputSD = $("input#StartingDate");
  inputSD.setValue("7/1/2020");

  expect(inputSD.getValue()).to.equal("7/1/2020");

  const inputST = $("input#StartingTime");
  inputST.setValue("9:00");

  expect(inputST.getValue()).to.equal("9:00");

  const inputLD = $("input#LeavingDate");
  inputLD.setValue("7/2/2020");

  expect(inputLD.getValue()).to.equal("7/2/2020");

  const inputLT = $("input#LeavingTime");
  inputLT.setValue("9:00");

  expect(inputLT.getValue()).to.equal("9:00");

  const bttn = $("//input[@name='Submit']");
  bttn.click();
});

Then(/^My Estimated Parking Cost should show up$/, function () {
  const resutl = $("/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b");
  const res2 = $("/html/body/form/table/tbody/tr[4]/td[2]/span[2]/b");

  expect(resutl.getText()).to.equal("$ 18.00");
  console.log(res2.getText());
});
