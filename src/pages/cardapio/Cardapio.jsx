import React from 'react'

export const Cardapio = () => {
  return (
    <div className="pizza-block">
  <img src="caminho_da_imagem_da_pizza" alt="Pizza" className="pizza-image" />
  <div className="pizza-details">
    <h3 className="pizza-title">Nome da Pizza</h3>
    <p className="pizza-ingredients">Descrição dos ingredientes</p>
    <p className="pizza-price">R$ 20,00</p>
  </div>
  <button className="add-to-cart-button">
    <span className="icon">Adicionar ao carrinho</span>
  </button>
</div>

  )
}
