import React, {useEffect, useState} from 'react';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Image, H4 } from '../../KatalogStyles/Katalog.styles';
import { Proizvod } from './Article.styles';

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
                        const vrsta = details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/'));
                        // niz koji sadrzi sve artikle osim onog koji sadrzi trazeni model
                        const notForChange = JSON.parse(localStorage.getItem(vrsta)).filter(article => article.model !== details.model);
                        // niz koji sadrze sve artikle ove vrste
                        const articles = JSON.parse(localStorage.getItem(vrsta));
                        console.log("OVo sto sam sad napravio", articles);
                        for(const article of articles) {
                            if(article.model === details.model) {
                                // sklonimo ga iz localStorage
                                localStorage.removeItem(vrsta);
                                // za ovu vrstu postavimo ceo prethodni niz bez trazenog artikla i na
                                // kraju ubacimo trazeni artikal sa kolicinom povecanom za 1
                                localStorage.setItem(vrsta, JSON.stringify([...notForChange, {...article, kolicina: article.kolicina + 1}]));
                            }
                        }
                    }} 
                    style={{cursor: 'pointer', marginRight: 10}} 
                    size={35} 
                    title='Povecaj kolicinu'
                />
                <AiOutlineMinusCircle 
                    onClick={() => {
                        setQuantity(quantity => quantity - 1);
                        const vrsta = details.imgSrc.slice(8, details.imgSrc.lastIndexOf('/'));
                        const notForChange = JSON.parse(localStorage.getItem(vrsta)).filter(article => article.model !== details.model);
                        const articles = JSON.parse(localStorage.getItem(vrsta));
                        console.log("OVo sto sam sad napravio", articles);
                        for(const article of articles) {
                            if(article.model === details.model) {
                                localStorage.removeItem(vrsta);
                                localStorage.setItem(vrsta, JSON.stringify([...notForChange, {...article, kolicina: article.kolicina - 1}]));
                            }
                        }
                    }} 
                    style={{cursor: 'pointer'}} 
                    size={35} 
                    title='Smanji kolicinu'
                />
            </div>
        </Proizvod>
    );
};

export default Article;