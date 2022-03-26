import convert from "./Currency";
it("Converts correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));
  const rates = await convert("USD", "CAD");
  expect(rates).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});
