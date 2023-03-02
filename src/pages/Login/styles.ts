import styled from "styled-components";

import homeImage from "@/assets/images/home.png";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SessionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 400px;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
`;

export const BackgroundImage = styled.section`
  background-image: url(${homeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 60%;
`;
