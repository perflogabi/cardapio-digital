import cardapio from 'data/cardapio.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect, useNavigate } from 'react-router-dom';
import { Cardapio } from 'types/Prato';

function Item(props) {
    const { id, title, description, photo } = props;
    const navigate = useNavigate(); 
  
    return (
      <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
        <div className={styles.item__imagem}>
          <img src={photo} alt={title} />
        </div>
        <div className={styles.item__descricao}>
          <div className={styles.item__titulo}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <TagsPrato {...props} />
        </div>
      </div>
    );
  }
  
  export default Item;