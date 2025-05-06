import React from "react";
const logoIcon = [
  "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/google.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/accenture.jpg",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/Commenda_Logo.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/Paloalto-logo.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/LandingPageDetials.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/ACCOLITE-DIGITAL-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/AMAZON-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/ANZ-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/ATLASSIAN-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/CAPGEMINI-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/COGNIZANT-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/COMMVAULT-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/CRED-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/DAFFODIL-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/DECATHLON-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/DELOITTE-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/DXC-TECHNOLOGY-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/EPAM-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/ERICSSON-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/FLIPKART-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/GAINSIGHT-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/GOLDMAN-SACHS-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/HASHEDIN-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/HCL-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/HEXAWARE-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/HP-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/IBM-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/INFOSYS-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/JOSH-TECHNOLOGY-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/JUSPAY-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/KANTAR-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/LOWE'S-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/LUPIN-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/MAERSK-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/MICROSOFT-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/MPHASIS-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/MRF-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/NAGARRO-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/NESTLE-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/PITNEY-BOWES-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/PRACTO-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/PRISM-JOHNSON-LIMITED-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/RED-HAT-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/SIEMENS-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/SOPRA-BANKING-SOFTWARE-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/TCS-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/TECH-MAHINDRA-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/UNDOSTRES-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/UNOMINDA-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/VIRTUSA-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/VOLTAS-BEKO-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/WABAG-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/WILEY-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/WIPRO-LOGO.webp",
          "https://www.psit.ac.in/assets/webp/psit-recruiters-logo/ZILINGO-LOGO.webp"
]
const TapSection = () => {
  return (
    <div className="mb-4 py-4">
      <div className="my-4  py-4 overflow-hidden shadow-2xl">
        <div className="flex h-16 flex-none items-center justify-center gap-4 animate-move-left  ">
          {logoIcon.map(icon => <img className="h-fit" src={icon}/>)}
        </div>
      </div>
    </div>
  );
};

export default TapSection;
