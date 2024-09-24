export default class YearEnteredValidator {
  private checkSize(yearEntered: string) {
    return yearEntered.length === 4;
  }

  private isNumber(yearEntered: string) {
    const year = Number(yearEntered);
    return !isNaN(year);
  }

  private checkRange(yearEntered: string) {
    return Number(yearEntered) >= 1920 && Number(yearEntered) <= 2020;
  }

  validate(yearEntered: string) {
    if (
      this.checkSize(yearEntered) &&
      this.isNumber(yearEntered) &&
      this.checkRange(yearEntered)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
