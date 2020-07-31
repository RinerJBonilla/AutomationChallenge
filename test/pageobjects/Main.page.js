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

  get GotError() {
    return $("/html/body/form/table/tbody/tr[4]/td[2]/b");
  }

  createTicket(type, startingDate, startingTime, leavingDate, leavingTime) {
    if (type) {
      this.selectParkingLot.selectByIndex(type);
    }

    if (startingDate) {
      this.inputStartingDate.setValue(startingDate);
    }

    if (startingTime) {
      this.inputStartingTime.setValue(startingTime);
    }

    if (leavingDate) {
      this.inputLeavingDate.setValue(leavingDate);
    }

    if (leavingTime) {
      this.inputLeavingTime.setValue(leavingTime);
    }
  }

  submit() {
    this.submitButton.click();
  }
}

export default new Mainpage();
