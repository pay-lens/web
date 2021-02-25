import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const FontAwesomeIcon = (props) => {
  library.add(fas, far);

  return <FontAwesomeIcon {...props} />;
};

FontAwesomeIcon.ckName = 'FontAwesomeIcon';

export default FontAwesomeIcon;
