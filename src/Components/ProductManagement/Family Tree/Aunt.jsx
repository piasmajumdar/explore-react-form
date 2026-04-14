import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {
    // --> Doesn't Work
    // const moneyAsset = use(MoneyContext);
    // const [money, setMoney] = moneyAsset;
    // console.log(money);
    // console.log(setMoney); 

    // --Working--
    const [money, setMoney] = use(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Tom Tom' asset={asset}></Cousin>
                <Cousin name='jo joo'></Cousin>
                <button onClick={handleAddMoney}> Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;