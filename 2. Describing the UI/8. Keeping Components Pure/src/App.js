import React from "react";

import Profile from "./Profile.js";

export default function App() {
  return (
    <React.Fragment>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </React.Fragment>
  );
}
