import React, {useEffect, useState} from 'react';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Image, H4 } from '../../KatalogStyles/Katalog.styles';
import { Proizvod } from './Article.styles';

const Article = ({details}) => { 
    const [quantity, setQuantity] = useState(1);
    const [showItem, setShowItem] = useState(true);
    useEffect(() => {
        if (quantity < 1) {
            setShowItem(false);
        } 
    }, [quantity]);

    return (
        <Proizvod style={{display: showItem ? 'flex' : 'none'}}>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Ime proizvoda: {details.proizvodjac} {details.model}</H4>
            <H4>Cena artikla: {details.cena}</H4>
            <H4>Kolicina: {quantity}</H4>
            <H4>Ukupno: {quantity * details.cena}</H4>
            <div style={{display: 'flex', alignSelf: 'flex-end'}}>
                <AiOutlinePlusCircle 
                    onClick={() => {
                        setQuantity(quantity => quantity + 1);
                        const arr = JSON.parse(localStorage.getItem(details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/'))));
                        console.log("OVo sto sam sad napravio", arr);
                    }} 
                    style={{cursor: 'pointer', marginRight: 10}} 
                    size={35} 
                    title='Povecaj kolicinu'
                />
                <AiOutlineMinusCircle 
                    onClick={() => setQuantity(quantity => quantity - 1)} 
                    style={{cursor: 'pointer'}} 
                    size={35} 
                    title='Smanji kolicinu'
                />
            </div>
        </Proizvod>
    );
};

export default Article;