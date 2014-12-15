(function() {
  var __hasProp = {}.hasOwnProperty;

  this.data_map = {
    'South Gujarat': 'http://caddisfly.cartodb.com/api/v2/viz/c739358a-63f0-11e4-a8de-0e9d821ea90d/viz.json',
    'North Gujarat': 'http://caddisfly.cartodb.com/api/v2/viz/49b6095c-6b26-11e4-8819-0e9d821ea90d/viz.json',
    'Jhabua': 'http://caddisfly.cartodb.com/api/v2/viz/cdf43ca4-841f-11e4-b26a-0e0c41326911/viz.json'
  };

  window.onload = function() {
    var k, option, select, v, _ref;
    select = document.getElementById("data_select");
    _ref = this.data_map;
    for (k in _ref) {
      if (!__hasProp.call(_ref, k)) continue;
      v = _ref[k];
      option = document.createElement("option");
      option.value = v;
      option.text = k;
      select.add(option);
    }
    select.addEventListener("change", function() {
      var wrapper, _i, _len, _ref1;
      _ref1 = document.getElementById('map').getElementsByClassName('cartodb-map-wrapper');
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        wrapper = _ref1[_i];
        wrapper.parentNode.remove(wrapper);
      }
      return cartodb.createVis('map', select.value);
    });
    return cartodb.createVis('map', 'http://caddisfly.cartodb.com/api/v2/viz/49b6095c-6b26-11e4-8819-0e9d821ea90d/viz.json').done(function(vis, layers) {
      return window.map = vis.getNativeMap();
    });
  };

}).call(this);
