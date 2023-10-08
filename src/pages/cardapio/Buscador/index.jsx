import React from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

export default function Buscador({ busca, setBusca }) {
    return (
      <div className={styles.buscador}>
        <input
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder="Buscar"
        />
        <CgSearch size={20} color="#4C4D5E" />
      </div>
    );
  }