import * as ConvertFarsiDigitsToEnglishDigits from "../ConvertFarsiDigitsToEnglishDigits"
// @ponicode
describe("ConvertFarsiDigitsToEnglishDigits.default", () => {
    test("0", () => {
        ConvertFarsiDigitsToEnglishDigits.default("۳۴۳۴۵۴۵")
    })

    test("1", () => {
        ConvertFarsiDigitsToEnglishDigits.default("۲")
    })

    test("2", () => {
        ConvertFarsiDigitsToEnglishDigits.default("-۶۵۵۴")
    })
})
