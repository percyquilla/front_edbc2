import React, { useEffect } from 'react';

const AutoReload = () => {
  useEffect(() => {
    // const interval = setInterval(() => {
    //   window.location.reload();
    // }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>La página se recargará cada 2 segundos</h1>
    </div>
  );
};

export default AutoReload;