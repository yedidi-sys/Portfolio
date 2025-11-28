import './main.css';
function IdentityCard(props){
  const { name, imagesrc, role } = props;
  return(
    <div className="fill">
      <h1>Name : {name}</h1>
      {/* 🖼️ Fixed: Self-closing tag and dynamic alt text */}
      <img src={imagesrc} alt={`Picture of ${name}`} className="fill" /> 
      <p>Role: {role}</p>
    </div>
  );
}

export default IdentityCard;