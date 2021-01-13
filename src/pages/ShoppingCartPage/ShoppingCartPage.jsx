import React from 'react';

import Katalog from '../../components/ShoppingCart/Katalog/Katalog.component';
import Form from '../../components/ShoppingCart/Placanje/Forma.component';

const CartPage = () => {
    return ( 
        <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Katalog/>
            <Form/>
        </main>
    );
}

export default CartPage;