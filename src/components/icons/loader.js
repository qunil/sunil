import React from 'react';

const IconLoader = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  //   <title>Loader Logo</title>
  //   <g>
  //     <g id="B" transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //     </g>
  //     <path
  //       stroke="currentColor"
  //       strokeWidth="5"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M 50, 5
  //                 L 11, 27
  //                 L 11, 72
  //                 L 50, 95
  //                 L 89, 73
  //                 L 89, 28 z"
  //     />
  //   </g>
  // </svg>

  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  //   <title>Loader Logo</title>
  //   <g>
  //     <g id="B" transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //     </g>
  //     <path
  //       stroke="currentColor"
  //       strokeWidth="5"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M 50, 5
  //                 L 11, 27
  //                 L 11, 72
  //                 L 50, 95
  //                 L 89, 73
  //                 L 89, 28 z"
  //     />
  //   </g>
  // </svg>
  
  <svg width="421" height="337" viewBox="0 0 421 337" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 330C19.617 306.847 29.9965 282.6 40.7778 258.556C54.6515 227.614 68.5049 196.744 79.8889 164.778C90.3557 135.387 101.616 106.14 105.444 75.1111C106.416 67.2326 107 60.4097 107 52.4444C107 44.9733 101.285 45.7007 95 46C87.0074 46.3806 78.1491 57.4985 74.2222 63.3889C69.7235 70.1369 69 79.7615 69 87.5556C69 108.619 97.1991 125.148 110.611 137.722C120.139 146.655 130.213 157.566 132.889 170.944C135.468 183.838 127.13 187.803 115 188C103.418 188.188 96.2366 184.565 86.4444 178.444C77.7024 172.981 68.1424 167.281 63 158C60.1535 152.862 57.5873 148.208 56.2222 142.444C56.2109 142.397 55.7369 140.176 56 141.111C57.3005 145.735 61.5419 149.506 64.5556 153C73.2107 163.035 80.9695 174.252 91.2222 182.778C94.9809 185.903 99.6233 188.137 103.222 191.222C108.234 195.518 121.876 196.964 128.5 195.944C131.817 195.434 136.19 190.082 137.778 187.556C140.576 183.104 144.72 178.617 146.389 173.611C148.57 167.066 149.702 160.176 151.556 153.556C152.955 148.557 154 142.72 154 137.5C154 132.564 152.245 133.065 149 130C146.071 127.234 146.929 130.398 147 133.444C147.152 139.999 149.63 145.437 151.556 151.556C153.614 158.096 155.308 164.348 158 170.778C159.948 175.432 163.212 178.013 166.778 181.222C169.762 183.908 178.762 176.675 180 173.889C182.733 167.74 187.178 164.387 189 157.556C190.61 151.518 192.675 145.125 193.889 139.056C194.575 135.623 194 131.499 194 128C194 126.541 194.206 124.885 193.944 123.444C193.312 119.968 188.916 118.517 192.444 124.444C194.747 128.312 198.347 135.194 202.222 137.778C202.717 138.108 208.381 130.211 208.778 129.667C211.905 125.375 214.394 120.35 217.444 116.222C219.126 113.947 219 124.676 219 125.444C219 129.37 219 133.296 219 137.222C219 142.63 219 148.037 219 153.444C219 156.739 219.383 159.465 219.944 162.556C220.256 164.27 219.975 163.134 220.056 161.444C220.27 156.943 220.814 152.511 222.056 148.167C223.753 142.226 225.208 135.861 227.444 130.111C229.461 124.927 230.655 119.436 232 114.056C232.882 110.529 235 107.876 235 104C235 102.434 237.43 98.007 239 97.2222C241.134 96.155 245.684 97 248 97C252.939 97 254.137 97.1659 257 101.778C259.974 106.57 262.433 112.505 263.056 118.111C263.71 123.998 265.464 129.139 266.056 135.056C266.428 138.778 268.413 142.413 271 145C275.105 149.105 279.618 150 285.444 150C293.719 150 296.07 145.523 298.556 137.444C301.579 127.619 303 118.698 303 108.444C303 101.447 303.868 93.6293 301.5 87C299.307 80.8592 301 100.035 301 106.556C301 112.824 304.411 121.453 307.5 126.944C311.223 133.564 314.187 136.093 321 139.5C327.654 142.827 340.972 146.316 348.333 143.778C354.816 141.543 357.428 129.599 359.444 124.222C362.266 116.697 363 110.364 363 102.444C363 90.1296 363 77.8148 363 65.5C363 53.1452 362.12 40.6646 359.5 28.6111C358.181 22.5444 354.7 19.1459 351.556 14C349.669 10.913 347.53 6 343.222 6C336.225 6 336 32.9465 336 37.5556C336 48.2593 336 58.963 336 69.6667C336 82.9307 335.313 95.8223 340.5 108.333C347.88 126.131 357.376 144.268 372.944 155.944C378.393 160.031 385.133 161 391.722 161C400.02 161 405.991 151.434 410.444 145.556C412.806 142.438 413.032 138.951 415 136" stroke="black" stroke-width="12" stroke-linecap="round"/>
<path d="M295 67L300 65" stroke="black" stroke-width="12" stroke-linecap="round"/>
</svg>

);

export default IconLoader;