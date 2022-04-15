import { Link } from 'react-router-dom';
const _ = require('lodash');

export default function BackArrow(props) {
  return (
    <Link to={_.get(props, 'to')}>
      <div className="bg-blue-200 rounded-full p-2 hover:bg-blue-300 cursor-pointer hover:p-3 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={_.get(props, 'size', 20)}
          height={_.get(props, 'size', 20)}
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
    </Link>
  );
}
