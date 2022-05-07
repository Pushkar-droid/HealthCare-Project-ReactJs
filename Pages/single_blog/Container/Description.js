import React from "react";
import { NavLink } from "react-router-dom";

function Description() {
  return (
    <>
      <div className="post-info mtb_20 ">
        <h2 className="mb_10">
          <NavLink to="/single_blog">
            Unknown printer took a galley book.
          </NavLink>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          provident minus similique porro assumenda illo dolore ducimus vero
          ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora
          ab Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repudiandae provident minus similique porro assumenda illo dolore
          ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat
          facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Repudiandae provident minus similique porro assumenda illo
          dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium
          repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repudiandae provident minus similique porro
          assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti
          accusantium repellat facilis tempora ab
        </p>
      </div>
      <blockquote>
        consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi
        malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque
        interdum purus. In mi justo, consectetur tincidunt sapien eget,
        venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt
        aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel,
        vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus
        ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet
        tempus mollis, mauris ante tempor risu
      </blockquote>
      etur adipisicing elit. Repudiandae provident minus similique porro
      assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti
      accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Repudiandae provident minus similique porro
      assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti
      accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet,
      consectet
      <div className="details mtb_20">
        <div className="date">
          <i className="fa fa-calendar" aria-hidden="true" />
          11 May 2017
        </div>
      </div>
    </>
  );
}

export default Description;
