import React from 'react'

import './Projects.css'
const featured_projects = [
  {
    title: "Facetune",
    description: "A video Calling Chat App",
    url: "https://marketplace.visualstudio.com/items?itemName=AbidemiOpe.darkchill&ssr=false#overview",
    image: `${process.env.PUBLIC_URL}/assets/videocall.jpg`,
    repository: "https://github.com/OpeAbidemi/darkchill",
    
      
    
  },
    {
      title: "DeepBrain",
      description: "A Face Recognization App from any images from internet",
      url: "http://beatfrowaitlist.netlify.app/",
      image: `${process.env.PUBLIC_URL}/assets/deepbrain.jpg`,
      repository: null,
    
    },
    {
      title: "SkipSchool",
      description: "A Landing Page For A Students Community Startup",
      url: "https://skipschool-web.pages.dev/",
      image: `${process.env.PUBLIC_URL}/assets/skip.jpg`,
      repository: "https://github.com/rudreshh7/skipschool",
      
        
      
    },
    {
      title: "Rudresh-OS",
      description:
        "An Operating System running On Web  ",
      url: "https://github.com/renli-tech/hamburger",
      image: `${process.env.PUBLIC_URL}/assets/os.jpg`,
      repository: "https://github.com/renli-tech/hamburger",
      
      
    },
    
    {
      title: "Mr.Chat",
      description: "A fully functional chat Application on web",
      url: "https://on-os.vercel.app/",
      image: `${process.env.PUBLIC_URL}/assets/chatapp.jpg`,
      repository: "https://github.com/asterix-oss/on-os",
      
    },
    
    {
      title: "MovieReview",
      description: "A Movie Review App That takes fetch data from TMDB api",
      url: "https://www.npmjs.com/package/@beyond-ui/react",
      image: `${process.env.PUBLIC_URL}/assets/moviereview.jpg`,
      repository: "https://github.com/renli-tech/Beyond",
     
    },
    {
      title: "sneakers",
      description: "Fully Functional Ecommerce website for Sneakers",
      url: "https://www.olimf.com/",
      image: `${process.env.PUBLIC_URL}/assets/Ecommerce.jpg`,
      repository: null,
      
    },
    {
      title: "WallpaperVerse",
      description:
        "An Obperating System Made On Web  ",
      url: "https://wallpaper-app-rudresh.pages.dev/",
      image: `${process.env.PUBLIC_URL}/assets/wallpaper.jpg`,
      repository: "https://github.com/renli-tech/hamburger",
      
      
    },

    {
      title: "DropNotes",
      description: "A CRUD Notes Taking App With Some Cool Features",
      url: "https://on-os.vercel.app/",
      image: `${process.env.PUBLIC_URL}/assets/notes.jpeg`,
      repository: "https://github.com/asterix-oss/on-os",
      
    },
  ];

// {featured_projects.map((project) => (  ))}

const Projects = () => {
  return (
    <>

    <div className='projectHeading'><h3>Projects</h3></div>

    <div className='container'>
    {featured_projects.map((projects, url) => {
            return (
            
                <div className='projectBox'>
                   
                        <img className ="imgSize" src={projects.image} alt={projects.title} />
                    
                    <div className='projectTitle'>{projects.title}</div>
                    <div className='projectInfo'>{projects.description}</div>
                   
                   <div className='gitHubRu'>
                   <a className='gitHubRu' href={projects.url}>View</a>
                    <a className='gitHubRu' href={projects.repository}>Github</a>
                   </div>
                    

                    

                </div>
               
               
            );
          })}

    </div>



    </>
  )
}

export default Projects