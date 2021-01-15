import React from 'react';

import * as StyledComponents from './FooterSection.styles';

const FooterSection = () => {
    return (
        <StyledComponents.Footer>&copy; Gadgets store {new Date().getFullYear()}</StyledComponents.Footer>
    )
}

export default FooterSection;