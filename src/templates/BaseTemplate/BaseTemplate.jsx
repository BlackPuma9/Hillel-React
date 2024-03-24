import React from "react";

const BaseTemplate = ({ title, children, id }) => {
  return (
    <main id={id}>
      {title && <h1 className="mt-lg-5 text-center">{title}</h1>}
      {children}
    </main>
  );
};

export default BaseTemplate;
