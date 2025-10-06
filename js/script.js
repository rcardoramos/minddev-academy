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
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const panel = header.nextElementSibling;
        const arrow = header.querySelector('.accordion-arrow');
        const wasOpen = header.classList.contains('active');

        // Close all other accordions first
        accordionHeaders.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = null;
            h.querySelector('.accordion-arrow').classList.remove('rotate-180');
        });

        if (!wasOpen) {
            header.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
            arrow.classList.add('rotate-180');
        }
    });
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
