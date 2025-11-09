// src/stores/navigationStore.ts
import { atom } from 'nanostores';

// Questo store conterrà l'ID della sezione visibile, es: "home"
export const activeSection = atom('home');