import App from '@pages/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app');
  console.log('ss');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
