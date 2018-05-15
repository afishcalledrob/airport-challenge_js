describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  describe('#land', function(){
    it('checks that the plane is landed by default', function(){
      // plane.land;
      expect(plane.landed).toBe(true);
    });

    it('checks that a plane responds to landing by setting laned to true', function(){
      plane.takeOff();
      plane.land();
      expect(plane.landed).toBe(true);

    });

  });
  describe('#takeOff', function(){
    it('changes the landad status of a plane to false', function(){
      plane.takeOff();
      expect(plane.landed).toBe(false);
    });

  });
});
