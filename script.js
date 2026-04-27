document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Open Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close Mobile Menu
    closeMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close Mobile Menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link Highlighting (basic version)
    const navLinksDesktop = document.querySelectorAll('.nav-links a');
    
    // Set initial active state based on hash or default to first
    const currentHash = window.location.hash || '#home';
    navLinksDesktop.forEach(link => {
        if(link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinksDesktop.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Custom Dropdown Functionality
    const serviceDropdown = document.getElementById('serviceDropdown');
    
    if (serviceDropdown) {
        const dropdownSelected = serviceDropdown.querySelector('.dropdown-selected');
        const optionsList = serviceDropdown.querySelectorAll('.option');
        const hiddenInput = document.getElementById('selectedService');

        // Toggle Dropdown when clicking anywhere on the dropdown box
        serviceDropdown.addEventListener('click', (e) => {
            serviceDropdown.classList.toggle('active');
            e.stopPropagation();
        });

        // Option Selection
        optionsList.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent toggling again from the parent listener
                const val = option.getAttribute('data-value');
                const label = option.textContent;
                
                dropdownSelected.textContent = label;
                hiddenInput.value = val;
                serviceDropdown.classList.remove('active');
            });
        });

        // Close dropdown on outside click
        window.addEventListener('click', () => {
            serviceDropdown.classList.remove('active');
        });
    }
});
