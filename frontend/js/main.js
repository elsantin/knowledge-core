document.addEventListener('DOMContentLoaded', () => {

    // --- COMENTARIO ESTRATÉGICO: Aquí buscamos el ID del HTML ---
    const mainContainer = document.getElementById('santuario-container');
    
    // Esta condición es la que lanza el error si no encuentra el contenedor o los datos.
    if (!mainContainer || typeof prompts === 'undefined' || !Array.isArray(prompts)) {
        console.error("Error: Contenedor o datos de prompts no encontrados.");
        return;
    }

    // 1. Agrupar Prompts por Categoría
    const groupedPrompts = prompts.reduce((acc, prompt) => {
        const category = prompt.category || 'General';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(prompt);
        return acc;
    }, {});

    // 2. Renderizar Sección por Sección
    for (const categoryName in groupedPrompts) {
        
        const section = document.createElement('section');
        section.className = 'prompt-section';

        const header = document.createElement('h2');
        header.className = 'section-header';
        header.textContent = categoryName;
        
        const gridContainer = document.createElement('div');
        gridContainer.className = 'prompt-grid';

        const categoryPrompts = groupedPrompts[categoryName];
        categoryPrompts.forEach(promptData => {
            const card = document.createElement('div');
            card.className = 'prompt-card';

            const title = document.createElement('h2');
            title.textContent = promptData.title;

            const description = document.createElement('p');
            description.className = 'prompt-description';
            description.textContent = promptData.description;

            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copiar Prompt';

            copyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(promptData.prompt).then(() => {
                    copyButton.textContent = '¡Copiado!';
                    setTimeout(() => { copyButton.textContent = 'Copiar Prompt'; }, 2000);
                }).catch(err => { console.error('Error al copiar: ', err); });
            });

            card.append(title, description, copyButton);
            gridContainer.append(card);
        });

        section.append(header, gridContainer);
        mainContainer.append(section);
    }
});
