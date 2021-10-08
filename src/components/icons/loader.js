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
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 92">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <path d="M51.566 53.7419C51.566 55.4301 51.2506 56.9327 50.6199 58.2499C50.0077 59.567 49.1451 60.6893 48.032 61.6169C46.9375 62.5259 45.6389 63.2123 44.1363 63.6761C42.6522 64.1398 41.0475 64.3717 39.3223 64.3717C38.1165 64.3717 36.9941 64.2697 35.9553 64.0656C34.935 63.8616 34.0167 63.6111 33.2004 63.3143C32.4027 63.0175 31.7256 62.7114 31.1691 62.396C30.6311 62.0807 30.2508 61.8117 30.0282 61.5891C29.8241 61.3664 29.6665 61.0882 29.5551 60.7543C29.4624 60.4018 29.416 59.938 29.416 59.3629C29.416 58.9548 29.4346 58.6209 29.4717 58.3612C29.5088 58.0829 29.5644 57.8603 29.6386 57.6933C29.7128 57.5264 29.8056 57.4151 29.9169 57.3594C30.0282 57.2852 30.1581 57.2481 30.3065 57.2481C30.5662 57.2481 30.9279 57.4058 31.3917 57.7212C31.874 58.0365 32.4862 58.3797 33.2283 58.7507C33.9703 59.1218 34.8608 59.4742 35.8996 59.8082C36.957 60.1235 38.1721 60.2812 39.5449 60.2812C40.5838 60.2812 41.5299 60.1421 42.3832 59.8638C43.2551 59.5855 43.9972 59.196 44.6094 58.6951C45.2401 58.1757 45.7224 57.5449 46.0563 56.8029C46.3903 56.0608 46.5572 55.2168 46.5572 54.2707C46.5572 53.2503 46.3253 52.3784 45.8616 51.6549C45.3978 50.9315 44.7856 50.3007 44.025 49.7627C43.2644 49.2062 42.3925 48.7053 41.4093 48.2601C40.4446 47.7963 39.4522 47.3325 38.4318 46.8688C37.4115 46.3864 36.4191 45.8577 35.4544 45.2826C34.4897 44.7076 33.6271 44.0304 32.8665 43.2513C32.1059 42.4722 31.4845 41.5632 31.0021 40.5243C30.5384 39.4669 30.3065 38.2054 30.3065 36.7399C30.3065 35.2372 30.5755 33.9016 31.1134 32.7328C31.67 31.5456 32.4306 30.5531 33.3952 29.7554C34.3784 28.9577 35.5379 28.3548 36.8736 27.9467C38.2278 27.52 39.684 27.3066 41.2423 27.3066C42.04 27.3066 42.8377 27.3808 43.6354 27.5293C44.4517 27.6591 45.2123 27.8446 45.9172 28.0858C46.6407 28.3084 47.2807 28.5681 47.8372 28.8649C48.3938 29.1432 48.7555 29.3751 48.9225 29.5606C49.108 29.7276 49.2286 29.8667 49.2842 29.978C49.3399 30.0708 49.3863 30.2006 49.4234 30.3676C49.4605 30.516 49.4883 30.7015 49.5068 30.9241C49.5254 31.1467 49.5347 31.4343 49.5347 31.7867C49.5347 32.1206 49.5161 32.4175 49.479 32.6772C49.4605 32.9369 49.4234 33.1595 49.3677 33.345C49.3121 33.512 49.2286 33.6418 49.1173 33.7346C49.0245 33.8088 48.9132 33.8459 48.7834 33.8459C48.5793 33.8459 48.2546 33.716 47.8094 33.4563C47.3827 33.1966 46.854 32.9091 46.2233 32.5937C45.5926 32.2598 44.8412 31.963 43.9693 31.7032C43.116 31.425 42.1513 31.2858 41.0754 31.2858C40.0736 31.2858 39.2017 31.425 38.4597 31.7032C37.7176 31.963 37.1054 32.3154 36.6231 32.7607C36.1408 33.2059 35.779 33.7346 35.5379 34.3468C35.2967 34.959 35.1761 35.6083 35.1761 36.2946C35.1761 37.2964 35.408 38.159 35.8718 38.8825C36.3356 39.606 36.9478 40.246 37.7084 40.8026C38.4875 41.3591 39.3687 41.8692 40.3519 42.333C41.3351 42.7968 42.3368 43.2699 43.3572 43.7522C44.3775 44.216 45.3792 44.7354 46.3624 45.3105C47.3456 45.867 48.2175 46.5348 48.9781 47.314C49.7573 48.0746 50.3787 48.9836 50.8425 50.041C51.3249 51.0799 51.566 52.3135 51.566 53.7419Z" fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
              L 11, 27
              L 11, 72
              L 50, 95
              L 89, 73
              L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
