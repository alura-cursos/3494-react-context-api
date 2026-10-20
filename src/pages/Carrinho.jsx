import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Titulo from "@/components/Titulo";
import Sumario from "@/components/Sumario";
import ListaProdutosCarrinho from "@/components/ListaProdutosCarrinho";
import BannerCarrinho from "@/components/BannerCarrinho";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const Carrinho = () => {
  const { carrinho, valorTotal, quantidade } = useCarrinhoContext();

  return (
    <>
      <BarraNavegacao />
      <BannerCarrinho />
      <main className="container-xxl">
        <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
          Carrinho de Compras
        </Titulo>
        <section className="secao__compra text-light mx-md-4 mx-xl-4">
          <div className="conteudo mb-5">
            <div className="detalhe__compra bg-black p-4">
              <Titulo className="text-center fw-bold mb-3 text-md-start">
                Detalhes da compra
              </Titulo>
              <ListaProdutosCarrinho carrinho={carrinho} />
            </div>
            <Sumario
              valorTotalCarrinho={valorTotal}
              quantidadeProdutos={quantidade}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Carrinho;
