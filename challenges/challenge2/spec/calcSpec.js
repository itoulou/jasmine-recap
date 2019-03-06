describe("FizzBuzz", function() {
    beforeEach(function() {
       fizzbuzz = new fizzBuzz(); 
    });
    describe("Returns number, fizz, buzz or FizzBuzz", function() {
        it("should return number", function() {
            var result = fizzBuzz(1);
            expect(result).toBe(1); 
        });
        it("should return Fizz", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it("should return Buzz", function() {
           expect(fizzBuzz(5)).toBe("Buzz"); 
        });
        it("should return FizzBuzz", function() {
           expect(fizzBuzz(15)).toBe("FizzBuzz") 
        });
    });

});