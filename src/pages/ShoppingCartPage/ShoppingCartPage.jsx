import React from 'react';

import Katalog from '../../components/ShoppingCart/Katalog/Katalog.component';
import Form from '../../components/ShoppingCart/Placanje/Forma.component';

const CartPage = () => {
    document.title = 'Shoping korpa';
    if (!localStorage.getItem('maskice') && !localStorage.getItem('narukvice') && !localStorage.getItem('slusalice') && !localStorage.getItem('dzojstici') && !localStorage.getItem('punjaci')) {
        return <h1 style={{marginLeft: '10px'}}>Vasa korpa je trenutno prazna</h1>
    }

    return ( 
        <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Katalog/>
            <Form/>
        </main>
    );
}

export default CartPage;