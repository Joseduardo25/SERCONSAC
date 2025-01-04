'use client';

export function TermsConditionsDownload() {
  return (
    <div>
      <h1>Bienvenido a Nuestra Landing Page</h1>
      <p>
        Por favor, revisa nuestros{' '}
        <a 
          href="/terminos-y-condiciones/POLITICA-DE-SST-SERCONSAC-2024.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: 'blue' }}
        >
          Términos y Condiciones
        </a>.
      </p>
    </div>
  );
}
