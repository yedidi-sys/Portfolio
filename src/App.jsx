import IdentityCard from './IdentityCard.jsx';
import './main.css';
import NavigationBar from './navigationbar.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
   <div className='app-wrapper'>
      {/* The NavigationBar component will handle its own styling */}
       <NavigationBar />
      
      {/* Content Section */}
      <div className='main-content'>
        <h1 id='home'>HOME</h1>
        
        <div className='separator'></div> {/* CSS-driven horizontal line and spacing */}
        
        {/* Founders Section - ADDED id='about' */}
        <h2 className='founders-heading' id='about'>1. Founders</h2> 
        
        <div className="identity-card-container" id='foolos'>
          {/* IdentityCard components are correctly cased and rendered side-by-side via CSS on the parent */}
          <IdentityCard 
            id="one"
            name="IRISHYURA Yedidiah"
            imagesrc='./img1.png'
            role={'Project Manager and Software Developer'}
          />
          <IdentityCard 
            id="two"
            name="ISEZERANO Zebulun"
            imagesrc='./img2.png'
            role={'Assistant Manager and IoT Specialist'}
          />
          <IdentityCard
            id="three"
            name="IRISHYURA Yedidiah"
            imagesrc='./img1.png'
            role={'Software Engineer as well as UI/UX Designer'}          
          />
        </div>
      </div>
      <div className='separator'></div> {/* CSS-driven horizontal line and spacing */}
        
        {/* Projects Section - ADDED id='services' */}
        <h2 className='founders-heading' id='services'>2. PROJECTS </h2>
        <div className="projects-container" id='mine'>
          <Projects 
            projectName="  1. Smart Home Automation System"
            projectDescription="A system that allows users to control home appliances remotely via a mobile app."
            projectLink='https://www.openhab.org/'
            overview='./project1.png'
          />
          <Projects 
            projectName="  2. IoT-based Health Monitoring System"
            projectDescription="A wearable device that monitors vital signs and sends data to healthcare providers in real-time."
            projectLink='https://www.healthiot.com/'
            overview='./project2.png'
          />
        </div>
         
        {/* Contact Placeholder - ADDED id='contact' */}
        <h2 className='founders-heading' id='contact' style={{ marginTop: '50px' }}>3. CONTACT</h2>
        <p style={{ textAlign: 'center' }}>Contact information or form will go here.</p>
        <div className='separator'></div>
    </div>
  );
}

export default App;