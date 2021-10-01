import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import DropDown from './components/DropDown';
import MyGalleries from './components/MyGalleries';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyNavbar />
      <DropDown />
      <MyGalleries query={"avengers"}/>
      <MyGalleries query={"harry potter"}/>
      <MyGalleries query={"batman"}/>
      <MyFooter />
    </div>
  );
}

export default App;
