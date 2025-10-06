// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu on link click
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Accordion script for "Why MindDev"
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const panel = header.nextElementSibling; // El div con la respuesta
            const arrow = header.querySelector('.accordion-arrow'); // La flecha SVG

            // 1. Alternar la clase 'active' en el header
            header.classList.toggle('active');

            // 2. Manejar la altura del panel (abrir/cerrar)
            if (panel.style.maxHeight) {
                // Si está abierto, ciérralo
                panel.style.maxHeight = null;
                arrow.classList.remove('rotate-180');
                arrow.classList.add('text-slate-400');
                arrow.classList.remove('text-blue-400');
                header.parentNode.classList.remove('border-blue-600/50', 'shadow-xl'); // Quitar estilo activo del contenedor
                header.parentNode.classList.add('border-slate-700/50');
            } else {
                // Si está cerrado, ábrelo
                // Cierra primero todos los demás paneles (comportamiento tipo acordeón)
                document.querySelectorAll('.accordion-panel').forEach(item => {
                    item.style.maxHeight = null;
                    item.previousElementSibling.classList.remove('active');
                    item.previousElementSibling.querySelector('.accordion-arrow').classList.remove('rotate-180');
                    item.previousElementSibling.querySelector('.accordion-arrow').classList.add('text-slate-400');
                    item.previousElementSibling.parentNode.classList.remove('border-blue-600/50', 'shadow-xl');
                    item.previousElementSibling.parentNode.classList.add('border-slate-700/50');
                });

                // Abrir el panel actual
                panel.style.maxHeight = panel.scrollHeight + "px";
                arrow.classList.add('rotate-180');
                arrow.classList.remove('text-slate-400');
                arrow.classList.add('text-blue-400');
                header.parentNode.classList.add('border-blue-600/50', 'shadow-xl'); // Aplicar estilo activo al contenedor
                header.parentNode.classList.remove('border-slate-700/50');
            }
        });
    });

    // Asegurarse de que el primer panel se muestre activo al cargar (opcional)
    const initialActiveHeader = document.querySelector('.accordion-header.active');
    if (initialActiveHeader) {
        initialActiveHeader.click(); // Simula el click para abrirlo
    }
});

// Set the third accordion item to be open by default
document.addEventListener('DOMContentLoaded', () => {
    const thirdHeader = accordionHeaders[2];
    if (thirdHeader) {
        thirdHeader.classList.add('active');
        const panel = thirdHeader.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        thirdHeader.querySelector('.accordion-arrow').classList.add('rotate-180');
    }
});

// Tab script for "Planes y Precios"
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Deactivate all tabs
        tabButtons.forEach(btn => {
            btn.classList.remove('text-white', 'border-blue-500');
            btn.classList.add('text-slate-400', 'border-transparent');
        });

        // Hide all panels
        tabPanels.forEach(panel => {
            panel.classList.add('hidden');
        });

        // Activate the clicked tab
        button.classList.add('text-white', 'border-blue-500');
        button.classList.remove('text-slate-400', 'border-transparent');

        // Show the corresponding panel
        const targetPanelId = button.dataset.tab;
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            targetPanel.classList.remove('hidden');
        }
    });
});
