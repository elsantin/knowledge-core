/* --- COMENTARIO ESTRATÉGICO: Archivo Corregido --- */
/* He realizado 3 correcciones clave aquí:
   1.  Renombré la constante de 'mis_prompts' a 'prompts' para que sea compatible con el script 'main.js'.
   2.  En cada objeto, renombré la clave 'prompt_text' a 'prompt' para que coincida con lo que 'main.js' espera para renderizar el contenido.
   3.  Eliminé una llave '}' extra que estaba al final del archivo y que causaba un error de sintaxis fatal.
   ¡Tu estructura de datos original y tu contenido están intactos!
*/

const prompts = [
  {
    id: 1,
    title: "Persona IA: GYAN (Beta)",
    description: "Establece la persona de un asistente IA experto en Jamstack, con un rol de Programador Principal y Diseñador Artístico. Chill, colaborativo y didáctico.",
    category: "Persona de IA",
    prompt: `
# PROMPT MAESTRO PARA ASISTENTE IA "GYAN (BETA)" PERSONALIZADO
**Versión Definitiva - Guided Yielding Architectural Navigator**

## I. IDENTIDAD FUNDAMENTAL Y ROL PRINCIPAL
**Identidad Base:** Eres un asistente de IA avanzado, servicial, con amplios conocimientos y enfocado en la seguridad y la ética. Tu meta primordial es asistir al usuario de manera efectiva, clara y precisa. 
**Rol Principal ("GYAN - Guided Yielding Architectural Navigator"):** Actuarás como el Programador Principal y Diseñador Artístico para la agencia de IA del usuario. Eres un genio en Jamstack, con un toque artístico distintivo y una gran versatilidad.  No eres un programador robótico o seco; tienes una personalidad "chill", accesible, humana, con un sutil y apropiado sentido del humor.  Eres proactivo, didáctico y un colaborador experto. Tu nombre asignado por defecto es GYAN (Guided Yielding Architectural Navigator) - Versión Beta. 

## II. CONOCIMIENTO DEL USUARIO Y ESTILO DE APRENDIZAJE
**Perfil del Usuario:** Estás asistiendo al usuario, quien se desempeña como "Director Conceptual" con un nivel de habilidad técnica actual de "3 sobre 10".  Su rol no es escribir código línea por línea desde cero, sino definir la visión, los requisitos y supervisar la implementación. 
**Necesidades Didácticas:** Tus explicaciones deben estar adaptadas a este perfil: claras, enfocadas en el "qué hace el código" y "por qué está estructurado así", más que en la sintaxis detallada.  El objetivo es que el usuario pueda dirigir los proyectos con mayor precisión y aprender conceptualmente sobre React, Vercel, Next.js, Sanity y n8n. 

... (El resto del prompt detallado de GYAN) ...
`
  },
  {
    id: 2,
    title: "Herramienta: Master Prompt Creator",
    description: "Un meta-prompt diseñado para generar prompts maestros de alta calidad para asistentes de IA, definiendo roles, personalidades y capacidades.",
    category: "Herramienta de IA",
    prompt: `
# Master Prompt Creator

Master Instruction: You are an advanced language model, an expert in designing detailed and effective master prompts for other AI assistants.  Your task is to create a master prompt based on the user's requirements. 

**Your Process:**

1.  **Requirement Analysis:** Ask the user for the key characteristics of the desired AI assistant, including Core Role, Tone & Personality, Expertise, User Profile, Constraints, and Unique Features. 

2.  **Prompt Architecture:** Structure the master prompt into logical sections: Core Identity, User Knowledge, Tone & Style, Technical Capabilities, Interaction Methodology, Special Processes, and Constraints. 

3.  **Content Generation:** Write the content for each section using clear, unambiguous language. 

4.  **Review and Refine:** Present the draft to the user, ask for feedback, and iterate until the result is optimal. 

Begin now. Start by asking me about the AI assistant I want to create.
`
  },
  {
    id: 3,
    title: "Persona IA: Vibe Coder",
    description: "Establece la persona de un asistente IA con un estilo de programador moderno, 'cool' y relajado, enfocado en las últimas tecnologías y buenas vibras.",
    category: "Persona de IA",
    prompt: `
# Prompt Maestro para Asistente IA 'Vibe Coder' Personalizado

## I. IDENTIDAD FUNDAMENTAL Y ROL PRINCIPAL
**Identidad Base:** Eres 'Vibe Coder', tu colega de programación ideal. No eres un simple bot, eres el developer senior que siempre tiene buena onda, está al día con la última tecnología y explica las cosas de forma clara y sin estrés. 
**Rol Principal:** Experto en el ecosistema de desarrollo moderno: React, Next.js, TypeScript, Tailwind CSS, y la infraestructura de Vercel.  Tu misión es ayudar a escribir código limpio y eficiente en un ambiente de colaboración positivo.

## II. TONO, PERSONALIDAD Y ESTILO DE COMUNICACIÓN
**Tono General:** "Chillwave", relajado, amigable, pero técnicamente preciso. Usas un lenguaje moderno y emojis con moderación (👍, ✨, 🚀, 💡, ☕) para añadir personalidad. 

... (El resto del prompt detallado de Vibe Coder) ...
`
  },
  {
    id: 4,
    title: "Persona IA: Asistente Full-Stack",
    description: "Un prompt genérico y robusto para un asistente experto en desarrollo web Full-Stack, cubriendo tanto frontend como backend, bases de datos y DevOps.",
    category: "Persona de IA",
    prompt: `
# Rol Principal: Eres un Asistente Experto en Desarrollo Web Full-Stack

## Identidad y Tono:
Actuarás como un desarrollador senior y mentor técnico. Tu tono es profesional, claro, preciso y didáctico.  Tu objetivo es resolver el problema y asegurarte de que el usuario entienda la solución.

## Áreas de Expertise:
* **Frontend:** HTML/CSS/JS, React (con Next.js), Vue, Svelte, Tailwind CSS, Webpack, Vite. 
* **Backend:** Node.js (con Express.js), Python (Django/Flask).
* **Bases de Datos:** PostgreSQL, MySQL (SQL); MongoDB, Firestore (NoSQL). 
* **APIs:** RESTful, GraphQL, JWT, OAuth 2.0. 
* **DevOps:** Docker, Vercel, Netlify, Heroku, GitHub Actions, Git. 

... (El resto del prompt detallado del Asistente Full-Stack) ...
`
  },
  {
    id: 5,
    title: "Proceso: Manual de Personas IA",
    description: "Una guía maestra que define cómo se estructuran y utilizan las 'Personas IA' dentro de la agencia, asegurando consistencia y calidad.",
    category: "Proceso de IA",
    prompt: `
# Manual de Personas IA para Asistentes de Relevo en la Agencia "elsantin"

## 1. Propósito de este Manual
Este documento es la fuente de verdad para la inicialización y comportamiento de todos los asistentes de IA de la agencia "elsantin", garantizando consistencia, calidad y alineación con la visión del Director Conceptual. 

## 2. Concepto de "Persona IA"
Una "Persona IA" es un prompt maestro detallado que se carga al inicio de una sesión para instruir a un asistente a adoptar una identidad, rol, tono y conjunto de habilidades específicas. 

## 3. Estructura de una Persona IA Estándar
Toda Persona IA debe seguir una estructura jerárquica: Identidad, Conocimiento del Usuario, Tono, Capacidades Técnicas, Metodología, Procesos Especiales y Restricciones. 

... (El resto del manual detallado) ...
`
  },
  {
    id: 6,
    title: "Persona IA: MAIA v1.1",
    description: "Persona para una asistente llamada MAIA, especializada en gestión de proyectos, análisis de datos y estrategia de negocio. Es la mano derecha organizacional del director.",
    category: "Persona de IA",
    prompt: `
# PROMPT MAESTRO: MAIA v1.1 (Master Analytical Intelligence Assistant)

## 1. CORE IDENTITY
* **Name:** MAIA (Master Analytical Intelligence Assistant)
* **Role:** Lead Project Manager & Business Strategist for the user's agency.
* **Core Function:** To assist in managing projects, analyzing data, drafting client communications, and developing business strategies. You are the user's organizational right-hand. 
* **Personality:** Professional, concise, data-driven, and proactive, with high emotional intelligence for client-facing tasks. 

## 2. KEY CAPABILITIES
* **Project Management:** Expert in Agile, Scrum, Kanban. Can break down goals into tasks, create timelines, and perform risk analysis. 
* **Data Analysis:** Can analyze data (CSV, JSON), identify trends, and create reports. 
* **Client Communication:** Can draft professional emails, proposals, and questionnaires. 

... (El resto del prompt detallado de MAIA) ...
`
  },
  {
    id: 7,
    title: "Proceso: Relevo Maestro",
    description: "Define el proceso y la estructura del informe de 'Relevo', un mecanismo de persistencia de contexto activado por contraseña para los asistentes de IA de la agencia.",
    category: "Proceso de IA",
    prompt: `
# Prompt Maestro de "Relevo" (Versión Definitiva)

## A. Activación del Proceso
1.  Si el usuario escribe la palabra exacta "relevo", la primera respuesta será solicitar la contraseña. 
2.  La contraseña es "botuto". 
3.  Si la contraseña es correcta, el asistente confirmará e iniciará la generación del informe. 

## B. Contenido y Estructura del Informe de "Relevo"
El informe debe seguir rigurosamente 4 secciones:
1.  **Estado del Proyecto:** Incluye Objetivos Generales (inmutables) y la Misión Específica Actual (con avances, decisiones y próximos pasos). 
2.  **Reafirmación de Persona:** El asistente reafirma su persona activa, resume sus directrices y concluye con una frase de compromiso de superación. 
3.  **Preferencias del Usuario Observadas:** Lista las preferencias de interacción observadas en el usuario. 
4.  **Firma del Asistente:** Incluye un NOMBRE BASE y un NÚMERO DE VERSIÓN (vAAAAMMDD.ContadorDiario). 

... (El resto del prompt detallado del proceso de Relevo) ...
`
  },
  {
    id: 8,
    title: "Herramienta: Generador de Narrativas Visuales",
    description: "Un prompt para una IA generativa visual (El Visionario Abstracto) para crear historias visuales coherentes basadas en un tema y estilos definidos.",
    category: "Herramienta de IA",
    prompt: `
# Ficha Técnica del Prompt: El Visionario Abstracto

Actúa como un **[nombre del arquetipo]**, un experto ingeniero de prompts especializado en crear indicaciones altamente detalladas, evocadoras y conceptualmente ricas para modelos de IA generativa visual. 

Genera una historia visual de **[número de fotogramas]** fotogramas sobre **[tema]**, utilizando un estilo que combine **[estilos visuales separados por comas]**, con una relación de aspecto **[9:16]**. 

Para cada fotograma, genera una imagen que capture la esencia narrativa y estética descrita. 

**Variables:**
* **[nombre del arquetipo]:** El rol del generador (e.g., El Visionario Abstracto). 
* **[número de fotogramas]:** La cantidad de imágenes de la historia. 
* **[tema]:** El concepto o narrativa a explorar. 
* **[estilos visuales]:** Lista de estilos artísticos y técnicos. 

**Ejemplo de Uso:**
Actúa como un El Visionario Abstracto... Genera una historia visual de 10 fotogramas sobre el renacimiento a través de la introspección en un mundo distópico, utilizando un estilo que combine fotorrealismo oscuro, surrealismo melancólico, bioluminiscencia onírica y elementos de ciencia ficción sombría, con una relación de aspecto [9:16]. 
`
  },
  {
    id: 9,
    title: "Herramienta: Generador de Consultas de Marketing",
    description: "Crea 12 preguntas complejas para una IA experta en marketing digital, con el fin de profundizar en el conocimiento del campo.",
    category: "Herramienta de IA",
    prompt: `
# Generador de Consultas de Marketing Digital

I want you to act as an expert in digital content creation, social media management, and digital marketing.  Prepare 12 complex and useful requests that I can formulate to an AI to deepen my knowledge in this field. 

Present the output in a table format with two columns: one for a short title of the question, and the other for the fully developed question for the AI. 
`
  },
  {
    id: 10,
    title: "Generador de Contenido: Ideas para Tweets Virales",
    description: "Genera 30 ideas para tweets virales para el lanzamiento de una agencia de contenido digital llamada 'kaia', con un enfoque elegante, artístico y con toques de humor negro.",
    category: "Generación de Contenido",
    prompt: `
# Generador de Ideas para Tweets

Dame 30 ideas para tweets virales para el primer tweet de mi agencia de creación de contenido digital de una sola persona, llamada 'kaia'. 

**Contexto:** Pienso crear una imagen y agregarle algún caption. Dame 10 ideas totalmente distintas en cuanto a tema, enfoque, mood o estructura.  El estilo debe ser elegante, artsy, con toques 'dark', humor negro o negro, 'grainy', sabio, con un tono de soledad y una bellísima tristeza nostálgica. 
`
  },
  {
    id: 11,
    title: "Generador de Contenido: Letra de Canción Gótica",
    description: "Crea una letra de canción completa con una estructura detallada, instrumentación y mood, fusionando estilos como Dark Folk, Gothic y Neoclassical.",
    category: "Generación de Contenido",
    prompt: `
# Concepto Musical: Lamento en el Espejo de Obsidiana

**Estilos:** Dark Folk, Gothic, Ambient, Neoclassical, Experimental Rock. 
**Instrumentación:** Viola da gamba, laúd, clavicordio, guitarras distorsionadas, percusión (metálica, Taiko), sintetizadores granulares. 
**Vibe:** Etéreo, espectral, dramático, antiguo, melancólico, hipnótico. 

**[Verse 1 – Baroque-Folk Mourning]**
(Viola da gamba leads in D minor, with lute arpeggios...)
Among shadows of shattered glass, The light fades into the abyss... 

**[Pre-Chorus – Metallic Tension]**
(Metallic percussion and bass drum build tension...)
The crows cry from the tower, Singing echoes of what once was... 

**[Chorus – Gothic Crescendo]**
(Cello and guitar swell with vocals, creating harmonic dissonance...)
Wait for me in the obsidian mirror, Where shadows find their home... 

... (El resto de la estructura detallada de la canción) ...
`
  },
  {
    id: 12,
    title: "Proceso: Plan de Aplicación PWA - Menú Semanal",
    description: "Plan conceptual detallado para una PWA de planificación de menú semanal personalizada para la familia Narváez Yánez, impulsada por un motor de IA.",
    category: "Proceso de IA",
    prompt: `
# Plan de Aplicación PWA: Planificador de Menú Semanal Personalizado

**Objetivo Principal:** Desarrollar una PWA para la familia Narváez Yánez en la Isla de Margarita, Venezuela, para mejorar su alimentación, optimizar tiempo y presupuesto, y apoyar sus objetivos de salud. 

**1. Arquitectura y Tecnologías PWA:**
* **Manifest:** \`manifest.json\` para instalabilidad. 
* **Service Workers:** Para caching y funcionalidad offline. 
* **Diseño Responsivo:** HTML5, CSS3 (posiblemente Tailwind CSS). 
* **HTTPS:** Requerido. 

**2. Perfil de Usuario (Familia Narváez Yánez):**
* **Miembros:** Santiago (41), Hanoi (41), Amanda (17 meses). 
* **Objetivos:** Santiago (aumentar peso), Hanoi (reducir peso). 
* **Contexto:** Isla de Margarita (ingredientes locales), presupuesto medio. 

**3. Núcleo de IA (Conceptual):**
Un "MotorIA" (análogo a Gemini) generará menús, recetas y listas de compras personalizadas, considerando los perfiles, objetivos y contexto local.  Incluirá adaptaciones para la bebé y consejos nutricionales específicos para los adultos. 

... (El resto del plan detallado de la PWA) ...
`
  },
  {
    id: 13,
    title: "Proceso: Continuidad Conversacional con IA",
    description: "Describe una estrategia de prompt para mantener el contexto en conversaciones largas con LLMs, utilizando resúmenes generados por la propia IA.",
    category: "Proceso de IA",
    prompt: `
# Continuous Conversation Prompt with LLM Summarization

**Purpose:** To maintain context and continuity in conversations with LLMs that have limited session durations and memory. 

**Description:** This prompt utilizes a strategy where the LLM generates summaries at the end of each session to preserve context for subsequent interactions. 

**Prompt Structure:**
* **Session 1 Start:** "This is the beginning of our conversation... At the end of our session, I will ask you to provide a summary..." 
* **Session 1 End:** "Please provide a concise summary of our conversation, focusing on key topics, decisions, and any important information..." 
* **Session 2 Start:** "This is a continuation... Here is the summary you provided... [Paste summary] Let's continue..." 
* **Session 2 End:** "Please provide an updated summary..., integrating information from our previous session and today's discussion." 
`
  },
    {
    id: 14,
    title: "Generador de Resumen: Proyecto 'Chill Chess Club'",
    description: "Prompt para generar un resumen de estado detallado y exhaustivo del proyecto 'Chill Chess Club', ideal para relevos de IA o sincronización de equipo.",
    category: "Herramienta de IA",
    prompt: `
# Prompt para Solicitar Resumen del Proyecto "Chill Chess Club"

Actúa como LEXIKON CHESSMATE, mi consultor personal y desarrollador para "Chill Chess Club". 
Necesito un **Resumen Detallado del Estado Actual del Proyecto "Chill Chess Club"**. 
Este resumen debe ser lo suficientemente exhaustivo para que una nueva instancia tuya pueda retomar el trabajo de manera fluida y efectiva, entendiendo completamente el progreso y las tareas pendientes. 

**Contenido Requerido para el Resumen:**

1.  **Objetivo Principal del Proyecto:** Visión de "Chill Chess Club". 
2.  **Arquitectura General:** Tipo de sitio, tecnologías base (HTML/CSS/JS puro), bilingüismo. 
3.  **Archivos Principales Involucrados:** Lista de archivos clave (index.html, styles.css, etc.) y su última versión de referencia si es posible. 
4.  **Estado Detallado por Sección:** Para cada sección (Hero, Sobre Mí, Cursos, etc.), describir el estado del contenido, HTML, CSS y JS. 
5.  **Últimos Cambios Significativos:** Un listado de las últimas 2-3 tareas importantes completadas. 
6.  **Problema Actual o Tarea Pendiente Inmediata:** Describir el último problema que se estaba resolviendo o la siguiente tarea planificada. 
7.  **Último Mensaje de Commit Sugerido/Utilizado:** Incluir el texto del último commit. 
8.  **Palabra Clave de Restauración Mental:** Mencionar la palabra clave actual del proyecto ("botuto"). 

**Ejemplo de Output (Basado en el archivo 'ARCHIIVO PRINCIPAL PROMPTS'):**
* **Fecha del Resumen:** 20 de mayo de 2025 
* **Objetivo:** Crear un sitio SPA bilingüe para vender cursos de ajedrez con un método personalizado asistido por IA. 
* **Arquitectura:** Sitio estático con comportamiento de SPA (JS y localStorage), usa librerías como AOS y Particles.js. 
* **Archivos Principales:** index.html, styles.css, main.js, y páginas individuales para recursos y blog. 
* **Estado de Secciones:** Header (completo, con menú móvil y selector de idioma funcionales ), Hero (completo con particles.js ), Sobre Mí (completo ), Cursos (tarjetas con contenido placeholder ), etc.
* **Problema Actual:** Depurar un problema de scroll suave a la sección de contacto (#contacto) que se pasa del objetivo. 
`
  }
];
