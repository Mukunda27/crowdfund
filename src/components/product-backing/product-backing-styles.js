import styled from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 16px;
  height: 10px;
  position: relative;
  margin-bottom: 1rem;
  overflow-x: hidden;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: ${(props) => (props.backedAmt / props.total) * 100}%;
    height: 100%;
    background-color: hsl(176, 50%, 47%);
    border-radius: 16px;

    z-index: 99;
  }
`;
