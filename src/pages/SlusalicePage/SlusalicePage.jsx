import React from 'react';

import Katalog from '../../components/Slusalice/Katalog/Katalog.component';
import FilterMenu from '../../components/Slusalice/FilterMenu/FilterMenu.component';

const SlusalicePage = () => {
    return ( 
        <React.Fragment >
            <Katalog/>
            <FilterMenu/>
        </React.Fragment>
    );
}

export default SlusalicePage;