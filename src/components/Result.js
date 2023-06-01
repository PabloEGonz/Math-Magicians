import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ total, next, operation }) => {
  const text = total !== next ? `${total} ${operation}  ${next}` : `${total} ${operation}  ${next}`;
  return (
    <div className="result">
      <p>
        {text}
      </p>
    </div>
  );
};

Result.propTypes = {
  total: PropTypes.string,
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  operation: PropTypes.string.isRequired,
};

Result.defaultProps = {
  total: '0',
  next: '',
};
// Result.defaultProps = {
//   result: 0,
//   next: '',
//   operation: '',
// };
export default Result;
