import React, { useState } from 'react';

function ExampleComponent() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [startIndex, setStartIndex] = useState(0);
  const subsetSize = 4;
  const b = a.slice(startIndex, startIndex + subsetSize);

  const handleNext = () => {
    if (startIndex + subsetSize < a.length) {
      setStartIndex(startIndex + subsetSize);
    }
  };

  const handlePrevious = () => {
    if (startIndex - subsetSize >= 0) {
      setStartIndex(startIndex - subsetSize);
    }
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={startIndex + subsetSize >= a.length}
        >
          Next
        </button>
      </div>
      <div>
        {b.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default ExampleComponent;
