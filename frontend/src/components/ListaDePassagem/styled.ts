import styled from "styled-components";

export const LiPassagem = styled.li`
    border: 2px solid #4AB63D;
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin: 1em;
    padding: 2em;
    border-radius: 10px;
`;

export const LiLegenda = styled.li`
    background:  #4AB63D;
    color: white;
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin: 1em;
    padding: 1em;
    padding-right: 7.5%;
    border-radius: 10px;
    font-weight: bold;
`;

export const ItemPassagem = styled.div`
    width: 20%;
    height: 1em;
    display: flex;
    justify-content: center;
    align-content: center;
    /* border: 1px solid grey; */
`;

export const ItemLegenda = styled.div`
    width: 20%;
    height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BotaoReserva = styled.button`
    background: #4AB63D;
    border: none;
    border-radius: 5px;
    color: white;
    &:hover{
        color: black;
    }
`;