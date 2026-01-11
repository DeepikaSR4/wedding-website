'use client';
import { useEffect } from 'react';

export default function Hearts() {
    useEffect(() => {
        function createHeart(instant: boolean) {
            const heart = document.createElement('div');
            heart.classList.add('heart');

            const r_num = Math.floor(Math.random() * 40) + 1;
            const r_size = Math.floor(Math.random() * 25) + 10; // Slightly smaller max size
            const r_left = Math.floor(Math.random() * 100) + 1;
            const r_time = Math.floor(Math.random() * 10) + 15; // Slower: 15-25 seconds

            // Solid Sage Green color
            const color = "#4a7c64";

            // If instant, start animation from a random point by using negative delay
            const delay = instant ? (Math.random() * r_time * -1) : 0;

            heart.style.width = `${r_size}px`;
            heart.style.height = `${r_size}px`;
            heart.style.left = `${r_left}%`;
            heart.style.background = color;

            const animationString = `love ${r_time}s linear ${delay}s infinite`; // Linear for steady feel
            heart.style.animation = animationString;
            heart.style.webkitAnimation = animationString;

            const container = document.querySelector('.bg_heart');
            if (container) {
                container.appendChild(heart);
            }
        }

        // Create 15 hearts immediately to fill screen (reduced from 30)
        for (let i = 0; i < 15; i++) {
            createHeart(true);
        }

        // Continue spawning new ones at a slower rate (1 every 1.5 seconds)
        const interval = setInterval(() => {
            createHeart(false);

            // Cleanup old hearts that fell off the bottom
            document.querySelectorAll('.heart').forEach((heart: Element) => {
                const h = heart as HTMLElement;
                const top = h.getBoundingClientRect().top;
                if (top > window.innerHeight + 50) {
                    h.remove();
                }
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg_heart fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"></div>
    );
}
