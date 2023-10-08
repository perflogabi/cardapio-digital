import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';



  function Filtros({ filtro, setFiltro, filtros }) {
    function selecionarFiltro(opcao) {
      if (filtro === opcao.id) return setFiltro(null);
      return setFiltro(opcao.id);
    }
  
    return (
      <div className={styles.filtros}>
        {filtros.map(opcao => (
          <button
            className={classNames({
              [styles.filtros__filtro]: true,
              [styles['filtros__filtro--ativo']]: filtro === opcao.id,
            })}
            key={opcao.id}
            onClick={() => selecionarFiltro(opcao)}
          >
            {opcao.label}
          </button>
        ))}
      </div>
    );
  }
  
  export default Filtros;