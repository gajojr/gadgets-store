import React, {useEffect, useState} from 'react';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Proizvod, Image, H4 } from '../../KatalogStyles/Katalog.styles';

const Article = ({details}) => { 
    const [quantity, setQuantity] = useState(1);
    const [showItem, setShowItem] = useState(true);
    useEffect(() => {
        if (quantity < 1) {
            setShowItem(false);
        } 
    }, [quantity]);

    return (
        <Proizvod style={{display: showItem ? 'flex' : 'none', maxWidth: '25%'}}>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Proizvodjac: {details.proizvodjac}</H4>
            <H4>Model: {details.model}</H4>
            <H4>Tip: {details.tip}</H4>
            <H4>Cena: {details.cena}</H4>
            <H4>Kolicina: {quantity}</H4>
            <div style={{display: 'flex', alignSelf: 'flex-end'}}>
                <AiOutlinePlusCircle 
                    onClick={() => setQuantity(quantity => quantity + 1)} 
                    style={{cursor: 'pointer', marginRight: 10}} 
                    size={35} 
                    title='Povecaj kolicinu'
                />
                <AiOutlineMinusCircle 
                    onClick={() => setQuantity(quantity => quantity - 1)} 
                    style={{cursor: 'pointer'}} size={35} 
                    title='Smanji kolicinu'
                />
            </div>
        </Proizvod>
    );
};

export default Article;