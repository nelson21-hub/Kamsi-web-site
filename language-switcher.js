// Language Switcher for KAMSI website
// This script allows users to switch between French and English versions

class LanguageSwitcher {
    constructor() {
        this.currentLang = 'fr'; // Default language
        this.init();
    }

    init() {
        // Create language switcher button
        this.createLanguageButton();
        
        // Add event listeners
        this.addEventListeners();
    }

    createLanguageButton() {
        // Create language switcher container
        const switcherContainer = document.createElement('div');
        switcherContainer.className = 'language-switcher';
        switcherContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        `;

        // Create language button
        const langButton = document.createElement('button');
        langButton.id = 'lang-switch';
        langButton.textContent = 'EN';
        langButton.style.cssText = `
            background: #007bff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s;
        `;

        // Add hover effect
        langButton.addEventListener('mouseenter', () => {
            langButton.style.background = '#0056b3';
        });
        langButton.addEventListener('mouseleave', () => {
            langButton.style.background = '#007bff';
        });

        // Add button to container
        switcherContainer.appendChild(langButton);
        
        // Add to page
        document.body.appendChild(switcherContainer);
    }

    addEventListeners() {
        const langButton = document.getElementById('lang-switch');
        if (langButton) {
            langButton.addEventListener('click', () => {
                this.switchLanguage();
            });
        }
    }

    switchLanguage() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop();
        
        let newFile = '';
        
        // Define language mappings
        const languageMappings = {
            // French to English
            'register.html': 'register-en.html',
            'Login.html': 'Login-en.html',
            'index.html': 'index-en.html',
            
            // English to French
            'register-en.html': 'register.html',
            'Login-en.html': 'Login.html',
            'index-en.html': 'index.html'
        };
        
        // Get new file name
        newFile = languageMappings[currentFile] || currentFile;
        
        // Navigate to new file
        if (newFile !== currentFile) {
            window.location.href = newFile;
        }
    }

    // Method to update button text based on current language
    updateButtonText() {
        const langButton = document.getElementById('lang-switch');
        if (langButton) {
            const currentPath = window.location.pathname;
            const currentFile = currentPath.split('/').pop();
            
            if (currentFile.includes('-en')) {
                langButton.textContent = 'FR';
                this.currentLang = 'en';
            } else {
                langButton.textContent = 'EN';
                this.currentLang = 'fr';
            }
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const switcher = new LanguageSwitcher();
    switcher.updateButtonText();
});

// Also initialize if script is loaded after DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const switcher = new LanguageSwitcher();
        switcher.updateButtonText();
    });
} else {
    const switcher = new LanguageSwitcher();
    switcher.updateButtonText();
} 