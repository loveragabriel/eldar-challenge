export const boxStyles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",   
  };

  export const boxStylesCards = {
    padding: 2,
    marginBottom: 2,
    border: '1px solid #ccc',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };
  
  export const titleStyles = {
    fontSize: {
      xs: ".9rem",
      sm: "2rem",
    },
    color: "blue",
    '&::first-letter': {
      textTransform: 'uppercase',
    }
  };
  
  export const bodyStyles = {
    color: "black",
    fontSize: {
      xs: ".6rem",
      sm: "1.5rem",
    },
  };
  
  export const buttonStyles = {
    fontSize: {
      xs: "0.4rem",
      sm: "1rem",
    },
  };
  
  export const alertContainerStyles = {
    position: "fixed",
    top: "10vh",
    left: 0,
    right: 0,
    margin: "0 auto",
    width: {
      xs: "90vw",
      sm: "45vw",
    },
  };
  