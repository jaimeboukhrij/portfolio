// App.jsx
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegation from './Navegation';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import { useEffect, useRef, useState } from 'react';
import { SectionObserver, SectionObserverContext } from './Observer';
import Section4 from './Section4';

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  return (
    <div className="App">
      <Navegation activeSection={activeSection} />

      <SectionObserver activeSection={activeSection} setActiveSection={setActiveSection}>
        <div id="section1">
          <Section1 />
        </div>

        <div id="section2">
          <Section2 />
        </div>

        <div id="section3">
          <Section3 />
        </div>

        <div id="section4">
          <Section4 />
        </div>
      </SectionObserver>
    </div>
  );
}

export default App;
