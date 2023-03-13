import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4AB63D;
    border-radius: 10px;
    position: relative;
    top: -7.5vh;
    left: 10%;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 3em;
`;

export const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: ;
`;

export const Botao = styled.button`
    background: #FF7A00;
    border: #FF7A00;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    color: white;
    margin-top: 1.8em;
    &:hover{
        color: black;
    }
`;