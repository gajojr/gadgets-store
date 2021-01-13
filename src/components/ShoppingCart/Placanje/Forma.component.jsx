import React from 'react';

import {StyledForm, Label, Input, Image, Sumbit} from './Forma.styles';

const items = ['ball', 'car', 'cat', 'dog'];

const Form = () => { 
    // random pic to verify user is not robot
    const src = `/images/verifikacija/${items[Math.floor(Math.random() * items.length)]}${Math.floor(Math.random() * 3) + 1}.webp`;

    return (
        <StyledForm>
            <Label>Ime</Label>  
            <Input type="text" placeholder="Petar"/>
            <Label>Prezime</Label>  
            <Input type="text" placeholder="Petrovic"/>
            <Label>Email</Label>  
            <Input type="email" placeholder="petar@gmail.com"/>
            <Label>Telefon</Label>  
            <Input type="text" placeholder="06* *** ***"/>
            <Label>Grad</Label>  
            <Input type="text" placeholder="Beograd"/>
            <Label>Postanski broj</Label>  
            <Input type="text" placeholder="101801"/>
            <Label>Ulica</Label>  
            <Input type="text" placeholder="Ime ulice"/>
            <Label>Broj ulice</Label>  
            <Input type="text" placeholder="25"/>
            <Image src={src} alt="Verification"/>
            <Label>Sta vidite na slici?</Label>  
            <Input type="text"/>
            <Sumbit type="submit" value="Poruci"/>
        </StyledForm>
    );
};

export default Form;