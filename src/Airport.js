var DEFAULT_CAPACITY = 3;

function Airport(){

  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane){
  this.planes.push(plane);
  return this.planes;

};
