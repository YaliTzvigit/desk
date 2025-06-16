 // bubble animations

         document.addEventListener('DOMContentLoaded', function() {
            const bubble1 = document.getElementById('bubble1');
            const bubble2 = document.getElementById('bubble2');
            const bubble3 = document.getElementById('bubble3');
            
            const radius = 180; // Rayon du cercle de rotation
            
            // Position initiale de chaque bulle (réparties à 120° chacune)
            gsap.set(bubble1, {
                x: Math.cos(0) * radius,
                y: Math.sin(0) * radius
            });
            
            gsap.set(bubble2, {
                x: Math.cos(gsap.utils.toRad(120)) * radius,
                y: Math.sin(gsap.utils.toRad(120)) * radius
            });
            
            gsap.set(bubble3, {
                x: Math.cos(gsap.utils.toRad(240)) * radius,
                y: Math.sin(gsap.utils.toRad(240)) * radius
            });
            
            // Animation de rotation circulaire continue
            gsap.to([bubble1, bubble2, bubble3], {
                rotation: 360,
                duration: 20, // Rotation lente de 20 secondes
                repeat: -1,
                ease: "none",
                transformOrigin: `${-radius}px 0px`, // Point de rotation au centre
            });
            
            // Animation de pulsation légère pour plus de subtilité
            gsap.to([bubble1, bubble2, bubble3], {
                scale: 1.1,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                stagger: 0.8 // Décalage entre les bulles
            });
            
            // Animation d'opacité pour un effet de respiration
            gsap.to([bubble1, bubble2, bubble3], {
                opacity: 0.8,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                stagger: 0.5
            });
            
            // Animation d'entrée des bulles
            gsap.from([bubble1, bubble2, bubble3], {
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: "back.out(1.7)",
                stagger: 0.2,
                delay: 0.5
            });
        });