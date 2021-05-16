import React from "react";
import { UserContext } from "../contexts/UserContext";

const TagsDropdown = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        const {
          user,
          user: { usertags },
          setTag,
          currentTag,
        } = context;
        return (
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {usertags.map((tag) => (
              <li
                className="tag-list-item clickable"
                value={tag}
                key={tag}
                onClick={(e) => {
                  setTag(tag);
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        );
        // end context return
      }}
      {/* end userContext.Consumer callback function */}
    </UserContext.Consumer>
  );
  // end return
};

export default TagsDropdown;
