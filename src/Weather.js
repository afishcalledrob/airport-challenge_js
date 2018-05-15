function Weather(){
  var CONDITIONS = ['stormy', 'stormy', 'fine', 'fine', 'fine']


};

Weather.prototype._randomConditions = function(){
  CONDITIONS[Math.floor ( Math.random() * CONDITIONS.length)];
};

// Weather.prototype.isStormy = function(){
//   this.randomConditions
// };
