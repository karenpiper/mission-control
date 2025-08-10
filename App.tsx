import React, { useState } from 'react';
import HomeDashboard from './src/HomeDashboard';
import { BrandGuidelines } from './components/BrandGuidelines';

type AppView = 'home' | 'guidelines';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeDashboard />;
      case 'guidelines':
        return <BrandGuidelines />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="App">
      {/* App Switcher */}
      <div className="fixed top-4 left-4 z-50 flex space-x-2">
        <button
          onClick={() => setCurrentView('home')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentView === 'home'
              ? 'bg-pair-01-bg-100 text-white'
              : 'bg-white text-neutral-text-dark hover:bg-gray-100'
          }`}
        >
          Home Dashboard
        </button>
        <button
          onClick={() => setCurrentView('guidelines')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentView === 'guidelines'
              ? 'bg-pair-01-bg-100 text-white'
              : 'bg-white text-neutral-text-dark hover:bg-gray-100'
          }`}
        >
          Brand Guidelines
        </button>
      </div>

      {renderView()}
    </div>
  );
}

export default App;