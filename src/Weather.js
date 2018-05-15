var CONDITIONS = ['stormy', 'stormy', 'fine', 'fine', 'fine'];

function Weather(){

};

Weather.prototype._randomConditions = function(){
  return CONDITIONS[Math.floor ( Math.random() * CONDITIONS.length)];
};

Weather.prototype.isStormy = function(){
  this._randomConditions() === 'fine';
};
