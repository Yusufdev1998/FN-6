// weekly food
var osh = {
  guruch: 1000,
  gosht: 0,
  piyoz: 200,
  sabzi: 1000,
  yog: 200,
  tuz: 20,
  price: function () {
    return (
      grammToKg(this.gosht) * priceIngredients.gosht +
      grammToKg(this.guruch) * priceIngredients.guruch +
      grammToKg(this.sabzi) * priceIngredients.sabzi +
      grammToKg(this.tuz) * priceIngredients.tuz +
      grammToKg(this.piyoz) * priceIngredients.piyoz +
      grammToKg(this.yog) * priceIngredients.yog
    );
  },
  goshtQoshish: function (gr) {
    this.gosht = gr;
    return this;
  },
};

var shorva = {
  kartoshka: 1000,
  gosht: 0,
  piyoz: 300,
  sabzi: 200,
  yog: 100,
  tuz: 30,
  price: function () {
    return (
      grammToKg(this.gosht) * priceIngredients.gosht +
      grammToKg(this.kartoshka) * priceIngredients.kartoshka +
      grammToKg(this.sabzi) * priceIngredients.sabzi +
      grammToKg(this.tuz) * priceIngredients.tuz +
      grammToKg(this.piyoz) * priceIngredients.piyoz +
      grammToKg(this.yog) * priceIngredients.yog
    );
  },
};

var free = {
  kartoshka: 2500,
  yog: 500,
  tuz: 20,
  price: function () {
    return (
      grammToKg(this.kartoshka) * priceIngredients.kartoshka +
      grammToKg(this.tuz) * priceIngredients.tuz +
      grammToKg(this.yog) * priceIngredients.yog
    );
  },
};

var monti = {
  un: 1500,
  gosht: 0,
  piyoz: 1000,
  tuz: 20,
  molYogi: 200,
  price: function () {
    return (
      grammToKg(this.gosht) * priceIngredients.gosht +
      grammToKg(this.un) * priceIngredients.un +
      grammToKg(this.tuz) * priceIngredients.tuz +
      grammToKg(this.piyoz) * priceIngredients.piyoz +
      grammToKg(this.molYogi) * priceIngredients.molYogi
    );
  },
};

var mastava = {
  kartoshka: 500,
  gosht: 0,
  piyoz: 200,
  tuz: 20,
  guruch: 250,
  yog: 150,
  price: function () {
    return (
      grammToKg(this.gosht) * priceIngredients.gosht +
      grammToKg(this.kartoshka) * priceIngredients.kartoshka +
      grammToKg(this.guruch) * priceIngredients.guruch +
      grammToKg(this.tuz) * priceIngredients.tuz +
      grammToKg(this.piyoz) * priceIngredients.piyoz +
      grammToKg(this.yog) * priceIngredients.yog
    );
  },
};

var weeklyFood = {
  osh: 2,
  shorva: 1,
  free: 1,
  monti: 1,
  mastava: 2,
};

var priceIngredients = {
  gosht: 80000,
  guruch: 20000,
  piyoz: 6000,
  kartoshka: 8000,
  sabzi: 4000,
  un: 8000,
  tuz: 3000,
  yog: 27000,
  molYogi: 20000,
};

function grammToKg(gramm) {
  return gramm / 1000;
}

function calculate(people) {
  var price = 0;

  price =
    price +
    osh.price() * weeklyFood.osh +
    mastava.price() * weeklyFood.mastava +
    monti.price() * weeklyFood.monti +
    free.price() * weeklyFood.free +
    shorva.price() * weeklyFood.shorva;

  var kishiBoshiga = 0;
  if (people > 0) {
    kishiBoshiga = price / people;
  } else {
    kishiBoshiga = price;
  }

  console.log(kishiBoshiga);
}

calculate(5);
