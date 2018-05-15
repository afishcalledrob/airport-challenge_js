var DEFAULT_CAPACITY = 3;

function Airport(){

  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane){
  plane.land();
  this.planes.push(plane);

};

Airport.prototype.release = function(plane){
  plane.takeOff();
  this.planes.pop(plane);

}
