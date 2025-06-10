document.addEventListener("DOMContentLoaded", async () => {
  console.log("🌴 Knowledge Core Frontend iniciado");

  const mainContainer = document.getElementById("santuario-container");

  if (!mainContainer) {
    console.error("❌ Contenedor #santuario-container no encontrado");
    return;
  }

  // === CONFIGURACIÓN DEL MODAL ===
  const promptModal = document.getElementById("promptModal");
  const modalPromptText = document.getElementById("modalPromptText");
  const modalCloseButton = document.querySelector(".modal-close-button");
  const modalCopyButton = document.getElementById("modalCopyButton");

  function openModal(title, promptContent) {
    document.querySelector(".modal-title").textContent = title;
    modalPromptText.textContent = promptContent;
    promptModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    promptModal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseButton.addEventListener("click", closeModal);
  promptModal.addEventListener("click", (e) => {
    if (e.target === promptModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && promptModal.classList.contains("show"))
      closeModal();
  });

  modalCopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(modalPromptText.textContent).then(() => {
      modalCopyButton.textContent = "¡Copiado!";
      setTimeout(() => (modalCopyButton.textContent = "Copiar Prompt"), 2000);
    });
  });

  // === GO TO TOP BUTTON ===
  const goToTopBtn = document.getElementById("goToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      goToTopBtn.classList.add("show");
    } else {
      goToTopBtn.classList.remove("show");
    }
  });

  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === CONFIGURACIÓN SANITY ===
  const SANITY_PROJECT_ID = "jmk551ev";
  const SANITY_DATASET = "production";
  const SANITY_API_VERSION = "2023-05-03";

  async function fetchPromptsFromSanity() {
    try {
      const query = `*[_type == "prompt"]{_id,title,description,category,promptContent}`;
      const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(
        query
      )}`;

      console.log("🥥 Conectando con Sanity API...");
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Respuesta tropical exitosa recibida");
      console.log(
        "📊 Intelligence Artifacts encontrados:",
        data.result?.length || 0
      );

      return data.result || [];
    } catch (error) {
      console.error("❌ Error conectando con Sanity:", error);
      return [];
    }
  }

  // === PROCESAMIENTO DE DATOS ===
  console.log("🔄 Obteniendo Intelligence Artifacts...");
  const sanityPrompts = await fetchPromptsFromSanity();

  const prompts = sanityPrompts.map((item) => ({
    id: item._id,
    title: item.title || "Sin título",
    description: item.description || "Sin descripción",
    category: item.category || "General",
    prompt: item.promptContent || "Contenido no disponible",
  }));

  if (prompts.length === 0) {
    mainContainer.innerHTML =
      '<p style="color: #FFC107; text-align: center; padding: 2rem;">No se encontraron Intelligence Artifacts.</p>';
    return;
  }

  // === GENERAR NAVEGACIÓN DINÁMICA ===
  const categories = [...new Set(prompts.map((p) => p.category))];
  const navbarCategories = document.getElementById("navbarCategories");

  categories.forEach((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    const navItem = document.createElement("a");
    navItem.href = `#${categorySlug}`;
    navItem.className = "navbar-item";
    navItem.textContent = category;
    navItem.dataset.category = categorySlug;

    navbarCategories.appendChild(navItem);
  });

  // === NAVEGACIÓN ACTIVA ===
  function updateActiveNavItem() {
    const navItems = document.querySelectorAll(".navbar-item");
    const sections = document.querySelectorAll(".prompt-section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.pageYOffset >= sectionTop) {
        current = section.id;
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (
        item.dataset.category === current ||
        (current === "" && item.dataset.category === "all")
      ) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavItem);

  // === RENDERIZADO ===
  mainContainer.innerHTML = "";
  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(prompt);
    return acc;
  }, {});

  Object.keys(groupedPrompts).forEach((categoryName) => {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

    const section = document.createElement("section");
    section.className = "prompt-section";
    section.id = categorySlug;

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

      const viewButton = document.createElement("button");
      viewButton.className = "toggle-prompt-button";
      viewButton.textContent = "Ver Prompt Completo";
      viewButton.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(promptData.title, promptData.prompt);
      });

      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.textContent = "Copiar Prompt";
      copyButton.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(promptData.prompt).then(() => {
          copyButton.textContent = "¡Copiado!";
          setTimeout(() => (copyButton.textContent = "Copiar Prompt"), 2000);
        });
      });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(viewButton);
      card.appendChild(copyButton);
      gridContainer.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(gridContainer);
    mainContainer.appendChild(section);
  });

  // === FUNCIONALIDAD DE BÚSQUEDA ===
  setTimeout(() => {
    const searchInput = document.querySelector(".search-container input");

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const allCards = document.querySelectorAll(".prompt-card");
        const allSections = document.querySelectorAll(".prompt-section");

        allCards.forEach((card) => {
          const title =
            card.querySelector("h2")?.textContent.toLowerCase() || "";
          const description =
            card
              .querySelector(".prompt-description")
              ?.textContent.toLowerCase() || "";

          if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });

        allSections.forEach((section) => {
          const visibleCards = section.querySelectorAll(
            '.prompt-card:not([style*="none"])'
          );
          section.style.display = visibleCards.length > 0 ? "" : "none";
        });
      });

      console.log("✅ Búsqueda configurada correctamente");
    }
  }, 1000);

  console.log("✅ Knowledge Core cargado exitosamente");
});
