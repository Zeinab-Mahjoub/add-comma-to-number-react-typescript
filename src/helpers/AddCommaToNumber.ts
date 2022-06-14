import React, {useMemo} from 'react';
import ConvertFarsiDigitsToEnglishDigits from './ConvertFarsiDigitsToEnglishDigits';

export const AddCommaToNumber = (num: any) => {

    num = typeof(num) == 'string' ? num.replace(/\,/g,'') : num.toString().replace(/\,/g,'');

    const isNumberFormat = /^\-?([۱۲۳۴۵۶۷۸۹۰0123456789]+)?(\.?[۱۲۳۴۵۶۷۸۹۰0123456789]*)?$/.test(num);

        // main process
        if (isNumberFormat) {
            // kole check kardan dar soorate sahih boodan inja check mishe.
            console.log({num})
            const data = {
                realOutput: (ConvertFarsiDigitsToEnglishDigits(num))
            }
    
            return data;
    
        } else {
            // vaghti har chi be joz adad vared kone karbar
            console.log('not number');
            return {
                realOutput: "",
                printedOutput: ""
            }; // کابر گرامی لطفا فقط عدد وارد کنید.
        }
}
