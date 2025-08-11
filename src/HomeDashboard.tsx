import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Lightbulb, 
  Clipboard, 
  Wrench, 
  Bot, 
  Settings, 
  Search, 
  FileText, 
  Grid, 
  Play,
  Thermometer,
  Shield,
  Zap,
  ChevronRight,
  AlertTriangle,
  Clock,
  Plus,
  Wifi,
  Tv,
  Refrigerator,
  LightbulbIcon,
  Activity,
  Signal,
  Power,
  Droplets,
  DoorOpen,
  Filter,
  Users,
  Download,
  Upload,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

// Smart Device Types
interface SmartDevice {
  id: string;
  name: string;
  type: string;
  status: 'online' | 'offline' | 'warning';
  lastUpdate: Date;
  icon: React.ReactNode;
}

interface ThermostatDevice extends SmartDevice {
  type: 'thermostat';
  mode: 'heat' | 'cool' | 'auto' | 'off';
  ambientTemp: number;
  targetTemp: number;
  humidity: number;
}

interface WifiDevice extends SmartDevice {
  type: 'wifi';
  wanStatus: 'connected' | 'disconnected';
  clientCount: number;
  downloadSpeed: number;
  uploadSpeed: number;
}

interface SecurityDevice extends SmartDevice {
  type: 'security';
  armed: boolean;
  sensorCount: number;
  lastEvent: string;
  lastEventTime: Date;
}

interface LightDevice extends SmartDevice {
  type: 'light';
  power: boolean;
  scene: string;
  brightness: number;
}

interface TvDevice extends SmartDevice {
  type: 'tv';
  power: boolean;
  currentApp: string;
  nowPlaying: string;
}

interface FridgeDevice extends SmartDevice {
  type: 'fridge';
  online: boolean;
  fridgeTemp: number;
  freezerTemp: number;
  doorOpen: boolean;
  filterPercentage: number;
}

type DeviceUnion = ThermostatDevice | WifiDevice | SecurityDevice | LightDevice | TvDevice | FridgeDevice;

