class Plane () {
  constructor(landed) {
    this.landed = landed;
  }
};

Plane.prototype.land = function(){
  self.landed = true;
};
