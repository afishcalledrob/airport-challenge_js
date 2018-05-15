describe('Weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });
  describe('#isStormy', function(){
    it('responds to is stormy random true or false values', function(){
      var weatherArray = [];
      for(i=1; i<=100; i++){
        weatherArray.push(weather._randomConditions());
      };
      expect(weatherArray).toContain('stormy');
      expect(weatherArray).toContain('fine');



    });

  });



});
