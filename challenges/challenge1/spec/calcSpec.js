describe("What Drink", function() {
    var error = "Sorry. I can't tell what drink because that age is incorrect"
   it("should return error", function() {
       expect(whatCanIDrink(-5)).toBe(error)
   });
   it("should return drink toddy", function() {
      expect(whatCanIDrink(5)).toBe("Drink Toddy"); 
   });
   it("shoudl return drink coke", function() {
      expect(whatCanIDrink(15)).toBe("Drink Coke"); 
   });
   it("should return drink beer", function() {
      expect(whatCanIDrink(19)).toBe("Drink Beer"); 
   });
   it("should return drink whisky", function() {
      expect(whatCanIDrink(57)).toBe("Drink Whisky"); 
   });
   it("should return error", function() {
      expect(whatCanIDrink(42453)).toBe(error); 
   });
   it("should return error", function() {
      expect(whatCanIDrink("fifty-seven")).toBe(error); 
   });
});