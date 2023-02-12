import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};
