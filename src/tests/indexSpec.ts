import {add} from "../index";
describe("test jasmine",() => {
    it("test case",() => {
        let result:number = add(5,10);
        expect(result).toBe(15);
    });
});