import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext('');


const FamilyTree = () => {

    const [money, setMoney] = useState(0)

    const asset = 'diamond';
    const newAsset = 'gold'




    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>

            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>


        </div>
    );
};

export default FamilyTree;


/**
 * 1. Create a context using createContext() with a default value; make sure you export the context to be used in other files
 * 2. Create this in root(App.jsx) folder
 * 
 * 3. Now, use this context-->
 *    <ContextName.Provider value={anything}>]
 *      Our Main/Root Component
 *    </ContextName.Provider>
 * 4. Here, for value, define it before;
*/