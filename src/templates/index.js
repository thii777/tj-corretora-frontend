import React, { useEffect, useState, useMemo } from "react";
import Header from "../organisms/header/index";
import SectionPhone from "../organisms/sectionPhone";

export default function Template() {
  return (
    <>
      <SectionPhone />
      <Header />
    </>
  );
}
