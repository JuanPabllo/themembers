import styled from "styled-components";
import user from "../../data/user.json";

export const ButtonElement = styled.button`
  width: 100%;
  border-radius: 5px;
  background: ${user.color};
  color: #fff;
  font-size: 0.85rem;
  text-align: center;
  margin: 5px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 7px;
  transition: 0.3s ease;
  border: 1px solid transparent;
`;
