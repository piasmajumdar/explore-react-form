import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section>
                <Cousin name='Tom tom'></Cousin> 
                <Cousin name='jo joo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;