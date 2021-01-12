import React from 'react';

import Katalog from '../../components/Narukvice/Katalog/Katalog.component';
import FilterMenu from '../../components/Slusalice/FilterMenu/FilterMenu.component';

const NarukvicePage = () => {
    return ( 
        <React.Fragment >
            <Katalog/>
            <FilterMenu/>
        </React.Fragment>
    );
}

export default NarukvicePage;