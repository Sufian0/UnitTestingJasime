
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 2500,
    years: 5,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('44.37');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 2500,
    years: 5,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('44.37');
});

it("should handle negative and zero rates and years", function() {
  const values = {
    amount: 1000,
    years: -10,
    rate: -10
  };
  expect(calculateMonthlyPayment(values)).toEqual(-100);
});

/// etc