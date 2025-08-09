import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { 
  Home, 
  CheckCircle2, 
  Wrench, 
  Bot, 
  Settings, 
  FileText, 
  Users,
  User,
  Thermometer,
  Lightbulb,
  Shield,
  Battery,
  Droplets,
  Wind,
  Camera,
  Plus,
  Search,
  Bell,
  Menu,
  X,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  colorScheme: 'section-home' | 'section-rooms' | 'section-maintenance' | 'section-repairs' | 'section-assistant' | 'section-systems' | 'section-documents';
}

interface TaskItem {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  category: string;
}

interface RoomData {
  id: string;
  name: string;
  temperature: number;
  status: 'optimal' | 'needs-attention' | 'critical';
  devices: number;
  image: string;
}

const navigationItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Home Dashboard',
    icon: <Home className="w-5 h-5" />,
    colorScheme: 'section-home' // Pink ↔ Magenta (Pair-04)
  },
  {
    id: 'rooms',
    label: 'My Rooms',
    icon: <Thermometer className="w-5 h-5" />,
    colorScheme: 'section-rooms' // Lilac ↔ Purple (Pair-03)
  },
  {
    id: 'tasks',
    label: 'Tasks & Care',
    icon: <CheckCircle2 className="w-5 h-5" />,
    colorScheme: 'section-maintenance' // Lime ↔ Deep Teal (Pair-01)
  },
  {
    id: 'repair',
    label: 'Fix & Repair',
    icon: <Wrench className="w-5 h-5" />,
    colorScheme: 'section-repairs' // Sand ↔ Orange (Pair-06)
  },
  {
    id: 'ai',
    label: 'AI Helper',
    icon: <Bot className="w-5 h-5" />,
    colorScheme: 'section-assistant' // Pink ↔ Magenta (Pair-04)
  },
  {
    id: 'systems',
    label: 'Systems',
    icon: <Settings className="w-5 h-5" />,
    colorScheme: 'section-systems' // Aqua ↔ Navy (Pair-02)
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="w-5 h-5" />,
    colorScheme: 'section-documents' // Yellow ↔ Amber (Pair-07)
  }
];

const mockTasks: TaskItem[] = [
  {
    id: '1',
    title: 'Replace HVAC Filter',
    description: 'Due for quarterly maintenance',
    priority: 'high',
    dueDate: '11/7/2025',
    status: 'pending',
    category: 'Maintenance'
  },
  {
    id: '2',
    title: 'Test Smoke Detectors',
    description: 'Monthly safety check',
    priority: 'medium',
    dueDate: '2/9/2026',
    status: 'pending',
    category: 'Safety'
  },
  {
    id: '3',
    title: 'Water Heater Inspection',
    description: 'Annual inspection due',
    priority: 'medium',
    dueDate: 'Due Soon',
    status: 'in-progress',
    category: 'Inspection'
  }
];

