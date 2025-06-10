import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes' // Adjusted path to correct schemaTypes directory

export default defineConfig({
  name: 'knowledge-core',
  title: 'Knowledge Core',
  projectId: 'jmk551ev',
  dataset: 'production',

  cors: {
    credentials: true,
    origin: [
      'file://', // Para abrir HTML directamente
      'http://localhost:3000', // Desarrollo local estándar
      'http://localhost:3333', // Sanity Studio
      'http://127.0.0.1:5500', // ← CLAVE: Tu Live Server actual
      'http://localhost:5500', // Variante localhost
      'https://localhost:5500', // Variante HTTPS
    ],
  },

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
