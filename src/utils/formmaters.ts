export const dateFormatter = new Intl.DateTimeFormat("en");
export const priceFomatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "usd",
});
