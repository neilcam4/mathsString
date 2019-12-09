
describe("Maths String", function(){
    it("describes 1 +1 returns 2", function(){
        let input = "1 + 1";
        let result = mathsString(input);
        expect(result).toEqual(["1 + 1", 2])
    })
    it("describes 10 +1 returns 11", function(){
        let input = "10 + 1";
        let result = mathsString(input);
        expect(result).toEqual(["10 + 1", 11])
    })
    it("describes 5-2 returns 3", function(){
        let input = "5 - 2";
        let result = mathsString(input);
        expect(result).toEqual(["5 - 2", 3])
    })
    it("describes 15-2 returns 3", function(){
        let input = "15 - 2";
        let result = mathsString(input);
        expect(result).toEqual(["15 - 2", 13])
    })
    it("describes 3 x 4 returns 12", function(){
        let input = "3 x 4";
        let result = mathsString(input);
        expect(result).toEqual(["3 x 4", 12])
    })
    it("describes 8/2 returns 4", function(){
        let input = "8 / 2";
        let result = mathsString(input);
        expect(result).toEqual(["8 / 2", 4])
    })
})