import React from 'react';
import { 
  Home, 
  Lightbulb, 
  Clipboard, 
  Wrench, 
  Bot, 
  Settings, 
  Search, 
  FileText, 
  Grid3X3, 
  Play,
  Thermometer,
  Shield,
  Zap,
  ChevronRight,
  AlertTriangle,
  Clock,
  Plus
} from 'lucide-react';

const HomeDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-neutral-border px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-neutral-text-dark">Home Mission Control</h1>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <Search size={20} />
            <span>Search</span>
          </button>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <FileText size={20} />
            <span>Guidelines</span>
          </button>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <Grid3X3 size={20} />
            <span>Motif System</span>
          </button>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <Play size={20} />
            <span>Live App</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-neutral-canvas-dark text-white p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Mission Control</h2>
            <p className="text-gray-300 text-sm">Motif system demo</p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">NAVIGATION</h3>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 bg-pair-01-bg-100 text-white px-3 py-2 rounded-lg">
                <Home size={20} />
                <span>Home Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <Lightbulb size={20} />
                <span>My Rooms</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <Clipboard size={20} />
                <span>Tasks & Care</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <Wrench size={20} />
                <span>Fix & Repair</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <Bot size={20} />
                <span>AI Helper</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <Settings size={20} />
                <span>Systems</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg">
                <FileText size={20} />
                <span>Documents</span>
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Current Color Pair</h3>
            <div className="flex space-x-2 mb-2">
              <button className="w-8 h-8 bg-pair-01-bg-100 rounded border-2 border-white"></button>
              <button className="w-8 h-8 bg-white rounded border-2 border-gray-300"></button>
            </div>
            <p className="text-xs text-gray-300">Dark colors are primary, light colors for accents</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <section className="bg-pair-01-bg-100 text-white rounded-xl p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <Home size={48} />
                <div>
                  <h2 className="text-4xl font-bold">Welcome Home</h2>
                  <p className="text-xl text-gray-200">Your sanctuary, perfectly maintained</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">
                  <Search size={20} />
                  <span>Change View</span>
                </button>
                <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            {/* Hero Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Thermometer size={32} className="mx-auto mb-2" />
                <div className="text-3xl font-bold">72°F</div>
                <div className="text-sm text-gray-200">Optimal temperature</div>
              </div>
              <div className="text-center">
                <Shield size={32} className="mx-auto mb-2" />
                <div className="text-3xl font-bold">Secure</div>
                <div className="text-sm text-gray-200">All systems active</div>
              </div>
              <div className="text-center">
                <Zap size={32} className="mx-auto mb-2" />
                <div className="text-3xl font-bold">94%</div>
                <div className="text-sm text-gray-200">Energy optimized</div>
              </div>
            </div>
          </section>

          {/* Motif System Demo */}
          <section className="bg-white rounded-xl p-6 mb-8 border border-neutral-border">
            <h3 className="text-xl font-semibold text-center mb-4">Motif System Demonstration</h3>
            <p className="text-center text-gray-600 mb-4">
              You're viewing the <strong>Welcome Home</strong> section using <strong>section-home</strong> color pair. 
              The "Welcome Home" hero section above uses the <strong>dark color as primary background</strong> with pure white text, 
              and the <strong>light color for accent text</strong>. Dark colors are now primary, light colors are accents.
            </p>
            <div className="flex justify-center space-x-2 mb-3">
              <button className="w-8 h-8 bg-pair-01-bg-100 rounded border-2 border-white"></button>
              <button className="w-8 h-8 bg-white rounded border-2 border-gray-300"></button>
            </div>
            <p className="text-center text-sm text-gray-500 mb-4">
              Switch sections in the sidebar to see different color pairs in action
            </p>
            <div className="text-center text-xs text-gray-400">
              <div>Current: section-home</div>
              <div>Dark Primary: var(--section-home-bg)</div>
              <div>Light Accent: var(--section-home-bg-deep)</div>
            </div>
          </section>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-l-4 border-pair-01-bg-100">
              <div className="flex items-center space-x-3 mb-3">
                <Zap size={24} className="text-pair-01-bg-100" />
                <span className="text-sm text-gray-500">Energy Efficiency</span>
              </div>
              <div className="text-3xl font-bold text-neutral-text-dark mb-2">85%</div>
              <div className="text-sm text-green-600 mb-3">+5% from last month ↗</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-pair-01-bg-100">
              <div className="flex items-center space-x-3 mb-3">
                <Wrench size={24} className="text-pair-01-bg-100" />
                <span className="text-sm text-gray-500">Repair Budget</span>
              </div>
              <div className="text-3xl font-bold text-neutral-text-dark mb-2">$682</div>
              <div className="text-sm text-gray-600 mb-3">of $1200 allocated</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '57%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-pair-01-bg-100">
              <div className="flex items-center space-x-3 mb-3">
                <Wrench size={24} className="text-pair-01-bg-100" />
                <span className="text-sm text-gray-500">Recent Repairs</span>
              </div>
              <div className="text-3xl font-bold text-neutral-text-dark mb-2">2</div>
              <div className="text-sm text-gray-600 mb-3">repairs completed</div>
              <button className="bg-pair-01-bg-100 text-white px-4 py-2 rounded-lg text-sm hover:bg-pair-01-bg-200">
                View All
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-pair-01-bg-100">
              <div className="flex items-center space-x-3 mb-3">
                <FileText size={24} className="text-pair-01-bg-100" />
                <span className="text-sm text-gray-500">Documents</span>
              </div>
              <div className="text-3xl font-bold text-neutral-text-dark mb-2">2</div>
              <div className="text-sm text-gray-600 mb-3">expiring soon</div>
              <button className="bg-pair-01-bg-100 text-white px-4 py-2 rounded-lg text-sm hover:bg-pair-01-bg-200">
                + Add New
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Priority Tasks */}
            <div className="col-span-2 bg-white rounded-xl border border-neutral-border">
              <div className="bg-pair-01-bg-100 text-white px-6 py-4 rounded-t-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Priority Tasks</h3>
                    <p className="text-sm text-gray-200">Items requiring your attention</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle size={20} className="text-red-500" />
                    <div>
                      <div className="font-semibold text-neutral-text-dark">Replace HVAC Filter</div>
                      <div className="text-sm text-gray-600">Due for quarterly maintenance • Due 11/7/2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">High</span>
                    <button className="bg-pair-01-bg-100 text-white px-4 py-2 rounded-lg text-sm hover:bg-pair-01-bg-200">
                      Fix Now
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-orange-500" />
                    <div>
                      <div className="font-semibold text-neutral-text-dark">Test Smoke Detectors</div>
                      <div className="text-sm text-gray-600">Monthly safety check • Due 2/9/2026</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Medium</span>
                    <button className="bg-pair-01-bg-100 text-white px-4 py-2 rounded-lg text-sm hover:bg-pair-01-bg-200">
                      Fix Now
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-orange-500" />
                    <div>
                      <div className="font-semibold text-neutral-text-dark">Water Heater Inspection</div>
                      <div className="text-sm text-gray-600">Annual inspection due • Due Soon</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Medium</span>
                    <button className="bg-pair-01-bg-100 text-white px-4 py-2 rounded-lg text-sm hover:bg-pair-01-bg-200">
                      Fix Now
                    </button>
                  </div>
                </div>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-neutral-text-dark py-3 rounded-lg font-medium">
                  View All Tasks
                </button>
              </div>
            </div>

            {/* My Rooms */}
            <div className="bg-white rounded-xl border border-neutral-border">
              <div className="bg-pair-01-bg-100 text-white px-6 py-4 rounded-t-xl">
                <div className="flex items-center space-x-3">
                  <Lightbulb size={20} />
                  <h3 className="text-lg font-semibold">My Rooms</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-neutral-text-dark">Living Room</div>
                    <div className="text-sm text-gray-600">8 devices connected</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">72°F</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-neutral-text-dark">Kitchen</div>
                    <div className="text-sm text-gray-600">12 devices connected</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">74°F</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-neutral-text-dark">Master Bedroom</div>
                    <div className="text-sm text-gray-600">6 devices connected</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">69°F</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Helper Section */}
          <div className="mt-8 bg-pair-01-bg-100 text-white rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <Bot size={48} />
              <div>
                <h3 className="text-2xl font-bold">AI Helper</h3>
                <p className="text-lg text-gray-200">Get intelligent recommendations for your home</p>
              </div>
            </div>
            <button className="bg-white text-pair-01-bg-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Ask AI Assistant
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard; 