'use client';

export function TermsConditionsDownload() {
  return (
    <div>
      <h1>Bienvenido a Nuestra Landing Page</h1>
      <p>
        Por favor, revisa nuestros{' '}
        <a 
          href="/public/terminos-y-condiciones/POLITICA_DE_SST_SERCONSAC_2024.pdf" 
          download='POLITICA_DE_SST_SERCONSAC_2024.pdf'
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
