import React from "react";
import StickyImage from "./StickyImage";
import OverLayCopy from "./OverLayCopy";

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  const IMG_PADDING = 12;
  return (
    <div
      className="px-4 sm:px-6 md:px-8 lg:px-12 mt-4 sm:mt-9 md:mt-8 lg:mt-12 "
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative">
        <StickyImage imgUrl={imgUrl} imgPadding={IMG_PADDING} />
        <OverLayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

export default TextParallaxContent;
