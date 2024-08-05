import { Avatar, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";

const SearchUser = () => {
  const [username,setUsername] = useState('')
  const handleSearchUser = (e) => {
    setUsername(e.target.value)
    console.log("search user .......");
  };
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          type="text"
          className="bg-transparent border border-[#3b454] outline-none w-full px-5 py-3 rounded-full"
          placeholder="search user"
          onChange={handleSearchUser}
        />
        {username && (
        <Card className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
          <CardHeader
            onClick={() => {
              handleClick();
              setUsername("")
            }}
            avatar={
              <Avatar src="https://cdn.pixabay.com/photo/2022/03/14/15/39/skull-7068431_640.png" />
            }
            title="Abhilash s"
            subheader={"Abhilash"}
          />
        </Card>
      )}
      </div>
      
    </div>
  );
};

export default SearchUser;
