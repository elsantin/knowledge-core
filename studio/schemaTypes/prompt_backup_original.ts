import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'prompt',
  title: 'Prompt Creativo',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Prompt',
      type: 'string',
      validation: Rule => Rule.required().warning('El título es esencial para la organización.')
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Personas IA Técnicas', value: 'personas-tecnicas'},
          {title: 'Personas IA Creativas', value: 'personas-creativas'},
          {title: 'Filtros de Estilo', value: 'filtros-estilo'},
          {title: 'Protocolos y Sistemas', value: 'protocolos-sistemas'},
          {title: 'Herramientas Especializadas', value: 'herramientas-especializadas'},
          {title: 'Personas IA Estratégicas', value: 'personas-estrategicas'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido del Prompt',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required().warning('El contenido principal del prompt no puede estar vacío.')
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Palabras clave para búsquedas avanzadas'
    }),
    defineField({
      name: 'fechaCreacion',
      title: 'Fecha de Creación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }),
    defineField({
      name: 'activo',
      title: 'Activo',
      type: 'boolean',
      initialValue: true,
      description: 'Determina si el prompt aparece en el frontend'
    })
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria'
    }
  }
})
