'use client';

export function TermsConditionsDownload() {
  return (
    <div>
      <p>
        <a 
          href="/terminos-y-condiciones/POLITICA_DE_SST_SERCONSAC_v2.pdf"
          download="POLITICA_DE_SST_SERCONSAC_v2.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Conoce nuestra Política de Seguridad <br/> y Salud en el Trabajo
        </a>.
      </p>
    </div>
  );
}
