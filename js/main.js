$(function () {
  var card = $(".js-card");
  var cardBaseWidth = card.width();
  var arrow = $(".js-arrow");
  var aspectRatio = 1;

  card.resizable({
    aspectRatio: aspectRatio,
    handles: "se",
  });

  card.on("resizestop", function () {
    updateAllRings();
  });

  // list of ring sizes US
  var rings = {
    "ring-J": 58.54488189,
    "ring-K": 60.094488189,
    "ring-L": 61.644094488,
    "ring-M": 63.155905512,
    "ring-N": 64.705511811,
    "ring-O": 66.25511811,
    "ring-P": 67.766929134,
    "ring-Q": 69.316535433,
    "ring-R": 70.866141732,
    "ring-S": 72.377952756,
  };

  function updateAllRings() {
    var changeRatio = 1 + (card.width() - cardBaseWidth) / cardBaseWidth;

    for (var key in rings) {
      var newDiameter = rings[key] * changeRatio;
      $("." + key)
        .width(newDiameter)
        .height(newDiameter);
    }
  }
});
