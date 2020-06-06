import React from "react";

export default (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        version="1"
        viewBox="0 0 1024 1024"
    >
        <path fill={props.fill || "#9FA2B4"}
    d="M4580 9001c-243-27-441-213-479-452-7-42-11-479-11-1266V6080l-1242-2-1243-3-65-23c-131-46-255-154-316-274-54-106-54-112-54-798 0-692 0-689 58-808 35-74 158-198 233-235 119-59 55-57 1397-57h1232V2668c0-1334-2-1289 62-1418 40-83 149-193 235-238 114-60 135-62 804-62 389 0 627 4 665 11 181 33 345 176 413 363l26 71 3 1242 3 1243h1233c1359 0 1269-4 1401 62 79 40 183 145 224 226 62 122 62 126 59 840-3 643-3 647-25 707-59 156-187 281-343 337l-65 23-1242 3-1242 2-3 1238c-3 1168-4 1240-22 1292-61 184-195 317-376 376-50 16-110 18-655 20-330 1-629-1-665-5z"
    transform="matrix(.1 0 0 -.1 0 1024)"
    />
    </svg>
);

