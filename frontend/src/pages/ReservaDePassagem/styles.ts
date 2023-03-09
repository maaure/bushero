import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: -1.5em;
  .card-img, .card-img-bottom, .card-img-top{
    height: 10em;
  }
  .col{
    height: 4em;
  }
`;

export const ImgViagem = styled.img`
  max-width: 100%;
  height: auto;
`;