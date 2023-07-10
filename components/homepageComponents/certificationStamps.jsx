import React from 'react';

// a component that displays a list of certification stamp images in a row
function CertificationStamps() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap flex-row px-4 sm:px-8 md:px-16 lg:px-32 justify-between py-32  border-b-2">
      <img className={`w-1/2 lg:w-1/5 object-contain cert-icon`} src="/Images/certificationStamps/iso.avif" alt="ISO Certification" />
      <img className={`w-1/2 lg:w-1/5 object-contain cert-icon`} src="/Images/certificationStamps/greatTaste.avif" alt="Great Taste Certification" />
      <img className={`w-1/2 lg:w-1/5 object-contain cert-icon`} src="/Images/certificationStamps/bureaVeritas.avif" alt="Bureau Veritas Certification" />
      <img className={`w-1/2 lg:w-1/5 object-contain cert-icon`} src="/Images/certificationStamps/ifs.avif" alt="IFS Certification" />
      <img className={`w-1/2 lg:w-1/5 object-contain cert-icon`} src="/Images/certificationStamps/brc.avif" alt="BRC Certification" />
    </div>
  );
}

export default CertificationStamps;
