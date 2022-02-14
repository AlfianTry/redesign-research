import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedButtonProps {
  children: JSX.Element | string;
}

const StyledSharedButton = styled.div`
  color: white;
  background-color: #04c99e;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px;
  width: fit-content;
`;

export function SharedButton({ children }: SharedButtonProps) {
  return <StyledSharedButton>{children}</StyledSharedButton>;
}

export default SharedButton;
