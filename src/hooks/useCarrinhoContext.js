import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "@/reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removeProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateQuantidadeAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade },
});

export const useCarrinhoContext = () => {
  const { 
    carrinho,
    dispatch,
    quantidade, 
    valorTotal, 
  } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto));
  }

  function removerProduto(idProduto) {
    const produto = carrinho.find((item) => item.id === idProduto);

    if (produto && produto.quantidade > 1) {
        dispatch(updateQuantidadeAction(idProduto, produto.quantidade - 1));
    } else {
        dispatch(removeProdutoAction(idProduto));
    }
  }

  function removerProdutoCarrinho(idProduto) {
    dispatch(removeProdutoAction(idProduto));
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};
