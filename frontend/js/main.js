document.addEventListener("DOMContentLoaded", async () => {
  console.log("🚀 Knowledge Core Frontend iniciado");

  const mainContainer = document.getElementById("santuario-container");

  // Configuración Sanity
  const SANITY_PROJECT_ID = "jmk551ev";
  const SANITY_DATASET = "production";
  const SANITY_API_VERSION = "2023-05-03";

  async function fetchPromptsFromSanity() {
    try {
      const query = `*[_type == "prompt"]{
                _id,
                title,
                description,
                category,
                promptContent
            }`;

      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(
        query
      )}`;

      console.log("🔗 Conectando con Sanity API...");
      console.log("📡 URL de conexión:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      console.log("✅ Respuesta de Sanity recibida");
      console.log(
        "📊 Intelligence Artifacts encontrados:",
        data.result?.length || 0
      );

      return data.result || [];
    } catch (error) {
      console.error("❌ Error conectando con Sanity:", error);
      console.error(
        "🔧 Verifica: 1) Dataset público, 2) CORS configurado, 3) Project ID correcto"
      );
      return [];
    }
  }

  // Verificar contenedor
  if (!mainContainer) {
    console.error("❌ Contenedor #santuario-container no encontrado en HTML");
    return;
  }

  console.log("🔄 Obteniendo Intelligence Artifacts...");
  const sanityPrompts = await fetchPromptsFromSanity();

  // Transformar datos
  const prompts = sanityPrompts.map((item) => ({
    id: item._id,
    title: item.title || "Sin título",
    description: item.description || "Sin descripción",
    category: item.category || "General",
    prompt: item.promptContent || "Contenido no disponible",
  }));

  console.log("🎯 Artifacts procesados para renderizado:", prompts.length);

  if (prompts.length === 0) {
    console.warn("⚠️ No se encontraron Intelligence Artifacts");
    mainContainer.innerHTML =
      '<p style="color: #bb86fc; text-align: center; padding: 2rem;">No se encontraron Intelligence Artifacts. Verifica tu conexión con Sanity.</p>';
    return;
  }

  // Limpiar contenedor
  mainContainer.innerHTML = "";

  // Agrupar por categoría
  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(prompt);
    return acc;
  }, {});

  console.log("📁 Categorías encontradas:", Object.keys(groupedPrompts));

  // Renderizar secciones
  for (const categoryName in groupedPrompts) {
    const section = document.createElement("section");
    section.className = "prompt-section";

    const header = document.createElement("h2");
    header.className = "section-header";
    header.textContent = categoryName;

    const gridContainer = document.createElement("div");
    gridContainer.className = "prompt-grid";

    groupedPrompts[categoryName].forEach((promptData) => {
      const card = document.createElement("div");
      card.className = "prompt-card";

      const title = document.createElement("h2");
      title.textContent = promptData.title;

      const description = document.createElement("p");
      description.className = "prompt-description";
      description.textContent = promptData.description;

      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.textContent = "Copiar Prompt";

      copyButton.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard
          .writeText(promptData.prompt)
          .then(() => {
            copyButton.textContent = "¡Copiado!";
            setTimeout(() => (copyButton.textContent = "Copiar Prompt"), 2000);
          })
          .catch((err) => {
            console.error("Error al copiar:", err);
          });
      });

      card.append(title, description, copyButton);
      gridContainer.append(card);
    });

    section.append(header, gridContainer);
    mainContainer.append(section);
  }

  console.log(
    "✅ Knowledge Core cargado exitosamente - Frontend conectado a Sanity"
  );
});
