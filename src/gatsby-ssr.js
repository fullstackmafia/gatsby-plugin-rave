import React from "react";

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  return setPostBodyComponents([
    <script
      id="stripe-js"
      key="gatsby-plugin-stripe"
      src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"
      async={options.async}
    />
  ]);
};