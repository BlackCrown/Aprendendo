// Lembre-se de importar o styled component e fazer sua instalação pelo NPM
/* npm install styled-components */
import styled from 'styled-components';
//Faça instalação tbm do plugin do VScode, para ter autocomplet no seu código
/* vscode-styled-components */

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: tomato;
// `;

// const App = () => {
//   return (
//     <div>
//       <Title>Título principal</Title>
//     </div>
//   );
// };

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;
const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    // O seu código CSS será invocado como um componente, como demonstrado abaixo...
    <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco>R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  );
};

/* #Region PROPS */
//Usando Javascript podem ser feitas alterações no seu css, com uso de ternarios, ifs e outros codigos Javascript
// const Preco = styled.p`
//   background: ${(props) => props.cor};
//   color: white;
//   display: inline-block;
//   border-radius: 5px;
//   padding: 0.5rem;
//   `;

//   const App = () => {
//     function template(value, total) {
//       console.log(value);
//       console.log(total);
//     }
//     const total = 10;
//     template`São ${total} no total`;

//     return (
//       <div>
//         <Preco cor="#53d956">R$ 2999</Preco>
//         <Preco cor="#84e">R$ 1999</Preco>
//       </div>
//     );
//   };
/* #EndRegion PROPS */

/* #Region State*/
//Pode ser feito uso também de States, definições de estado para uso no CSS através do Javascript como demonstrado abaixo
// import styled from 'styled-components';

// const Button = styled.button`
//   background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
//   border: 1px solid black;
//   font-size: 1rem;
//   padding: 0.5rem;
//   border-radius: 4px;
//   color: white;
//   cursor: pointer;
// `;

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);

//   return (
//     <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
//       Ativar
//     </Button>
//   );
// };
/* #EndRegion State*/

/* #Region Pseudo*/
//O uso de pseudo elements é feito com & seguido do pseudo e seu código entre {}
// const Comprar = styled.button`
// font-size: 1.5em;
// background: transparent;
// padding: 0.5rem;
// border-radius: 4px;
// border: 2px solid black;
// cursor: pointer;
// position: relative;
// &:hover {
//   background: black;
//   color: white;
// }
// &::before {
//   display: block;
//   content: '';
//   width: 16px;
//   height: 16px;
//   border-radius: 50%;
//   position: absolute;
//   background: #53d956;
//   top: -8px;
//   right: -8px;
// }
// `;
/* #EndRegion */
