import React, { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default function Marketing() {
  const history = useHistory();
  const ref = useRef(null);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
}
