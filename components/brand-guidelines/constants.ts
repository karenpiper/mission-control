import { Home, Zap, Palette, Type, Grid, Layout, Component, Image, BarChart3, Shield, MessageSquare, Layers, Settings } from 'lucide-react';

export interface GuidelineSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorScheme: string;
  description: string;
}

export interface MotifDemo {
  pairNumber: string;
  lightColor: string;
  darkColor: string;
  name: string;
  sectionAssignment: string;
  role: string;
}

export const guidelineSections: GuidelineSection[] = [
  {
    id: 'cover',
    title: 'Cover & Essence',
    icon: <Home className="w-5 h-5" />,
    colorScheme: 'brand-primary',
    description: 'Brand mission, personality, and core values'
  },
  {
    id: 'logos',
    title: 'Logos',
    icon: <Zap className="w-5 h-5" />,
    colorScheme: 'info',
    description: 'Logo variants, clearspace, usage rules'
  },
  {
    id: 'color',
    title: 'Color (Pair-Locked)',
    icon: <Palette className="w-5 h-5" />,
    colorScheme: 'success',
    description: '7 fixed pairs + neutrals, strict usage rules'
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type className="w-5 h-5" />,
    colorScheme: 'highlight',
    description: 'Display, UI Sans, hierarchy, line lengths'
  },
  {
    id: 'graphic',
    title: 'Graphic Language',
    icon: <Grid className="w-5 h-5" />,
    colorScheme: 'warn',
    description: 'Motif tiles, shapes, iconography'
  },
  {
    id: 'layout',
    title: 'Layout System',
    icon: <Layout className="w-5 h-5" />,
    colorScheme: 'info',
    description: 'Grid, spacing, elevation, composition'
  },
  {
    id: 'components',
    title: 'Components',
    icon: <Component className="w-5 h-5" />,
    colorScheme: 'success',
    description: 'UI kit with motif system integration'
  },
  {
    id: 'imagery',
    title: 'Imagery & Media',
    icon: <Image className="w-5 h-5" />,
    colorScheme: 'warn',
    description: 'Photography, video, cropping guidelines'
  },
  {
    id: 'dataviz',
    title: 'Data Visualization',
    icon: <BarChart3 className="w-5 h-5" />,
    colorScheme: 'info',
    description: 'Chart palettes, legibility rules'
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: <Shield className="w-5 h-5" />,
    colorScheme: 'success',
    description: 'Contrast, focus states, inclusive design'
  },
  {
    id: 'voice',
    title: 'Voice & Tone',
    icon: <MessageSquare className="w-5 h-5" />,
    colorScheme: 'highlight',
    description: 'Writing style, microcopy, editorial'
  },
  {
    id: 'applications',
    title: 'Applications',
    icon: <Layers className="w-5 h-5" />,
    colorScheme: 'brand-primary',
    description: 'Specimen pages proving system rules'
  },
  {
    id: 'governance',
    title: 'Asset Exports & Governance',
    icon: <Settings className="w-5 h-5" />,
    colorScheme: 'danger',
    description: 'File naming, exports, change management'
  }
];

export const motifPairs: MotifDemo[] = [
  {
    pairNumber: 'Pair-01',
    lightColor: '#00B451',
    darkColor: '#005641',
    name: 'Lime ↔ Deep Teal',
    sectionAssignment: 'Maintenance',
    role: 'Preventive maintenance, schedules, completed tasks'
  },
  {
    pairNumber: 'Pair-02',
    lightColor: '#00C2FF',
    darkColor: '#0066CC',
    name: 'Aqua ↔ Navy',
    sectionAssignment: 'Systems & Appliances',
    role: 'System monitoring, appliance status, controls'
  },
  {
    pairNumber: 'Pair-03',
    lightColor: '#C084FF',
    darkColor: '#8B5CF6',
    name: 'Lilac ↔ Purple',
    sectionAssignment: 'My Rooms',
    role: 'Room management, climate control, device status'
  },
  {
    pairNumber: 'Pair-04',
    lightColor: '#FF4E9A',
    darkColor: '#E91E63',
    name: 'Pink ↔ Magenta',
    sectionAssignment: 'Dashboard/Home & Assistant',
    role: 'Primary brand, hero headlines, main dashboard'
  },
  {
    pairNumber: 'Pair-05',
    lightColor: '#FF5555',
    darkColor: '#D32F2F',
    name: 'Red ↔ Coral/Red',
    sectionAssignment: 'Emergency (overlays only)',
    role: 'Critical alerts, emergency overlays, urgent actions'
  },
  {
    pairNumber: 'Pair-06',
    lightColor: '#FF8A3D',
    darkColor: '#FF6F00',
    name: 'Sand ↔ Orange/Brown',
    sectionAssignment: 'Repairs/Work Log',
    role: 'Maintenance tasks, repair schedules, work tracking'
  },
  {
    pairNumber: 'Pair-07',
    lightColor: '#FFD836',
    darkColor: '#FFA000',
    name: 'Yellow ↔ Amber',
    sectionAssignment: 'Documents/Warranties',
    role: 'Document storage, warranty tracking, manuals'
  }
];