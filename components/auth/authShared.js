import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  border: 1px solid rgba(219, 219, 219, 0.8);
  padding: 15px 7px;
  margin-bottom: 8px;
  border-radius: 4px;
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;
