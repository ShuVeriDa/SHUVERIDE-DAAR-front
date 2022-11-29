import {FC} from 'react';

interface ISvgComponentProps {
  styles?: string
  onClick?: () => void
}

export const FavoriteSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg className={styles} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
         width="20" height="20" viewBox="0 0 256 256"
         xmlSpace="preserve">

      <defs>
      </defs>
      <g style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1
      }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path
          d="M 50.755 19.668 c -0.159 0 -0.319 -0.038 -0.466 -0.115 L 45 16.772 l -5.29 2.781 c -0.337 0.177 -0.745 0.148 -1.054 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.371 -0.663 -0.253 -1.025 s 0.431 -0.626 0.808 -0.681 l 5.915 -0.859 l 2.644 -5.359 c 0.337 -0.683 1.458 -0.683 1.795 0 l 2.644 5.359 l 5.914 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.117 0.362 0.02 0.76 -0.253 1.026 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 51.168 19.604 50.962 19.668 50.755 19.668 z M 37.838 8.419 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.288 0.886 l -0.757 4.41 l 3.961 -2.083 c 0.291 -0.153 0.64 -0.153 0.931 0 l 3.961 2.083 l -0.756 -4.41 c -0.056 -0.324 0.052 -0.656 0.287 -0.886 l 3.205 -3.124 l -4.428 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.753 -0.548 L 45 3.216 l -1.98 4.012 c -0.146 0.296 -0.427 0.5 -0.754 0.548 L 37.838 8.419 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'rgb(0,0,0)',
            fillRule: 'nonzero',
            opacity: 1
          }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
        <path
          d="M 79.572 68.851 c 1.361 -1.002 2.245 -2.616 2.245 -4.432 v -0.897 c 0 -1.98 -1.051 -3.719 -2.625 -4.688 c 1.272 -1.008 2.09 -2.567 2.09 -4.313 v -0.897 c 0 -3.033 -2.468 -5.501 -5.503 -5.501 l -17.705 0.028 c 1.064 -11.168 0.059 -17.708 -3.147 -20.539 c -1.851 -1.633 -4.373 -2.048 -7.705 -1.274 l -0.737 0.171 l -0.036 0.755 c -0.464 9.738 -6.423 22.906 -12.256 24.679 v -0.652 c 0 -1.872 -1.652 -3.394 -3.682 -3.394 H 11.669 c -2.03 0 -3.682 1.522 -3.682 3.394 v 35.314 c 0 1.871 1.652 3.393 3.682 3.393 h 18.843 c 2.03 0 3.682 -1.522 3.682 -3.393 v -0.027 c 3.09 2.023 8.158 3.254 13.235 3.134 h 25.367 c 3.033 0 5.501 -2.467 5.501 -5.5 v -0.898 c 0 -1.339 -0.481 -2.568 -1.279 -3.523 c 2.797 -0.255 4.996 -2.614 4.996 -5.476 v -0.898 C 82.013 71.517 81.044 69.838 79.572 68.851 z M 80.012 74.316 c 0 1.93 -1.57 3.499 -3.5 3.499 h -3.717 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 4.486 c 1.93 0 3.5 1.57 3.5 3.5 v 0.898 c 0 1.93 -1.57 3.499 -3.5 3.499 H 47.403 c -5.582 0.149 -11.273 -1.511 -13.47 -3.929 l -1.741 -1.915 v 4.738 c 0 0.754 -0.769 1.392 -1.681 1.392 H 11.669 c -0.911 0 -1.681 -0.638 -1.681 -1.392 V 51.293 c 0 -0.755 0.769 -1.393 1.681 -1.393 h 18.843 c 0.911 0 1.681 0.638 1.681 1.393 v 1.844 v 1.06 v 16.449 c 0 0.553 0.448 1.001 1.001 1.001 c 0.553 0 1.001 -0.447 1.001 -1.001 V 53.999 c 7.351 -1.562 13.461 -16.045 14.206 -25.861 c 2.295 -0.41 3.998 -0.089 5.203 0.975 c 2.745 2.423 3.52 8.944 2.371 19.937 l -0.116 1.106 l 19.924 -0.032 c 1.93 0 3.5 1.57 3.5 3.5 v 0.897 c 0 1.93 -1.57 3.5 -3.5 3.5 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 7.472 h 0.535 c 1.93 0 3.5 1.57 3.5 3.5 v 0.897 c 0 1.93 -1.57 3.5 -3.5 3.5 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 8.007 h 0.195 c 1.93 0 3.5 1.569 3.5 3.499 V 74.316 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: 'butt',
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: 'rgb(0,0,0)',
            fillRule: "nonzero",
            opacity: 1
          }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
        <path
          d="M 21.38 83.291 c -2.803 0 -5.083 -2.28 -5.083 -5.083 c 0 -2.803 2.28 -5.084 5.083 -5.084 s 5.083 2.28 5.083 5.084 C 26.463 81.01 24.183 83.291 21.38 83.291 z M 21.38 75.125 c -1.7 0 -3.082 1.383 -3.082 3.083 c 0 1.699 1.383 3.082 3.082 3.082 c 1.699 0 3.082 -1.383 3.082 -3.082 C 24.462 76.508 23.079 75.125 21.38 75.125 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'rgb(0,0,0)',
            fillRule: 'nonzero',
            opacity: 1
          }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
        <path
          d="M 73.88 29.304 c -0.159 0 -0.319 -0.038 -0.466 -0.115 l -5.289 -2.781 l -5.291 2.781 c -0.334 0.177 -0.744 0.148 -1.053 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.37 -0.663 -0.253 -1.025 c 0.118 -0.362 0.431 -0.626 0.808 -0.681 l 5.914 -0.859 l 2.645 -5.359 c 0.336 -0.683 1.458 -0.683 1.794 0 l 2.645 5.359 l 5.914 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.117 0.362 0.02 0.76 -0.253 1.026 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 74.293 29.239 74.087 29.304 73.88 29.304 z M 60.962 18.054 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.287 0.885 l -0.756 4.41 l 3.962 -2.083 c 0.291 -0.153 0.638 -0.153 0.931 0 l 3.96 2.083 l -0.756 -4.41 c -0.056 -0.324 0.052 -0.656 0.287 -0.886 l 3.205 -3.124 l -4.428 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.753 -0.548 l -1.98 -4.012 l -1.98 4.012 c -0.146 0.296 -0.427 0.5 -0.753 0.548 L 60.962 18.054 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: " rgb(0,0,0)",
            fillRule: 'nonzero',
            opacity: 1
          }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
        <path
          d="M 28.594 29.304 c -0.159 0 -0.319 -0.038 -0.466 -0.115 l -5.29 -2.781 l -5.29 2.781 c -0.337 0.177 -0.745 0.148 -1.054 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.371 -0.663 -0.253 -1.025 c 0.118 -0.362 0.431 -0.626 0.808 -0.681 l 5.914 -0.859 l 2.645 -5.359 c 0.169 -0.341 0.516 -0.558 0.897 -0.558 l 0 0 c 0.381 0 0.729 0.216 0.897 0.558 l 2.644 5.359 l 5.915 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.118 0.362 0.02 0.76 -0.253 1.025 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 29.008 29.239 28.801 29.304 28.594 29.304 z M 22.839 24.277 c 0.16 0 0.32 0.038 0.466 0.115 l 3.961 2.083 l -0.757 -4.41 c -0.055 -0.324 0.052 -0.656 0.288 -0.886 l 3.205 -3.124 l -4.429 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.754 -0.548 l -1.98 -4.013 l -1.981 4.013 c -0.146 0.296 -0.427 0.5 -0.753 0.548 l -4.429 0.643 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.288 0.886 l -0.757 4.41 l 3.961 -2.083 C 22.519 24.315 22.679 24.277 22.839 24.277 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'rgb(0,0,0)',
            fillRule: 'nonzero',
            opacity: 1
          }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
      </g>
    </svg>
  );
};

