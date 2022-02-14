import styled from 'styled-components';
import { SharedButton } from '@redesign-research/shared/button';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <header>
        <h1>Majoo CMS</h1>
        <SharedButton>Penjualan</SharedButton>
      </header>
    </StyledApp>
  );
}

export default App;
