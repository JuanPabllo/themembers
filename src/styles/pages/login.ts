import styled from "styled-components";
import user from "../../data/user.json";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${user.background});
  background-repeat: no-repeat;
  background-size: cover;

  .buy-now {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 100px;
  }

  img {
    width: 65px;
    position: absolute;
    top: 10px;
  }

  .content {
    width: 100%;
    max-width: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    a {
      width: 100%;
      color: #707070;
      font-size: 12px;
      text-align: end;
      margin: 4px 0 8px 0;
    }

    span {
      font-size: 9px;
      margin-top: 4px;
      font-weight: 500;
      color: #707070;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      top: 40px;
    }
  }

  @media screen and (min-width: 600px) {
    .content {
      max-width: 335px;
    }
  }
`;