export const ViewsSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg className={styles} fill="none" height="20" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="currentColor">
        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
        <path clipRule="evenodd"
              d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
              fillRule="evenodd"></path>
      </g>
    </svg>
  )
}

export const AddButtonSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
  );
};

export const CartSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CartBigSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const ClearCartSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path
        d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
        stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  );
};

export const MinusSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
        fill="#EB5A1E"/>
      <path
        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
        fill="#EB5A1E"/>
    </svg>
  );
};

export const PlusSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
        fill="#EB5A1E"/>
      <path
        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
        fill="#EB5A1E"/>
    </svg>
  );
};

export const RemoveSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
        fill="#EB5A1E"/>
      <path
        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
        fill="#EB5A1E"/>
    </svg>
  );
};

export const SearchSVG: FC<ISvgComponentProps> = ({styles}) => {
  return (
    <svg className={styles}
         enableBackground="new 0 0 32 32"
         id="Editable-line"
         version="1.1"
         viewBox="0 0 32 32"
         xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14"
              cy="14"
              fill="none"
              id="XMLID_42_"
              r="9"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
      />
      <line fill="none"
            id="XMLID_44_"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
      />
    </svg>
  );
};

export const ClearSearchValueSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg className={styles}
         onClick={onClick}
         height="48"
         viewBox="0 0 48 48"
         width="48"
         xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
      <path d="M0 0h48v48h-48z" fill="none"/>
    </svg>
  );
};

export const LeftArrowSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  );
};



