function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);

  const regularPay = regularHours * rate;
  const overtimePay = overtimeHours * rate * 1.5;

  const totalPay = regularPay + overtimePay;

  return Math.round(totalPay);
}

module.exports = { isValidShift, calculatePay };
