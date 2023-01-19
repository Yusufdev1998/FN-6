var money = prompt("Nechpul pulingiz bor");

function sayohat(pul) {
  if (pul > 10000) {
    console.log("Gavaya orollariga");
  } else if (pul < 1000 && pul > 500) {
    console.log("Dubayga");
  } else if (pul <= 500 && pul > 100) {
    console.log("Toshkent amirsoy");
  } else if (pul <= 100) {
    console.log("Uyda qoling!");
  } else {
    console.log("5600");
  }
}

sayohat(money);
