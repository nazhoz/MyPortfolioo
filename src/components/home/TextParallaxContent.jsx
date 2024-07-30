import React from "react";
import StickyImage from "./StickyImage";
import OverLayCopy from "./OverLayCopy";

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  const IMG_PADDING = 12;
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} imgPadding={IMG_PADDING} />
        <OverLayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

export default TextParallaxContent;
