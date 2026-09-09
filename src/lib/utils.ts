import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlatformLabel(platform: string): string {
  const labels: Record<string, string> = {
    revit: 'Autodesk Revit',
    autocad: 'Autodesk AutoCAD',
    multi: 'Multi-Platform',
  };
  return labels[platform] ?? platform;
}

export function getPlatformColor(platform: string): string {
  const colors: Record<string, string> = {
    revit: 'text-blue-400 bg-blue-950/50 border-blue-800/50',
    autocad: 'text-cyan-400 bg-cyan-950/50 border-cyan-800/50',
    multi: 'text-green-400 bg-green-950/50 border-green-800/50',
  };
  return colors[platform] ?? 'text-slate-400 bg-slate-900/50 border-slate-700/50';
}
