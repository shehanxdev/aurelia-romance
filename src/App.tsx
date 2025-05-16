import './App.css';

import { Navbar } from '@components';
import { Home } from '@pages';

function App() {
  return (
    <div className="">
      {/* <ReactLenis
        options={{
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          autoRaf: true,
        }}
      > */}
      <Navbar />

      <Home />
      {/* </ReactLenis> */}
    </div>
  );
}

export default App;
