import React, {useEffect, useState} from 'react';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

import { Image, H4 } from '../../KatalogStyles/Katalog.styles';
import { Proizvod } from './Article.styles';

import { modifyLocalStorage } from '../../utils';

const Article = ({details}) => { 
    const [quantity, setQuantity] = useState(() => {
        const vrsta = details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/'));
        const articles = JSON.parse(localStorage.getItem(vrsta));
        if (articles) {
            // prolazimo kroz niz artikala trazene vrste da vidimo da li artikal ima kolicinu vecu od 1
            for (const article of articles) {
                if(article.model === article.model) {
                    // ako ima vracamo tu kolicinu
                    return article.kolicina;
                }
            }
        }

        // default kolicina ako nema artikla u localStorageu
        return 1;
    });

    const [showItem, setShowItem] = useState(true);

    useEffect(() => {
        if (quantity < 1) {
            setShowItem(false);
            // uzmi kljuc za localStorage
            const vrsta = details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/'));
            // uzmi ceo niz artikala iz ove vrste osim ovog koji treba da se ukloni
            const artikli = JSON.parse(localStorage.getItem(vrsta)).filter(artikal => artikal.model !== details.model);
            // postavi isti kljuc da bude niz bez uklonjenog elementa
            // ako uopste ima nesto u nizu, ako nema, uklanjamo kljuc iz localStoragea
            if (artikli.length > 0) {
                localStorage.setItem(vrsta, JSON.stringify(artikli));
            } else {
                localStorage.removeItem(vrsta);
            }
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
                        modifyLocalStorage(details, details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/')), '+');
                    }} 
                    style={{cursor: 'pointer', marginRight: 10}} 
                    size={35} 
                    title='Povecaj kolicinu'
                />
                <AiOutlineMinusCircle 
                    onClick={() => {
                        setQuantity(quantity => quantity - 1);
                        modifyLocalStorage(details, details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/')), '-');
                    }} 
                    style={{cursor: 'pointer'}} 
                    size={35} 
                    title='Smanji kolicinu'
                />
                <FiTrash2
                    onClick={() => setQuantity(0)} 
                    style={{cursor: 'pointer'}} 
                    size={35} 
                    title='Ukloni artikal'
                />
            </div>
        </Proizvod>
    );
};

export default Article;