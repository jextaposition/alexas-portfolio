import React, { useRef } from 'react';
//import { useLocation } from 'react-router-dom';
import { Scrollbar } from 'smooth-scrollbar-react';

const SmoothScrollbar = ({ children }) => {
  const ref = useRef(null);
  //   const { pathname } = useLocation();
  //   useEffect(() => {
  //     const { scrollbar } = ref.current;
  //     scrollbar.setPosition(0, 0, {
  //       withoutCallbacks: true,
  //     });
  //   }, [pathname]);

  return (
    <Scrollbar ref={ref} damping='.05'>
      {children}
    </Scrollbar>
  );
};

export default SmoothScrollbar;
