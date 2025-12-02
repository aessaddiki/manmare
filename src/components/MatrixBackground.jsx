import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let columns = Math.floor(width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const characters = '01';

    function draw() {
      // Dibuja un rectángulo semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Color de los caracteres con opacidad reducida
      ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; 
      ctx.font = '15px monospace';

      // Dibuja los caracteres que caen
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      
      // Dibuja un rectángulo negro sobre el área de contenido para ocultar el efecto
      const contentWidth = 980; // Ancho del contenido principal + padding
      const startX = (width - contentWidth) / 2;
      ctx.fillStyle = '#000';
      ctx.fillRect(startX, 0, contentWidth, height);

      // Dibuja un rectángulo negro en la parte superior para el TopNav
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, 80); // 80px de altura para el TopNav
    }

    // Reduce la velocidad a la mitad (aumentando el intervalo a 132ms)
    const interval = setInterval(draw, 132);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#000' }} />;
};

export default MatrixBackground;
