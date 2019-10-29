import React from "react";
import User from "./User";

export default function Users() {
  return (
      <div className="right">
        <User src="https://jooinn.com/images/man-19.jpg"
              alt="man"
              name="Scott"
        />
        <div className="users__block">
          <User src="https://jooinn.com/images/man-19.jpg"
                alt="man"
                name="Scott"
                min
          />
          <User src="https://jooinn.com/images/man-19.jpg"
                alt="man"
                name="Scott"
                min
          />
          <User src="https://jooinn.com/images/man-19.jpg"
                alt="man"
                name="Scott"
                min
          />
          <User src="https://jooinn.com/images/man-19.jpg"
                alt="man"
                name="Scott"
                min
          />
        </div>
      </div>
  )
}
