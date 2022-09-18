import React, { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { mount } from "marketing/MarketingApp";

export default function marketing() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}
