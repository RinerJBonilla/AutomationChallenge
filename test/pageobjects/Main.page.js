class Mainpage {
  get selectParkingLot() {
    return $("select#ParkingLot");
  }
  get inputStartingDate() {
    return $("input#StartingDate");
  }
  get inputStartingTime() {
    return $("input#StartingTime");
  }
  get inputLeavingDate() {
    return $("input#LeavingDate");
  }
  get inputLeavingTime() {
    return $("input#LeavingTime");
  }

  get submitButton() {
    return $("//input[@name='Submit']");
  }

  get ParkingCost() {
    return $("/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b");
  }
  get CalculatedTime() {
    return $("/html/body/form/table/tbody/tr[4]/td[2]/span[2]/b");
  }

  createTicket(type, startingDate, startingTime, leavingDate, leavingTime) {
    this.selectParkingLot.selectByIndex(type);

    this.inputStartingDate.setValue(startingDate);
    this.inputStartingTime.setValue(startingTime);
    this.inputLeavingDate.setValue(leavingDate);
    this.inputLeavingTime.setValue(leavingTime);
  }

  submit() {
    this.submitButton.click();
  }
}

export default new Mainpage();
