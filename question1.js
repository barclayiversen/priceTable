var tiers = [
  {
    from: 0, to: 5, price: 0, total: 0
  },
  {
    from: 6, to: 10, price: 10, total: 50
  },
  {
    from: 11, to: 50, price: 8, total: 370
  },
  {
    from: 51, to: 100, price: 5, total: 620
  },
  {
    from: 101, to: 1000, price: 2, total: 2420
  },
    {
    from: 1001, price: 1
  }
];

function getBill(priceStructure, usage) {
  var total;
  determineTier(usage, priceStructure, function(tier, runningTotal) {
    console.log('tier returned', tier, runningTotal);
    total = runningTotal;
    console.log('total rn', total);
    total += determineTotal(tier, usage);
    console.log('greatnessawaits', total);
    return total
  });
}

function determineTier(usage, tiers, callback) {
  if (usage <=5){
    callback(tiers[0], 0);
    return false;
  }
  var runningTotal;
  for (var i = 0; i<tiers.length; i++) {
    if (usage <= tiers[i].to) {
      runningTotal = tiers[i - 1].total;
      callback(tiers[i], runningTotal);
      return false;
    }
  }
  callback(tiers[tiers.length-1], tiers[tiers.length - 2].total);
  return false;
}

function determineTotal(tier, usage) {
  console.log('usage: ', usage);
  var remainder = usage - tier.from + 1;
  console.log('remainder', remainder);
  var total = (tier.price * remainder) ;
  return total;
}

getBill(tiers, 1283);

//Next step, make pricing table a class
priceTable.prototype.determineTier(usage, tiers, callback) {

};

function priceTable(tiers) {
  this.tiers = tiers;
};
