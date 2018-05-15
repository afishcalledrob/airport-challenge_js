describe('Plane', function(){

  plane = new Plane();
  
  describe('#land', function(){
    it('lands in airport when instructed controller', function(){
      plane.land;
      expect(plane.landed).toBe(true);
    });

  });
});
