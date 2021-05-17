import React from "react";
import { UserContext } from "../contexts/UserContext";

const TagsDropdown = () => {
  
  return (
    <UserContext.Consumer>{(context) =>{
        const {user, user: {usertags}, setTag, currentTag} = context;
        console.log ("TagsDropDown: this currentTag ", currentTag);
        return (
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {usertags.map((tag) => (
              <li className="tag-list-item clickable" value={tag} key={tag} onClick={e => {
                setTag(tag);
                console.log ("TagsDropdown: this is the clicked value ", e.target.value);
                
              }}>
                {tag}
              </li>
            ))}
            {console.log ("TagsDropdown: this is the state ", context)}
          </ul>
          
        )
        // end context return
    }}
    {/* end userContext.Consumer callback function */} 
    </UserContext.Consumer>
  );
  // end return
};

export default TagsDropdown;
