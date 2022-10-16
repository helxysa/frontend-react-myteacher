import {styled } from '@mui/material'

export const ListaStyled =  styled('ul')`
        list-style: none;
        width: 100%; //aqui ta falando o tamanho
        max-width: 900px; //e aqui ta dizendo que mesmo se for uma tela grande, nao vai passar de 900px
        margin: 0 auto; //isso deixa centralizado, pq a margin vai ser zero em cima e embaixo, e auto dos lados
        padding: ${(props) => props.theme.spacing(10,2,10,2)};
        
        display: grid; // a lista agora esta se comportando como grade
        grid-template-columns: 1fr 1fr; // aqui ta dizendo que vai ficar uma fraacao, eles ficam alinhados grudados um do lado do outro
        gap: ${(props) => props.theme.spacing(9)}; //aqui vai dar o espaco entre as listas

        //aqui to fazendo sem o props
        //e isso aqui é pro celular
        ${({theme}) => theme.breakpoints.down('md')} {
            grid-template-columns: 1fr;
            gap: ${(props) => props.theme.spacing(8)};

        }

`;
export const ItemStyled =  styled('li')`

        list-style: none;
`;

export const Foto = styled('img')`
    width: 100%;
    border-radius: 10px;
    

`;
export const Descricao = styled('p')`
    word-break: break-word;
`;

export const ListaVazia = styled('h2')`
    margin: 0;
    text-align: center;
    padding: ${(props) => props.theme.spacing(8)};

`;
export const Valor = styled('p')`
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
    `;

export const Informacoes = styled('div')`
`;

export const Nome  = styled('h3')`
    margin: ${(props) => props.theme.spacing(1, 0)}
   // no margin da pra colocar os valores de up, down
    //left right um atras do outro sem virgula
`;




