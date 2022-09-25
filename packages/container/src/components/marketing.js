import React, { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default function marketing() {
  const history = useHistory();
  const ref = useRef(null);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        console.log("container", { pathname, nextPathname });
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
}
