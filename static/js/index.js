        // Fonctionnalité du bouton Scroll to Top
        const scrollToTopBtn = document.getElementById('scrollToTop');
        let lastScrollTop = 0;
        let scrollThreshold = 300; // Minimum de scroll pour activer
        
        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Si on a scrollé assez pour activer le bouton
            if (currentScrollTop > scrollThreshold) {
                // Si on remonte (scroll vers le haut)
                if (currentScrollTop < lastScrollTop) {
                    scrollToTopBtn.classList.add('visible');
                } 
                // Si on descend (scroll vers le bas)
                else if (currentScrollTop > lastScrollTop) {
                    scrollToTopBtn.classList.remove('visible');
                }
            } else {
                // Masquer si on est en haut de page
                scrollToTopBtn.classList.remove('visible');
            }
            
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Pour mobile
        });
        
        // Action de remontée smooth au clic
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });