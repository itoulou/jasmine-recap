// describe a test for calculator
// first arg "Calculator" second arg is function()
describe("Calculator", function() {
    
    // to prevent constant additions of calc instance
    beforeEach(function() {
       calc = new Calculator(); 
    });
    // if we kept the instance like the code below,
    // calc.value would end up being 68 instead of 26
    
    // create new instance of Calculator object
    // var calc = new Calculator();
    
    // We want to test the addition button of a calculator
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
            // expect(addition(20, 22)).toBe(42);
        });
        // another test still inside the Addition tests function
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        //   expect(addition(7, 19)).toBe (26);
        });
        // test if input aret numbers
        // it("shoult return an error if we don't supply two numbers", function() {
        //   expect(addition("Hitchhikers", "Guide")).toBe("error!") 
        // });
        // Can use the code above by ouputting an alert box using a 'Spy'
        // a spy checks if a method has been called
        it("should return an error if we don't supply two numbers", function() {
           // spyOn is the funciton that takes two arguments
           // first is window because alert() (which gives us the alert box)
           // , is a method from the "Window" object
           // second is string of name of funciton in this case 'alert'
           spyOn(window, "alert");
           calc.add("Hitchhikers");
           calc.add("Guide");
        //   addition("Hithickers", "Guide");
           expect(window.alert).toHaveBeenCalledWith("error!")
        });
    });
});