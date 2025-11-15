// src/stores/navigationStore.ts
import { atom } from 'nanostores';

// Id section
export const activeSection = atom('home');

// Feature section only for security
export const activeFeature = atom<string | null>(null);