const mockRooms: RoomData[] = [
  {
    id: '1',
    name: 'Living Room',
    temperature: 72,
    status: 'optimal',
    devices: 8,
    image: 'living-room'
  },
  {
    id: '2',
    name: 'Kitchen',
    temperature: 74,
    status: 'optimal',
    devices: 12,
    image: 'kitchen'
  },
  {
    id: '3',
    name: 'Master Bedroom',
    temperature: 69,
    status: 'needs-attention',
    devices: 6,
    image: 'bedroom'
  }
];

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void; activeItem: string; onItemClick: (id: string) => void }> = ({ 
  isOpen, 
  onClose, 
  activeItem, 
  onItemClick 
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:z-0
      `}
      style={{ 
        backgroundColor: 'var(--neutral-canvas-light)',
        borderRight: '1px solid rgba(26, 26, 26, 0.1)'
      }}
      >
        <div className="p-6" style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-xl font-medium" style={{ color: 'var(--neutral-text-dark)' }}>Mission Control</h1>
              <p className="text-sm" style={{ color: 'var(--neutral-text-dark)', opacity: 0.6 }}>Motif system demo</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide px-3 pb-2" style={{ color: 'var(--neutral-text-dark)', opacity: 0.6 }}>Navigation</p>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onItemClick(item.id);
                  onClose(); // Close mobile menu when item is clicked
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group
                  ${activeItem === item.id 
                    ? `text-white shadow-lg` 
                    : 'hover:bg-gray-100'
                  }
                `}
                style={activeItem === item.id ? {
                  backgroundColor: `var(--${item.colorScheme}-bg)`,
                  color: 'white'
                } : {
                  color: 'var(--neutral-text-dark)'
                }}
              >
                <span style={{
                  color: activeItem === item.id ? 'white' : 'var(--neutral-text-dark)',
                  opacity: activeItem === item.id ? 1 : 0.6
                }}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
        
        {/* Active Color Pair Display */}
        <div className="m-4 mt-8">
          <div className="card-light">
            <h4 className="heading-h3 text-neutral-text-dark mb-3">Current Color Pair</h4>
            <div className="flex gap-2 mb-3">
              <div 
                className="flex-1 h-8 rounded flex items-center justify-center"
                style={{ 
                  backgroundColor: `var(--${navigationItems.find(item => item.id === activeItem)?.colorScheme || 'section-home'}-bg)`
                }}
              >
                <span className="text-white text-xs font-medium">Light</span>
              </div>
              <div 
                className="flex-1 h-8 rounded flex items-center justify-center"
                style={{ 
                  backgroundColor: `var(--${navigationItems.find(item => item.id === activeItem)?.colorScheme || 'section-home'}-bg-deep)`
                }}
              >
                <span className="text-white text-xs font-medium">Deep</span>
              </div>
            </div>
            <p className="body-s text-neutral-text-dark opacity-70 text-center">
              Click sections above to see color pairs change
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const renderSectionContent = (activeSection: string, colorScheme: string) => {
  const sectionTitles = {
    dashboard: { title: "Welcome Home", subtitle: "Your sanctuary, perfectly maintained", icon: <Home className="w-8 h-8" /> },
    rooms: { title: "My Rooms", subtitle: "Climate and comfort control", icon: <Thermometer className="w-8 h-8" /> },
    tasks: { title: "Tasks & Care", subtitle: "Maintenance schedule and tracking", icon: <CheckCircle2 className="w-8 h-8" /> },
    repair: { title: "Fix & Repair", subtitle: "Work log and repair tracking", icon: <Wrench className="w-8 h-8" /> },
    ai: { title: "AI Helper", subtitle: "Intelligent home recommendations", icon: <Bot className="w-8 h-8" /> },
    systems: { title: "Systems", subtitle: "Appliances and infrastructure", icon: <Settings className="w-8 h-8" /> },
    documents: { title: "Documents", subtitle: "Warranties and manuals", icon: <FileText className="w-8 h-8" /> }
  };

  const currentSection = sectionTitles[activeSection as keyof typeof sectionTitles] || sectionTitles.dashboard;

  return (
    <>
      {/* Hero Section - Light color background with WHITE TEXT */}
      <div 
        className="rounded-2xl p-8 relative overflow-hidden mb-6"
        style={{ 
          backgroundColor: `var(--${colorScheme}-bg)`,
          color: '#FFFFFF'
        }}
      >
        <div className="relative z-10" style={{ color: '#FFFFFF' }}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `var(--${colorScheme}-bg-deep)` }}
              >
                <span style={{ color: `var(--${colorScheme}-bg)` }}>
                  {currentSection.icon}
                </span>
              </div>
              <div>
                <h1 className="display-xl font-display mb-2" style={{ color: '#FFFFFF' }}>{currentSection.title}</h1>
                <p className="title-m" style={{ color: '#FFFFFF', opacity: 0.9 }}>{currentSection.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                className="hover:opacity-90"
                style={{
                  backgroundColor: `var(--${colorScheme}-bg-deep)`,
                  color: '#FFFFFF'
                }}
              >
                <Camera className="w-4 h-4 mr-2" />
                Change View
              </Button>
              <Button 
                variant="outline" 
                className="hover:opacity-90"
                style={{ 
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent'
                }}
              >
                Settings
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className="rounded-lg p-4" 
              style={{ 
                backgroundColor: `var(--${colorScheme}-bg-deep)`,
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Thermometer className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                <span className="body-m font-medium">Climate</span>
              </div>
              <p className="heading-h1 font-bold">72°F</p>
              <p className="body-s" style={{ color: '#FFFFFF', opacity: 0.8 }}>Optimal temperature</p>
            </div>
            <div 
              className="rounded-lg p-4" 
              style={{ 
                backgroundColor: `var(--${colorScheme}-bg-deep)`,
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                <span className="body-m font-medium">Security</span>
              </div>
              <p className="heading-h1 font-bold">Secure</p>
              <p className="body-s" style={{ color: '#FFFFFF', opacity: 0.8 }}>All systems active</p>
            </div>
            <div 
              className="rounded-lg p-4" 
              style={{ 
                backgroundColor: `var(--${colorScheme}-bg-deep)`,
                color: '#FFFFFF'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                <span className="body-m font-medium">Efficiency</span>
              </div>
              <p className="heading-h1 font-bold">94%</p>
              <p className="body-s" style={{ color: '#FFFFFF', opacity: 0.8 }}>Energy optimized</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Demonstration Card */}
      <div className="card-light mb-6">
        <div className="text-center">
          <h2 className="heading-h2 text-neutral-text-dark mb-4">Motif System Demonstration</h2>
          <p className="body-m text-neutral-text-dark mb-6">
            You're viewing the <strong>{currentSection.title}</strong> section using <strong>{colorScheme}</strong> color pair.
            The "{currentSection.title}" hero section above uses both motif colors with <strong>pure white text</strong> for maximum contrast and readability. The site header and content cards use neutral colors with strategic color accents.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `var(--${colorScheme}-bg)` }}
            >
              <span className="text-white font-bold text-xs">Light</span>
            </div>
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `var(--${colorScheme}-bg-deep)` }}
            >
              <span className="text-white font-bold text-xs">Deep</span>
            </div>
          </div>
          <p className="body-s text-neutral-text-dark opacity-70 mb-4">
            Switch sections in the sidebar to see different color pairs in action
          </p>
          <div className="bg-gray-100 p-3 rounded text-left">
            <p className="mono-code-s text-neutral-text-dark mb-1">
              Current: <span className="font-bold">{colorScheme}</span>
            </p>
            <p className="mono-code-s text-neutral-text-dark">
              CSS Var: <span className="font-bold">var(--{colorScheme}-bg)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardContent: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  // Get the current section's color scheme
  const currentNav = navigationItems.find(item => item.id === activeSection) || navigationItems[0];
  const colorScheme = currentNav.colorScheme;
  
  return (
    <div 
      className="min-h-screen relative"
      style={{ 
        backgroundColor: 'var(--neutral-canvas-light)',
        color: 'var(--neutral-text-dark)'
      }}
    >
      <div className="relative z-10 p-6 space-y-6">
        {renderSectionContent(activeSection, colorScheme)}

        {/* Quick Stats Grid - Enhanced with Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Energy Efficiency Card */}
          <div className="card-light relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: `var(--${colorScheme}-bg)` }}
            />
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb 
                className="w-6 h-6" 
                style={{ color: `var(--${colorScheme}-bg)` }}
              />
              <span className="label-s uppercase tracking-wide text-neutral-text-dark">
                Energy Efficiency
              </span>
            </div>
            <div className="heading-h1 font-display font-bold mb-2 text-neutral-text-dark">
              85%
            </div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp 
                className="w-4 h-4" 
                style={{ color: `var(--${colorScheme}-bg)` }}
              />
              <p className="body-s text-neutral-text-dark">
                +5% from last month
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full" 
                style={{ 
                  width: '85%', 
                  backgroundColor: `var(--${colorScheme}-bg)` 
                }}
              />
            </div>
          </div>

          {/* Budget Card */}
          <div className="card-light relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: `var(--${colorScheme}-bg)` }}
            />
            <div className="flex items-center gap-2 mb-4">
              <Users 
                className="w-6 h-6" 
                style={{ color: `var(--${colorScheme}-bg)` }}
              />
              <span className="label-s uppercase tracking-wide text-neutral-text-dark">
                Repair Budget
              </span>
            </div>
            <div className="heading-h1 font-display font-bold mb-2 text-neutral-text-dark">
              $682
            </div>
            <p className="body-s text-neutral-text-dark mb-3">
              of $1200 allocated
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full" 
                style={{ 
                  width: '57%', 
                  backgroundColor: `var(--${colorScheme}-bg)` 
                }}
              />
            </div>
          </div>

          {/* Recent Repairs */}
          <div className="card-light relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: `var(--${colorScheme}-bg)` }}
            />
            <div className="flex items-center gap-2 mb-4">
              <Wrench 
                className="w-6 h-6" 
                style={{ color: `var(--${colorScheme}-bg)` }}
              />
              <span className="label-s uppercase tracking-wide text-neutral-text-dark">
                Recent Repairs
              </span>
            </div>
            <div className="heading-h1 font-display font-bold mb-2 text-neutral-text-dark">
              2
            </div>
            <p className="body-s text-neutral-text-dark mb-4">
              repairs completed
            </p>
            <button
              className="w-full py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: `var(--${colorScheme}-bg)`,
                color: '#FFFFFF'
              }}
            >
              View All
            </button>
          </div>

          {/* Documents */}
          <div className="card-light relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-1 h-full"
              style={{ backgroundColor: `var(--${colorScheme}-bg)` }}
            />
            <div className="flex items-center gap-2 mb-4">
              <FileText 
                className="w-6 h-6" 
                style={{ color: `var(--${colorScheme}-bg)` }}
              />
              <span className="label-s uppercase tracking-wide text-neutral-text-dark">
                Documents
              </span>
            </div>
            <div className="heading-h1 font-display font-bold mb-2 text-neutral-text-dark">
              2
            </div>
            <p className="body-s text-neutral-text-dark mb-4">
              expiring soon
            </p>
            <button
              className="w-full py-2 rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{
                backgroundColor: `var(--${colorScheme}-bg)`,
                color: '#FFFFFF'
              }}
            >
              <Plus className="w-4 h-4" />
              Add New
            </button>
          </div>
        </div>

        {/* Main Content Grid - Enhanced with Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Priority Tasks */}
          <div className="lg:col-span-2">
            <div className="card-light h-full">
              {/* Section Header with Color */}
              <div 
                className="rounded-lg p-4 mb-6"
                style={{ 
                  backgroundColor: `var(--${colorScheme}-bg)`,
                  color: '#FFFFFF'
                }}
              >
                <h2 className="heading-h2 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  Priority Tasks
                </h2>
                <p className="body-s" style={{ color: '#FFFFFF', opacity: 0.9 }}>Items requiring your attention</p>
              </div>
              
              <div className="space-y-4">
                {mockTasks.map((task, index) => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4" style={{
                    borderLeftColor: index === 0 ? `var(--${colorScheme}-bg)` : 'transparent'
                  }}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {task.status === 'in-progress' ? (
                          <Clock className="w-4 h-4" style={{ color: `var(--${colorScheme}-bg)` }} />
                        ) : task.priority === 'high' ? (
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-gray-400" />
                        )}
                        <h4 className="body-m font-medium text-neutral-text-dark">{task.title}</h4>
                      </div>
                      <p className="body-s text-neutral-text-dark opacity-70">{task.description} • Due {task.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        className={`
                          text-neutral-text-dark border
                          ${task.priority === 'high' ? 'bg-red-100 border-red-200' : 
                            task.priority === 'medium' ? 'bg-orange-100 border-orange-200' : 
                            'bg-blue-100 border-blue-200'}
                        `}
                      >
                        {task.priority === 'high' ? 'High' : task.priority === 'medium' ? 'Medium' : 'Low'}
                      </Badge>
                      <button
                        className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: `var(--${colorScheme}-bg)`,
                          color: '#FFFFFF'
                        }}
                      >
                        Fix Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-neutral-text-dark text-neutral-text-light" variant="outline">
                View All Tasks
              </Button>
            </div>
          </div>

          {/* Room Status */}
          <div className="space-y-6">
            <div className="card-light">
              {/* Section Header with Color */}
              <div 
                className="rounded-lg p-4 mb-6"
                style={{ 
                  backgroundColor: `var(--${colorScheme}-bg)`,
                  color: '#FFFFFF'
                }}
              >
                <h2 className="heading-h2 flex items-center gap-2">
                  <Thermometer className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  My Rooms
                </h2>
              </div>
              
              <div className="space-y-3">
                {mockRooms.map((room, index) => (
                  <div key={room.id} className="p-3 bg-gray-50 rounded-lg border-l-4" style={{
                    borderLeftColor: room.status === 'optimal' ? `var(--${colorScheme}-bg)` : 
                                   room.status === 'needs-attention' ? '#FF8A3D' : '#FF5555'
                  }}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="body-m font-medium text-neutral-text-dark">{room.name}</h4>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ 
                            backgroundColor: room.status === 'optimal' ? `var(--${colorScheme}-bg)` : 
                                           room.status === 'needs-attention' ? '#FF8A3D' : '#FF5555'
                          }}
                        />
                        <Badge 
                          className="text-neutral-text-dark border bg-white"
                        >
                          {room.temperature}°F
                        </Badge>
                      </div>
                    </div>
                    <p className="body-s text-neutral-text-dark opacity-70">{room.devices} devices connected</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Helper Card - Enhanced */}
            <div 
              className="rounded-lg p-6 text-center relative overflow-hidden"
              style={{ 
                backgroundColor: `var(--${colorScheme}-bg)`,
                color: '#FFFFFF'
              }}
            >
              <Bot className="w-12 h-12 mx-auto mb-4" style={{ color: '#FFFFFF' }} />
              <h3 className="heading-h2 font-display mb-2" style={{ color: '#FFFFFF' }}>
                AI Helper
              </h3>
              <p className="body-m mb-4" style={{ color: '#FFFFFF', opacity: 0.9 }}>
                Get intelligent recommendations for your home
              </p>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: `var(--${colorScheme}-bg-deep)`,
                  color: '#FFFFFF'
                }}
              >
                Ask AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeMissionControlApp: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  // Get current section's color scheme for header
  const currentNav = navigationItems.find(item => item.id === activeSection) || navigationItems[0];
  const currentColorScheme = currentNav.colorScheme;

  return (
    <div className="min-h-screen bg-neutral-canvas-light">
      {/* Top Header - Enhanced with Color Accents */}
      <div 
        className="sticky top-0 z-30 backdrop-blur-sm border-b" 
        style={{ 
          backgroundColor: 'var(--neutral-canvas-light)',
          color: 'var(--neutral-text-dark)',
          borderBottomColor: 'rgba(26, 26, 26, 0.1)'
        }}
      >
        <div className="flex items-center justify-between px-4 lg:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="lg:hidden text-neutral-text-dark hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: `var(--${currentColorScheme}-bg)` }}
              >
                <Home className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <h1 
                className="font-display text-xl font-medium"
                style={{ color: 'var(--neutral-text-dark)' }}
              >
                Home Mission Control
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                  style={{ color: `var(--${currentColorScheme}-bg)` }}
                />
                <Input 
                  placeholder="Search your home..." 
                  className="pl-10 w-64 bg-white focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--neutral-canvas-light)',
                    borderColor: `var(--${currentColorScheme}-bg)`,
                    color: 'var(--neutral-text-dark)'
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
                style={{
                  backgroundColor: `var(--${currentColorScheme}-bg)`,
                  color: '#FFFFFF'
                }}
              >
                <Bell className="w-4 h-4" />
                Alerts
              </button>
              <Button 
                size="sm"
                variant="outline"
                className="border-neutral-text-dark text-neutral-text-dark hover:bg-gray-50"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
          activeItem={activeSection}
          onItemClick={setActiveSection}
        />
        
        <main className="flex-1 lg:ml-0">
          <DashboardContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
};