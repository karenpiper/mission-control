import { Globe, Monitor, Mail, FileImage, Smartphone } from 'lucide-react';

export interface Specimen {
  id: string;
  name: string;
  colorScheme: string;
  icon: React.ReactNode;
}

export const specimens: Specimen[] = [
  { 
    id: 'hero', 
    name: 'Marketing Hero', 
    colorScheme: 'brand-primary', 
    icon: <Globe className="w-4 h-4" /> 
  },
  { 
    id: 'dashboard', 
    name: 'Product Dashboard', 
    colorScheme: 'info', 
    icon: <Monitor className="w-4 h-4" /> 
  },
  { 
    id: 'email', 
    name: 'Email Template', 
    colorScheme: 'success', 
    icon: <Mail className="w-4 h-4" /> 
  },
  { 
    id: 'social', 
    name: 'Social Media', 
    colorScheme: 'highlight', 
    icon: <FileImage className="w-4 h-4" /> 
  },
  { 
    id: 'mobile', 
    name: 'Mobile App', 
    colorScheme: 'warn', 
    icon: <Smartphone className="w-4 h-4" /> 
  }
];