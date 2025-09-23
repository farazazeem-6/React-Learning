import React, { useEffect, useOptimistic, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState('');
  const [optSkills, setOptSkills] = useOptimistic(skills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    let response = await fetch("http://localhost:3000/skills");
    let result = await response.json();
    // console.log(result);
    setSkills(result);
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  const addSkills = async () => {
    if (!name.trim()) {
      alert("Enter a Skill");
      return;
    }
    setOptSkills((prev) => [...prev, { skill: name }]);
    let response = await fetch("http://localhost:3000/skills", {
      method: "Post",
      body: JSON.stringify({ skill: name }),
    });
    await sleep(3000);
    response = await response.json();

    if (response) {
      getSkills()
    }
    setName("");
  };

  return (
    <div>
      <form action={addSkills}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Skill"
        />
        <button>Add</button>
      </form>
      {optSkills.map((item,index) => (
        <p key={index}>{item.skill}</p>
      ))}
    </div>
  );
}

export default Skills;