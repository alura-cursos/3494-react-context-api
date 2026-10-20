import Menu from "./Menu";
import Logo from "./Logo";
import BotaoTogglerMenu from "./BotaoTogglerMenu";
import BotaoCarrinho from "./BotaoCarrinho";
import CampoTexto from "@/components/CampoTexto";
import Botao from "@/components/Botao";

import { useLocation } from "react-router-dom";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const BarraNavegacao = () => {
  const location = useLocation();
  const ehAPaginaCarrinho = location.pathname === "/carrinho";
  const { quantidade } = useCarrinhoContext();

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid custom-margin">
          <Logo />
          <div className="d-flex flex-row-reverse">
            <BotaoTogglerMenu />
            <BotaoCarrinho
              className={`d-md-none ${ehAPaginaCarrinho && "d-none"}`}
              quantidadeProdutos={quantidade}
            />
          </div>
          <div className="collapse navbar-collapse" id="conteudoBarraNavegacao">
            <Menu />
            <form className="d-flex" role="search">
              <CampoTexto
                className="me-2"
                type="search"
                placeholder="Digite o nome do produto"
                aria-label="Pesquisar"
              />
              <Botao type="submit">Pesquisar</Botao>
            </form>
            <BotaoCarrinho
              className={`d-none d-md-block ${
                ehAPaginaCarrinho && "d-md-none"
              }`}
              quantidadeProdutos={quantidade}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BarraNavegacao;
