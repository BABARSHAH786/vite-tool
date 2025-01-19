import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function ToggleableText({ }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={toggle}>
        {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
      </div>
      {isExpanded && <p>{}</p>}
    </div>
  );
}

export default ToggleableText;