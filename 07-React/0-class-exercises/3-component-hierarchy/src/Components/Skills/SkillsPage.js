import React from 'react';
import './SkillsPage.css'
import SkillItem from './SkillItem';
import { skills } from '../../Data/data';

const displaySkills = () => {
  return skills.map((skill, idx) => <SkillItem key={idx} skill={skill} />)
}

const SkillsPage = (props) => {
  console.log(props, "<---")
  return (
    <section id="skill-container">
      <h1>Skills Page</h1>
      <div id="skill-items">
        { displaySkills() }
      </div>
    </section>
  )
}

export default SkillsPage;