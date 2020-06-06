import React from "react";

export default (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            version="1"
            viewBox="0 0 512 512"
        >
        <path fill={props.fill || "#9FA2B4"}
            d="M640 3410V2340h1710v2140H640V3410zM2770 3840v-640h1710v1280H2770v-640zM2770 1710V640h1710v2140H2770V1710zM640 1280V640h1710v1280H640v-640z"
            transform="matrix(.1 0 0 -.1 0 512)"
        />
        </svg>
);

