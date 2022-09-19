import React from 'react'
import './Technologies.css';
const technologies = [
   
    {
      name: "JavaScript",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "React",
    },
    {
      name: "Next.js",
    },
    {
      name: "Sass",
    },
    {
      name: "TailwindCSS",
    },
    {
      name: "Node.js",
    },
    {
      name: "Express",
    },
   
    {
      name: "MongoDB",
    },
    {
        name: "Figma",
      },
      
      
      {
        name: "Python",
      },
      {
        name: "Firebase",
      },
      {
        name: "C++",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "MySQL",
      },
      
  
  
  ];

const Technologies = () => {
  return (
<>
<div><h3>Technologies</h3></div>

<div className='cards'>

{technologies.map((technology, index) => {
            return (
              <div  key={index} className='technology'>
                <span className='text-base'>{technology.name}</span>
              </div>
            );
          })}

    
</div>
</>

  )
}

export default Technologies