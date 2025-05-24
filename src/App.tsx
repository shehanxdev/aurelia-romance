import './App.css';

import { Home } from '@pages';

function App() {
  return (
    <div className="h-screen">
      {/* <ReactLenis
        options={{
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          autoRaf: true,
        }}
      > */}

      <Home />
      {/* </ReactLenis> */}
    </div>
  );
}

export default App;
