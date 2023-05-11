import React from "react";

export default function StoryTray({ stories }) {
  let newArray = [
    ...stories,
    {
      id: "create",
      label: "Create Story",
    },
  ];

  return (
    <ul>
      {newArray.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
