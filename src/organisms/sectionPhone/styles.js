import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .container {
    color: #fff;
    background: #3aa3e0;

    p {
      margin: 0;
      padding: 10px;

      font-size: 14px;
    }
  }

  @media only screen and (min-width: 1px) and(max-width: 840px) {
    background: red;

    .p {
      color: red;
      font-size: 7px;
    }
  }
`;
