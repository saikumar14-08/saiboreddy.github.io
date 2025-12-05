document.addEventListener('DOMContentLoaded', () => {
    // --- 1. TYPING EFFECT LOGIC ---
    const typedTextElement = document.getElementById('typed-text');
    const fullText = 'SAI B: .Net FULL STACK DEVELOPER.';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < fullText.length) {
            typedTextElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 125); // Typing speed
        }
    }

    // Start the typing effect when the page loads
    if (typedTextElement) {
        // Add temporary class for the initial "shower" effect visual flair
        document.body.classList.add('shower-mode');
        setTimeout(() => {
            document.body.classList.remove('shower-mode');
        }, 2500); // Remove "shower" class after 1.5 seconds
        
        typeWriter();
    }

    // --- 2. SECTION SWITCHING LOGIC ---
    window.showSection = function(event, sectionId) {
        event.preventDefault();

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active class on navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Find and activate the link that matches the target section ID
        const targetLink = event.target.closest('.nav-link') || 
                           document.querySelector(`.nav-link[onclick*="'${sectionId}'"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
        
        // Scroll to the top of the container content
        const contentContainer = document.querySelector('.content');
        if (contentContainer) {
            contentContainer.scrollTop = 0;
        }
    };
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem('theme-mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌙';
    } else {
        modeToggle.textContent = '🌞';
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = '🌙';
            localStorage.setItem('theme-mode', 'dark');
        } else {
            modeToggle.textContent = '🌞';
            localStorage.setItem('theme-mode', 'light');
        }
    });
    
// Function to close the modal (keep this)
window.closeRetroAlert = function() {
    const alertModal = document.getElementById('retro-alert-modal');
    if (alertModal) {
        alertModal.style.display = 'none';
    }
}});