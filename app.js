// Wrapping your JavaScript in a closure is a good habit!
(function(){
  var app = angular.module('store', []);

	// Notice that controller is attached to (inside our app).
  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'dkjwfkjrkljghrgtkjr;dc/jqwefnlwultiehnr/lwhefkfhsehk',
  }
})();
