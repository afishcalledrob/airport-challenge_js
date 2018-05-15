describe('Airport', function(){

  var airport;
  var DEFAULT_CAPACITY = 2;


  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['takeOff', 'land']);
    plane2 = jasmine.createSpyObj('plane', ['takeOff', 'land']);
    plane3 = jasmine.createSpyObj('plane', ['takeOff', 'land']);
  });

  describe('#initialize', function(){

    it('has empty plane array at default', function(){
      expect(airport.planes).toEqual([]);
    });

    it('has default capacity of 3', function(){
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

  });

  describe('#land', function(){
    it('lands and stores a plane', function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('plane receives land instruction', function(){
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('gives error if airport is full', function(){
      airport.land(plane);
      airport.land(plane2);
      expect(function(){ airport.land(plane3) }).toThrow("Airport Full!");
    });

    it('gives error if the plane in question is already in airport', function(){
      airport.land(plane);
      expect(function(){ airport.land(plane) }).toThrow('Plane already docked');

    });


  });


  describe('#release', function(){
    it('releases a plane', function(){
      airport.land(plane);
      airport.release(plane);
      expect(airport.planes).not.toContain(plane);
    });

    it('plane receives take off instruction', function(){
      airport.land(plane);
      airport.release(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

  });

});
