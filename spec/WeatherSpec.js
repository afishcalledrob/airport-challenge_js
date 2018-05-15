describe('weather', function(){

  beforeEach(function(){
    weather = new Weather();
    // spyOn(weather, '_randomConditions').and.returnValue('fine');

  });

  describe('_randomConditions', function(){

    it('returns random weather', function(){

      var weatherArray = [];
      for(i=1; i<=100; i++){
      weatherArray.push(weather._randomConditions());
     };

     expect(weatherArray).toContain('fine');
     expect(weatherArray).toContain('stormy');
    });


  });



  describe('is fine', function(){

    beforeEach(function(){
      weather = new Weather();
      spyOn(weather, '_randomConditions').and.returnValue('fine');

    });
     it('returns fine for random conditions method', function(){
       expect(weather._randomConditions()).toEqual('fine');

     });
  });

  describe('is stormy', function(){

    beforeEach(function(){
      weather = new Weather();
      spyOn(weather, '_randomConditions').and.returnValue('stormy');

    });
     it('returns fine for random conditions method', function(){
       expect(weather._randomConditions()).toEqual('stormy');

     });
  });



});
