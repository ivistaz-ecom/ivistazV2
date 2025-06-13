'use client'
import React, { useState } from "react";
import Banner from "./Banner";
import ItAndTechFirms from "@/app/ai-powered-marketing/ItAndTechFirms";
import DigitalMarketing from "./DigitalMarketing";
import OurServices from "./OurServices";
import FloatingButton from "./FloatingButton";
import ContactModal from "./ContactModal";

const index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Banner />
      <ItAndTechFirms />
      <DigitalMarketing />
      <OurServices />
      <FloatingButton onClick={() => setShowModal(true)} />
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default index;
