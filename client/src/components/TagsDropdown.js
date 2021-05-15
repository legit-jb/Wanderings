import React from "react";
import {fakeUser as user} from "../components/FakeDBUser";

const TagsDropdown = (props) => {
    console.log("this is in tagsdropdown props ",props);
    const {user:{usertags}} = props;
    console.log("TagsDropdown: this is usertags", usertags);
    return (
        <ul
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'
            >
                {usertags.map ((tag) =>(
                    <li className="tag-list-item clickable" key={user.id+tag}>{tag}</li>
                ))}
            </ul>
    )
}

export default TagsDropdown;