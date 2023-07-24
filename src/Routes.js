import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importação de Páginas
import Home from "./pages/Home/Home";
import Empresa from "./pages/Empresa/Empresa";
import Contato from "./pages/Contato/Contato";
import Produtos from "./pages/Produtos/Produtos";
import Servicos from "./pages/Servicos/Servicos";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/empresa",
      element: <Empresa />,
    },
    {
      path: "/contato",
      element: <Contato />,
    },
    {
      path: "/produtos/inversor",
      element: (
        <Produtos
          title="Inversor de Frequência"
          desc1="A Elo Solutions é reevendedor oficial das melhores marcas de inversores de 
          frequência do mercado industrial. Trabalhamos com inversores para quaisquer tipo de aplicação."
          desc2="Os inversores de frequência são equipamentos elétricos que realizam a variação da velocidade de
          algum equipamento ligado nele, por exemplo um motor elétrico em uma aplicação de compressores. A Elo Solutions
          disponibliza quaisquer inversor de frequência para atender a sua necessidade."
          desc3="As empresas parceiras, nos fornecem inversores de todos os modelos disponíveis. Além disso,
          nossa equipe técnica lhe dará todo o suporte técnico necessário sendo ele remoto ou local."
        />
      ),
    },
    {
      path: "/produtos/iot",
      element: (
        <Produtos
          title="I.O.T"
          desc1="A Elo Solutions em parceria com a Ostern Energy, desenvolvemos uma solução ideal para sua a empresa."
          desc2="Nosso sistema I.O.T (Inthernet of things), ajudará a sua empresa a realizar todo o monitoramento
          de seus equipamentos, para que tenha uma analise mais precisa e também realizar manutenções preventivas
          para evitar qualquer tipo de defeito no futuro."
          desc3="Nosso sistema vem com 5 (cinco) dispositivos de monitoramento inseridos em painéis separados, onde
          você poderá instalar-los em sua rede elétrica, além disso você tera acesso a um dashboard feito pela nossa
          engenharia (Totalmente customizado da forma que desejas) para realizar o monitoramento a distância da sua maquina."
        />
      ),
    },
    {
      path: "/servicos/painel",
      element: (
        <Servicos
          title="Montagem de Painéis"
          desc1="Confira tudo sobre nossos painéis elétricos, feitos pela nossa Engenharia."
          desc2="Nossa Engenharia realiza todo o projeto de montagem de painel, desde a criação de diagrama elétrico,
          programação de CLP´s e IHM´s até a montagem do mesmo, fazemos isso apartir da necessidade do nosso cliente.
          Caso ja tenha um projeto elétrico, nós realizamos apenas a montagem do painél."
          desc3="Nossos painéis são enviados devidamente identificados, limpos e com a excelência que temos. utilizamos os componentes,
          de acordo com o a preferência do cliente, ou com nossos integradores, trabalhamos com diversas marcar para atendermos."
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Routes;
