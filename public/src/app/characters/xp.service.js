(function () {
  angular
    .module('app.characters')
    .service('xpService', xpService);

  function xpService() {
    var root = this;

    root.getProgressPercentage = getProgressPercentage;

    function requiredForLevel(level) {
      if(level < 1 || level > 69) {
        return 0;
      }

      return new XpMapping()[level];
    }

    function getProgressPercentage(xp, rested, level) {
      var required = requiredForLevel(level);
      var xpPercentage = Math.floor(xp / required * 100);
      var restedPercentage = Math.floor((xp + rested) / required * 100);
      
      return {
        xp: xpPercentage,
        rested: restedPercentage,
        toLevel: required - xp,
        total: required
      };
    }

    function XpMapping() {
      return [400
        , 900
        , 1400
        , 2100
        , 2800
        , 3600
        , 4500
        , 5400
        , 6500
        , 7600
        , 8700
        , 9800
        , 11000
        , 12300
        , 13600
        , 15000
        , 16400
        , 17800
        , 19300
        , 20800
        , 22400
        , 24000
        , 25500
        , 27200
        , 28900
        , 30500
        , 32200
        , 33900
        , 36300
        , 38800
        , 41600
        , 44600
        , 48000
        , 51400
        , 55000
        , 58700
        , 62400
        , 66200
        , 70200
        , 74300
        , 78500
        , 82800
        , 87100
        , 91600
        , 96300
        , 101000
        , 105800
        , 110700
        , 115700
        , 120900
        , 126100
        , 131500
        , 137000
        , 142500
        , 148200
        , 154000
        , 159900
        , 165800
        , 172000
        , 494000
        , 574700
        , 614400
        , 650300
        , 682300
        , 710200
        , 734100
        , 753700
        , 768900
        , 779700];
    }
  }
})();