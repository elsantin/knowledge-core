document.addEventListener("DOMContentLoaded", async () => {
  console.log("🌴 Knowledge Core Frontend Tropical Iniciado");

  const mainContainer = document.getElementById("santuario-container");

  // Configuración Sanity - Verificada y confirmada
  const SANITY_PROJECT_ID = "jmk551ev";
  const SANITY_DATASET = "production";
  const SANITY_API_VERSION = "2023-05-03";

  // Función principal para obtener datos de Sanity
  async function fetchPromptsFromSanity() {
    try {
      // Query GROQ optimizado para Intelligence Artifacts
      const query = `*[_type == "prompt"]{
              _id,
              title,
              description,
              category,
              promptContent
          }`;

      // Construir URL de API de Sanity
      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(
        query
      )}`;

      console.log("🌴 Conectando con Sanity API tropical...");
      console.log("📡 URL de conexión:", url);

      const response = await fetch(url);

      // Verificación robusta de respuesta HTTP
      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();

      console.log("🥥 Respuesta tropical exitosa recibida");
      console.log(
        "🌺 Intelligence Artifacts encontrados:",
        data.result?.length || 0
      );

      return data.result || [];
    } catch (error) {
      console.error("🌺 Error tropical conectando con Sanity:", error);
      console.error("🔧 Verificaciones necesarias:");
      console.error(
        '   1) Dataset marcado como "Public read access" en sanity.io/manage'
      );
      console.error("   2) CORS configurado para http://127.0.0.1:5500");
      console.error("   3) Project ID correcto:", SANITY_PROJECT_ID);
      return [];
    }
  }

  // Verificación crítica del contenedor HTML
  if (!mainContainer) {
    console.error("❌ Contenedor #santuario-container no encontrado");
    console.error(
      '🔧 Verifica que index.html contenga: <div id="santuario-container"></div>'
    );
    return;
  }

  console.log("🔄 Iniciando obtención de Intelligence Artifacts...");

  // Obtener datos de Sanity
  const sanityPrompts = await fetchPromptsFromSanity();

  // Transformar datos al formato requerido por el frontend
  const prompts = sanityPrompts.map((item) => ({
    id: item._id,
    title: item.title || "Título no disponible",
    description: item.description || "Descripción no disponible",
    category: item.category || "General",
    prompt: item.promptContent || "Contenido no disponible",
  }));

  console.log(
    "🎯 Artifacts procesados para renderizado tropical:",
    prompts.length
  );

  // Manejo de caso sin datos
  if (prompts.length === 0) {
    console.warn("⚠️ No se encontraron Intelligence Artifacts");
    mainContainer.innerHTML = `
          <div style="text-align: center; padding: 3rem; color: var(--tropical-accent);">
              <h2 style="font-family: 'Fredoka One', cursive; font-size: 2rem; margin-bottom: 1rem;">
                  🌴 Conectando con el Santuario Tropical...
              </h2>
              <p style="font-size: 1.2rem;">
                  Verificando conexión con Sanity. Revisa la consola para detalles técnicos.
              </p>
          </div>
      `;
    return;
  }

  // Limpiar contenedor antes de renderizar
  mainContainer.innerHTML = "";

  // Agrupar Intelligence Artifacts por categoría
  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {});

  console.log(
    "🌿 Categorías tropicales detectadas:",
    Object.keys(groupedPrompts)
  );

  // Renderizado dinámico de secciones y tarjetas
  for (const categoryName in groupedPrompts) {
    // Crear sección de categoría
    const section = document.createElement("section");
    section.className = "prompt-section";

    // Header de sección con estilo tropical
    const header = document.createElement("h2");
    header.className = "section-header";
    header.textContent = categoryName;

    // Contenedor grid para tarjetas
    const gridContainer = document.createElement("div");
    gridContainer.className = "prompt-grid";

    const categoryPrompts = groupedPrompts[categoryName];

    // Renderizar cada Intelligence Artifact como tarjeta
    categoryPrompts.forEach((promptData) => {
      // Crear tarjeta principal
      const card = document.createElement("div");
      card.className = "prompt-card";

      // Título del artifact
      const title = document.createElement("h2");
      title.textContent = promptData.title;

      // Descripción del artifact
      const description = document.createElement("p");
      description.className = "prompt-description";
      description.textContent = promptData.description;

      // Botón de copia tropical
      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.textContent = "🌴 Copiar Prompt Tropical";

      // Funcionalidad de copia al portapapeles
      copyButton.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard
          .writeText(promptData.prompt)
          .then(() => {
            copyButton.textContent = "🥥 ¡Copiado Tropicalmente!";
            setTimeout(() => {
              copyButton.textContent = "🌴 Copiar Prompt Tropical";
            }, 2000);
          })
          .catch((err) => {
            console.error("🌺 Error tropical al copiar:", err);
            copyButton.textContent = "❌ Error al copiar";
            setTimeout(() => {
              copyButton.textContent = "🌴 Copiar Prompt Tropical";
            }, 2000);
          });
      });

      // Ensamblar tarjeta
      card.append(title, description, copyButton);
      gridContainer.append(card);
    });

    // Ensamblar sección completa
    section.append(header, gridContainer);
    mainContainer.append(section);
  }

  console.log("✅ Knowledge Core tropical completamente cargado");
  console.log(
    "🌴 Frontend conectado exitosamente a Sanity con estilo tropical"
  );
  console.log("🥥 Total de artifacts renderizados:", prompts.length);
});
