# Landing Page - Carmen Yajaira Gonzales

Landing page elegante y profesional para la venta del ebook "Dominando la Colorimetría Capilar para Principiantes" de Carmen Yajaira Gonzales.

## Características

- ✅ Diseño elegante y profesional
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Múltiples llamadas a la acción (CTA)
- ✅ Sección de testimonios/reseñas
- ✅ Sección de preguntas frecuentes (FAQ) interactiva
- ✅ Stack sencillo de mantener (HTML, CSS, JavaScript vanilla)
- ✅ Optimizado para SEO

## Stack Tecnológico

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y diseño responsive
- **JavaScript**: Interactividad básica sin dependencias
- **Google Fonts**: Tipografías elegantes (Playfair Display + Inter)

## Estructura del Proyecto

```
SitioCarmen/
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # JavaScript
└── README.md       # Documentación
```

## Instalación y Uso

1. Simplemente abre `index.html` en tu navegador
2. O sirve los archivos usando un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

## Personalización

### Colores

Los colores se pueden modificar fácilmente en la sección `:root` del archivo `styles.css`:

```css
:root {
    --primary-color: #8B4513;
    --primary-dark: #6B3410;
    /* ... más variables */
}
```

### Contenido

- Edita el texto directamente en `index.html`
- Reemplaza los placeholders de imágenes con las imágenes reales
- Actualiza los testimonios con reseñas reales

### Integración de Pago

En `script.js`, la función `handlePurchase()` está lista para integrar con tu plataforma de pago preferida (Stripe, PayPal, etc.).

## Próximos Pasos

1. Agregar imágenes reales (foto de Carmen, portada del ebook)
2. Integrar plataforma de pago
3. Configurar sistema de entrega automática del ebook
4. Agregar analytics (Google Analytics, etc.)
5. Optimizar imágenes
6. Configurar dominio y hosting

## Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Móviles iOS y Android

## Autor

Desarrollado para Carmen Yajaira Gonzales

## Licencia

Todos los derechos reservados © 2024