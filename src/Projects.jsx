import './projects.css';

// 1. Accept 'props' as an argument, or destructure it directly in the function signature.
function Projects(props) { 
    // 2. Destructure properties from the 'props' argument.
    const { projectName, projectDescription, projectLink, overview } = props; 
    
    // OR, even cleaner (recommended):
    // function Projects({ projectName, projectDescription, projectLink, overview }) {
    // ... 
    
    return (
        <div>
            <h1>ProjectName: {projectName}</h1>
            <p>Project Description: {projectDescription} </p>
            <a href={projectLink}>Click here to view our project</a>
            <img src={overview} alt={`Picture of ${projectName}`} className="folol"/>
        </div>
    );
} 
export default Projects;