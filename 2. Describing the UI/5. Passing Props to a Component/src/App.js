import React from "react";
import { getImageUrl } from "./utils.js";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        profile={{
          name: "Maria Skłodowska-Curie",
          imageUrl: "szV5sdG",
          imageWidth: 70,
          imageHeight: 70,
          profession: "physicist and chemist",
          awardCount: 4,
          awardContent:
            "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered: "polonium (element)",
        }}
      />
      <Profile
        profile={{
          name: "Katsuko Saruhashi",
          imageUrl: "YfeOqp2",
          imageWidth: 70,
          imageHeight: 70,
          profession: "geochemist",
          awardCount: 2,
          awardContent: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discovered: "a method for measuring carbon dioxide in seawater",
        }}
      />
    </div>
  );
}

function Profile({ profile }) {
  return (
    <section className="profile">
      <h2>{profile.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(profile.imageUrl)}
        alt={profile.name}
        width={profile.imageWidth}
        height={profile.imageHeight}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profile.profession}
        </li>
        <li>
          <b>Awards: {profile.awardCount} </b>
          {profile.awardContent}
        </li>
        <li>
          <b>Discovered: </b>
          {profile.discovered}
        </li>
      </ul>
    </section>
  );
}
