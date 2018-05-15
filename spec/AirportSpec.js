describe('Airport', function(){

  var airport;
  var DEFAULT_CAPACITY = 3;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('#initialize', function(){

    it('has empty plane array at default', function(){
      expect(airport.planes).toEqual([]);
    });

    it('has default capacity of 3', function(){
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

  });




});
