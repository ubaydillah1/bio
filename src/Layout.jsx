/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ReactLenis, useLenis } from "lenis/react";

function Layout({ children }) {
  const lenis = useLenis(({ scroll }) => {
    console.log("Scrolling...", scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default Layout;
