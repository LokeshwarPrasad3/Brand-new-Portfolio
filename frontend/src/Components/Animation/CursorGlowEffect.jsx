import { useEffect } from 'react';

const CursorGlowEffect = () => {
    useEffect(() => {
        // Function to update the custom property values
        const handleMouseMove = (event) => {
            document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
        };

        // Add the event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Add the CSS for the body
        const style = document.createElement('style');
        style.innerHTML = `
      body {
        background: radial-gradient(
          600px at var(--cursor-x, 1135px) var(--cursor-y, 311px),
          rgba(29, 78, 216, 0.15),
          transparent 80%
        );
        background-color: rgb(15, 23, 42); /* slate-900 */
      }
    `;
        document.head.appendChild(style);

        // Clean up
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.head.removeChild(style);
        };
    }, []);

    // This component doesn't render anything visible
    return null;
};

export default CursorGlowEffect;