import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

const InputValidator = ({ value, validations }) => {
  const [errorMessages, setErrorMessages] = useState([]);

  const onBlur = () => {
    const messages = validations.map(({ condition, message }) => ({
      condition: condition(value),
      message,
    }));

    setErrorMessages(messages);
  };

  return (
    <>
      {errorMessages.map((error, index) => (
        error.condition && (
          <Typography key={index} variant="text2" color="error">
            {error.message}
          </Typography>
        )
      ))}
    </>
  );
};

export default InputValidator;
