import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/3512618905"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon className="whatsapp-icon"/>
      </a>
    </div>
  );
};

export default Whatsapp;
