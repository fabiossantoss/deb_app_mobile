import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

const TextInputDateMask = () => (
  <TextInputMask
    style={{ flex: 1, height: 50, color: '#000' }}
    type="datetime"
    options={{
      format: 'DD/MM/YYYY',
    }}
  />
);

export default TextInputDateMask;
