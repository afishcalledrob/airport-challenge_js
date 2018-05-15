describe('weather', function(){

  beforeEach(function(){
    weather = new Weather();
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



});
