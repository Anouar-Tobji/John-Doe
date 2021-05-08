import logo from './logo.svg';
import './App.css';
import Nav  from'./component/Nav.js'
import Introsection from './component/Introsection';
import Footer from './component/Footer';
import "./component/Nav.css"
import Projectcard from './component/Projectcard';
function App() {
const project =[
  {
name :"react1",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
},
{
  name :"react2",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
},
{name :"react3",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
},
{name :"react4",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
},
{name :"react5",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
},
{name :"react6",
description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsamullam autem consequuntur.",
github:"Github"
}
]

return (
    <body>
     <Nav />
     <Introsection />
    {/* <Projectcard Myproject={project}/> */}
    <div className="project">{
      project.map((project,i)=><Projectcard key={i} Myproject={project} />)}
    </div>
     <Footer />
    </body>
  );
}

export default App;