const HomeDashboard: React.FC = () => {
  const [devices, setDevices] = useState<DeviceUnion[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Initialize devices with realistic data
  useEffect(() => {
    const initialDevices: DeviceUnion[] = [
      {
        id: 'nest-thermostat',
        name: 'Google Nest Thermostat',
        type: 'thermostat',
        status: 'online',
        lastUpdate: new Date(),
        icon: <Thermometer className="w-5 h-5" />,
        mode: 'auto',
        ambientTemp: 72,
        targetTemp: 70,
        humidity: 45
      },
      {
        id: 'nest-wifi',
        name: 'Nest WiFi',
        type: 'wifi',
        status: 'online',
        lastUpdate: new Date(),
        icon: <Wifi className="w-5 h-5" />,
        wanStatus: 'connected',
        clientCount: 8,
        downloadSpeed: 245,
        uploadSpeed: 18
      },
      {
        id: 'simplisafe',
        name: 'SimpliSafe Security',
        type: 'security',
        status: 'online',
        lastUpdate: new Date(),
        icon: <Shield className="w-5 h-5" />,
        armed: true,
        sensorCount: 12,
        lastEvent: 'Motion detected - Living Room',
        lastEventTime: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
      },
      {
        id: 'philips-hue',
        name: 'Philips Hue Lights',
        type: 'light',
        status: 'online',
        lastUpdate: new Date(),
        icon: <LightbulbIcon className="w-5 h-5" />,
        power: true,
        scene: 'Cozy Evening',
        brightness: 85
      },
      {
        id: 'apple-tv',
        name: 'Apple TV',
        type: 'tv',
        status: 'online',
        lastUpdate: new Date(),
        icon: <Tv className="w-5 h-5" />,
        power: true,
        currentApp: 'Netflix',
        nowPlaying: 'Stranger Things S4'
      },
      {
        id: 'samsung-fridge',
        name: 'Samsung Smart Fridge',
        type: 'fridge',
        status: 'online',
        lastUpdate: new Date(),
        icon: <Refrigerator className="w-5 h-5" />,
        online: true,
        fridgeTemp: 37,
        freezerTemp: -2,
        doorOpen: false,
        filterPercentage: 78
      }
    ];

    setDevices(initialDevices);
  }, []);

  // Update device data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      setDevices(prevDevices => 
        prevDevices.map(device => {
          const updatedDevice = { ...device, lastUpdate: new Date() };
          
          if (device.type === 'thermostat') {
            // Simulate temperature fluctuations
            const tempChange = (Math.random() - 0.5) * 2;
            (updatedDevice as ThermostatDevice).ambientTemp = Math.max(65, Math.min(80, device.ambientTemp + tempChange));
            (updatedDevice as ThermostatDevice).humidity = Math.max(30, Math.min(70, device.humidity + (Math.random() - 0.5) * 5));
          } else if (device.type === 'wifi') {
            // Simulate network activity
            (updatedDevice as WifiDevice).clientCount = Math.max(1, Math.min(15, device.clientCount + (Math.random() > 0.7 ? 1 : 0)));
            (updatedDevice as WifiDevice).downloadSpeed = Math.max(100, Math.min(500, device.downloadSpeed + (Math.random() - 0.5) * 20));
            (updatedDevice as WifiDevice).uploadSpeed = Math.max(10, Math.min(30, device.uploadSpeed + (Math.random() - 0.5) * 5));
          } else if (device.type === 'security') {
            // Simulate security events
            if (Math.random() > 0.95) {
              (updatedDevice as SecurityDevice).lastEvent = 'Door opened - Front Door';
              (updatedDevice as SecurityDevice).lastEventTime = new Date();
            }
          } else if (device.type === 'light') {
            // Simulate light changes
            if (Math.random() > 0.8) {
              (updatedDevice as LightDevice).brightness = Math.max(0, Math.min(100, device.brightness + (Math.random() - 0.5) * 20));
            }
          } else if (device.type === 'tv') {
            // Simulate TV activity
            if (Math.random() > 0.9) {
              const apps = ['Netflix', 'Disney+', 'HBO Max', 'YouTube', 'Apple TV+'];
              (updatedDevice as TvDevice).currentApp = apps[Math.floor(Math.random() * apps.length)];
            }
          } else if (device.type === 'fridge') {
            // Simulate fridge activity
            (updatedDevice as FridgeDevice).fridgeTemp = Math.max(35, Math.min(40, device.fridgeTemp + (Math.random() - 0.5) * 1));
            (updatedDevice as FridgeDevice).freezerTemp = Math.max(-5, Math.min(2, device.freezerTemp + (Math.random() - 0.5) * 1));
            if (Math.random() > 0.98) {
              (updatedDevice as FridgeDevice).doorOpen = !device.doorOpen;
            }
          }
          
          return updatedDevice;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'offline': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-100';
      case 'offline': return 'bg-red-100';
      case 'warning': return 'bg-yellow-100';
      default: return 'bg-gray-100';
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const renderDeviceCard = (device: DeviceUnion) => {
    const baseCardClasses = "bg-white rounded-xl border border-neutral-border p-6 shadow-sm hover:shadow-md transition-shadow";
    
    return (
      <div key={device.id} className={baseCardClasses}>
        {/* Device Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${getStatusBgColor(device.status)}`}>
              {device.icon}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-text-dark">{device.name}</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${device.status === 'online' ? 'bg-green-500' : device.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                <span className={`text-sm ${getStatusColor(device.status)}`}>
                  {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-neutral-text-light">Last Update</div>
            <div className="text-sm font-mono text-neutral-text-dark">{formatTime(device.lastUpdate)}</div>
          </div>
        </div>

        {/* Device Specific Content */}
        <div className="space-y-3">
          {device.type === 'thermostat' && (
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pair-01-bg-100">{device.ambientTemp}°</div>
                <div className="text-xs text-neutral-text-light">Current</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-text-dark">{device.targetTemp}°</div>
                <div className="text-xs text-neutral-text-light">Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{device.humidity}%</div>
                <div className="text-xs text-neutral-text-light">Humidity</div>
              </div>
              <div className="col-span-3 text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-canvas-dark text-white rounded-full text-sm">
                  <span>Mode: {device.mode}</span>
                </div>
              </div>
            </div>
          )}

          {device.type === 'wifi' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">WAN Status</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${device.wanStatus === 'connected' ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm font-medium">{device.wanStatus}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-pair-01-bg-100">{device.clientCount}</div>
                  <div className="text-xs text-neutral-text-light">Clients</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-500">{device.downloadSpeed}</div>
                  <div className="text-xs text-neutral-text-light">Mbps ↓</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-500">{device.uploadSpeed}</div>
                  <div className="text-xs text-neutral-text-light">Mbps ↑</div>
                </div>
              </div>
            </div>
          )}

          {device.type === 'security' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">Armed</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${device.armed ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {device.armed ? 'ARMED' : 'DISARMED'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pair-01-bg-100">{device.sensorCount}</div>
                <div className="text-xs text-neutral-text-light">Sensors Active</div>
              </div>
              <div className="bg-neutral-canvas-light rounded-lg p-3">
                <div className="text-xs text-neutral-text-light mb-1">Last Event</div>
                <div className="text-sm font-medium text-neutral-text-dark">{device.lastEvent}</div>
                <div className="text-xs text-neutral-text-light mt-1">
                  {device.lastEventTime.toLocaleTimeString()}
                </div>
              </div>
            </div>
          )}

          {device.type === 'light' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">Power</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${device.power ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {device.power ? 'ON' : 'OFF'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pair-01-bg-100">{device.brightness}%</div>
                <div className="text-xs text-neutral-text-light">Brightness</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-neutral-text-dark">{device.scene}</div>
                <div className="text-xs text-neutral-text-light">Current Scene</div>
              </div>
            </div>
          )}

          {device.type === 'tv' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">Power</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${device.power ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {device.power ? 'ON' : 'OFF'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-pair-01-bg-100">{device.currentApp}</div>
                <div className="text-xs text-neutral-text-light">Current App</div>
              </div>
              {device.power && (
                <div className="bg-neutral-canvas-light rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-neutral-text-dark">{device.nowPlaying}</div>
                  <div className="text-xs text-neutral-text-light">Now Playing</div>
                </div>
              )}
            </div>
          )}

          {device.type === 'fridge' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">Online</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${device.online ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {device.online ? 'ONLINE' : 'OFFLINE'}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-blue-500">{device.fridgeTemp}°</div>
                  <div className="text-xs text-neutral-text-light">Fridge</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-cyan-500">{device.freezerTemp}°</div>
                  <div className="text-xs text-neutral-text-light">Freezer</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-text-light">Door</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${device.doorOpen ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {device.doorOpen ? 'OPEN' : 'CLOSED'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-pair-01-bg-100">{device.filterPercentage}%</div>
                <div className="text-xs text-neutral-text-light">Filter Life</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-neutral-border px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-neutral-text-dark">Home Mission Control</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-neutral-text-light">
            <Clock size={16} />
            <span className="text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
          </div>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <Search size={20} />
            <span>Search</span>
          </button>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <FileText size={20} />
            <span>Guidelines</span>
          </button>
          <button className="flex items-center space-x-2 text-neutral-text-dark hover:text-pair-01-bg-100">
            <Grid size={20} />
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
            <h2 className="text-lg font-semibold mb-4">Smart Home</h2>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-pair-01-bg-100 text-white">
                <Home size={20} />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-neutral-canvas-light hover:text-neutral-text-dark transition-colors">
                <Lightbulb size={20} />
                <span>Devices</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-neutral-canvas-light hover:text-neutral-text-dark transition-colors">
                <Clipboard size={20} />
                <span>Automations</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-neutral-canvas-light hover:text-neutral-text-dark transition-colors">
                <Wrench size={20} />
                <span>Maintenance</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-neutral-canvas-light hover:text-neutral-text-dark transition-colors">
                <Bot size={20} />
                <span>AI Assistant</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-neutral-canvas-light hover:text-neutral-text-dark transition-colors">
                <Settings size={20} />
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <section className="bg-pair-01-bg-100 text-white rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome Home</h2>
                <p className="text-pair-01-bg-50 text-lg">Your smart devices are running smoothly</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">{devices.filter(d => d.status === 'online').length}</div>
                <div className="text-pair-01-bg-50">Devices Online</div>
              </div>
            </div>
          </section>

          {/* Smart Devices Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-text-dark">Smart Devices</h2>
              <div className="flex items-center space-x-2 text-sm text-neutral-text-light">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Live Updates Every 3s</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map(renderDeviceCard)}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-neutral-border p-6">
            <h3 className="text-lg font-semibold text-neutral-text-dark mb-4">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-4">
              <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-neutral-border hover:border-pair-01-bg-100 hover:bg-pair-01-bg-50 transition-colors">
                <Zap className="w-6 h-6 text-pair-01-bg-100" />
                <span className="text-sm font-medium">All Lights On</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-neutral-border hover:border-pair-01-bg-100 hover:bg-pair-01-bg-50 transition-colors">
                <Shield className="w-6 h-6 text-pair-01-bg-100" />
                <span className="text-sm font-medium">Arm Security</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-neutral-border hover:border-pair-01-bg-100 hover:bg-pair-01-bg-50 transition-colors">
                <Thermometer className="w-6 h-6 text-pair-01-bg-100" />
                <span className="text-sm font-medium">Set Away Mode</span>
              </button>
              <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-neutral-border hover:border-pair-01-bg-100 hover:bg-pair-01-bg-50 transition-colors">
                <Bot className="w-6 h-6 text-pair-01-bg-100" />
                <span className="text-sm font-medium">AI Assistant</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard; 