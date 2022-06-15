import * as AddCommaToNumber from "../AddCommaToNumber"
// @ponicode
describe("AddCommaToNumber.AddCommaToNumber", () => {
    test("0", () => {
        AddCommaToNumber.AddCommaToNumber("")
    })

    test("1", () => {
        AddCommaToNumber.AddCommaToNumber("5908964832")
    })

    test("2", () => {
        AddCommaToNumber.AddCommaToNumber("590.89")
    })

    test("3", () => {
        let result: any = AddCommaToNumber.AddCommaToNumber("۴۳۲۴۳.۳۳۴")
        expect(result).toEqual({ realOutput: "43243.334" })
    })

    test("4", () => {
        AddCommaToNumber.AddCommaToNumber("-44074")
    })

    test("5", () => {
        let result: any = AddCommaToNumber.AddCommaToNumber("-۴۳۵۴۳۵.۴۵۵")
        expect(result).toEqual({ realOutput: "-435435.455" })
    })
})
