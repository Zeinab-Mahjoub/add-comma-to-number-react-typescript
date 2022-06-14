import React, {useMemo} from 'react';
import {AddCommaToNumber} from '../helpers/AddCommaToNumber';

export const InputAddCommaToNumber: React.FC = () => {
    const [storednumber, setStoredNumber] = React.useState("");

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/[^\-?۱۲۳۴۵۶۷۸۹۰0-9.]+/g, "");
        const { realOutput } = AddCommaToNumber(e.target.value);
        setStoredNumber(realOutput!);
    }

    const seennumber = useMemo(() => ((storednumber).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")), [storednumber]);

    console.log(seennumber);

    return (
        <div>
            <label htmlFor="">Please insert a number:</label>
            <input
                // value should be procession of storednumber
                value={seennumber}
                // storednumber={storednumber}
                onChange={handleChangeInput}
                type="text"
            />
        </div>
    );
}
