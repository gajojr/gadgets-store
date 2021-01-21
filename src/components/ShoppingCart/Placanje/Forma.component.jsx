import React from 'react';

import {StyledForm, Info, Label, Input, VerificationDiv, Image, Select, Sumbit} from './Forma.styles';

import FormHandle from './form-handle';

const items = ['ball', 'car', 'cat', 'dog'];

const Form = () => { 
    // random pic to verify user is not robot
    const src = `/images/verifikacija/${items[Math.floor(Math.random() * items.length)]}${Math.floor(Math.random() * 3) + 1}.webp`;

    return (
        <StyledForm>
            <Info>
                <Label htmlFor="ime">Ime</Label>  
                <Input type="text" id="ime" placeholder="Petar" required/>
                <Label htmlFor="prezime">Prezime</Label>  
                <Input type="text" id="prezime" placeholder="Petrovic" required/>
                <Label htmlFor="email">Email</Label>  
                <Input type="email" id="email" placeholder="petar@gmail.com" required/>
                <Label htmlFor="telefon">Telefon</Label>  
                <Input type="text" id="telefon" placeholder="06* *** ***" required/>
                <Label htmlFor="grad">Grad</Label>  
                <Input type="text" id="grad" placeholder="Beograd" required/>
                <Label htmlFor="postanskiBroj">Postanski broj</Label>  
                <Input type="text" id="postanskiBroj" placeholder="101801" required/>
                <Label htmlFor="ulica">Ulica</Label>  
                <Input type="text" id="ulica" placeholder="Ime ulice" required/>
                <Label htmlFor="brojUlice">Broj ulice</Label>  
                <Input type="text" id="brojUlice" placeholder="25" required/>
            </Info>
            <VerificationDiv>
                <Image src={src} alt="Verification"/>
                <Label htmlFor="humanVerification">Sta vidite na slici?</Label>  
                <Select name="human-verification" id="humanVerification">
                    <option value="lopta">lopta</option>
                    <option value="automobil">automobil</option>
                    <option value="macka">macka</option>
                    <option value="pas">pas</option>
                </Select>
            </VerificationDiv>
            <Sumbit type="button" onClick={FormHandle}>Poruci</Sumbit>
        </StyledForm>
    );
};

export default Form;