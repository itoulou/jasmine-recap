describe("FizzBuzz", function() {
    it("should return number", function() {
       expect(fizzBuzz(1)).toBe(1); 
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