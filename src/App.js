
import './App.css';
import Navbar from './pages/Navbar';
import FormComponent from './pages/FormComponent';
import Landing from './pages/Landing';

function App() {
  const componentStyle = {
    // margin: '25px',
  };

  return (
    <>
      <div style={componentStyle}><Navbar /></div>
      <Landing />
    </>

  );
}

export default App;
