import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prompt', // Mantenemos el identificador interno para preservar tus datos existentes
  title: 'Intelligence Artifact', // Nueva identidad visual que refleja tu visión
  type: 'document',
  icon: () => '🧠',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Nombre identificativo del artefacto',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Strategic AI Personas', value: 'strategic-ai-personas'},
          {title: 'Technical AI Personas', value: 'technical-ai-personas'},
          {title: 'Meta-Documentation', value: 'meta-documentation'},
          {title: 'Creative & Content', value: 'creative-content'},
          {title: 'Automation & Workflows', value: 'automation-workflows'},
          {title: 'Analysis & Strategy', value: 'analysis-strategy'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artifactType',
      title: 'Artifact Type',
      type: 'string',
      options: {
        list: [
          {title: 'Complete Framework', value: 'framework'},
          {title: 'Simple Prompt', value: 'simple'},
          {title: 'Strategic Blueprint', value: 'blueprint'},
          {title: 'Reusable Template', value: 'template'},
        ],
      },
      initialValue: 'simple',
    }),
    defineField({
      name: 'description',
      title: 'Quick Description',
      type: 'text',
      description: 'Descripción rápida del propósito y contexto',
    }),
    defineField({
      name: 'promptContent',
      title: 'Prompt Content',
      type: 'text',
      description: 'El contenido ejecutable del prompt (generalmente en inglés para IA)',
      validation: (Rule) => Rule.required(),
    }),
    // CAMPO CLAVE: Corazón de tu filosofía híbrida
    defineField({
      name: 'contextSpanish',
      title: 'Contexto en Español',
      type: 'text',
      description:
        'Explicación detallada, notas personales, matices o versión completa en español para máxima claridad y autenticidad personal',
    }),
    // Campos avanzados que aparecen solo para frameworks complejos
    defineField({
      name: 'variables',
      title: 'Configurable Variables',
      type: 'text',
      description: 'Variables dinámicas y configuraciones del prompt',
      hidden: ({document}) => document?.artifactType === 'simple',
    }),
    defineField({
      name: 'usageInstructions',
      title: 'Usage Instructions',
      type: 'text',
      description: 'Instrucciones paso a paso de implementación',
      hidden: ({document}) => document?.artifactType === 'simple',
    }),
    defineField({
      name: 'practicalExamples',
      title: 'Practical Examples',
      type: 'text',
      description: 'Casos de uso con contexto y resultados esperados',
      hidden: ({document}) => document?.artifactType === 'simple',
    }),
    defineField({
      name: 'tips',
      title: 'Tips & Considerations',
      type: 'text',
      description: 'Consejos, advertencias y mejores prácticas',
      hidden: ({document}) => document?.artifactType === 'simple',
    }),
    // Metadatos esenciales para organización inteligente
    defineField({
      name: 'tags',
      title: 'Strategic Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'Etiquetas para búsqueda y conexiones semánticas',
    }),
    defineField({
      name: 'effectiveness',
      title: 'Effectiveness (1-10)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(10).precision(1),
      description: 'Tu evaluación personal de efectividad del artefacto',
    }),
    defineField({
      name: 'targetAI',
      title: 'Target AI Persona',
      type: 'string',
      description: 'IA específica para la que está optimizado (opcional)',
    }),
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      initialValue: 'v1.0',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'lastUsed',
      title: 'Last Used',
      type: 'datetime',
    }),
    defineField({
      name: 'evolutionNotes',
      title: 'Evolution Notes',
      type: 'text',
      description: 'Observaciones para futuras mejoras y adaptaciones',
    }),
  ],
  preview: {
    select: {
      title: 'title', // Campo nuevo
      oldTitle: 'titulo', // Campo antiguo como respaldo
      subtitle: 'category', // Campo nuevo
      oldSubtitle: 'categoria', // Campo antiguo como respaldo
      description: 'artifactType',
      media: 'effectiveness',
    },
    prepare(selection) {
      const {title, oldTitle, subtitle, oldSubtitle, description, media} = selection
      // Usa el título disponible (nuevo o antiguo)
      const displayTitle = title || oldTitle || 'Untitled'
      const displaySubtitle = subtitle || oldSubtitle || 'No Category'

      return {
        title: displayTitle,
        subtitle: `${displaySubtitle} | ${description || 'Unknown Type'}`,
        description: `⭐ ${media || 'No evaluado'}/10`,
      }
    },
  },
  orderings: [
    {
      title: 'Most Effective',
      name: 'effectivenessDesc',
      by: [
        {field: 'effectiveness', direction: 'desc'},
        {field: 'createdAt', direction: 'desc'},
      ],
    },
    {
      title: 'Most Recent',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
    {
      title: 'By Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
  ],
})
