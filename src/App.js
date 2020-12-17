import React, { Component } from "react";
import Header from "./common/Header/Header";
import Navigation from "./common/Navigation/Navigation";
import Footer from "./common/Footer/Footer";
import SampleContent from "./pages/Sample";
import Flyout from "./common/Flyout/Flyout";
import Card from "./common/Cards/Card";
import MultiSelectBox from "./common/SelectBox/MultiSelectBox";
import Grid from '@material-ui/core/Grid';



import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }


    //  Function loads js files located in public folder
    var loadScript = function (src) {
    var tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(tag);
    }

    // <!-- import the Material javascript file -->
    loadScript('./js/bundle.js');
    loadScript('./js/jquery-3.3.1.min.js');
    loadScript('./js/bootstrap.js');
    loadScript('./js/popper.min.js');


  
    // <!-- for datatable -->
    loadScript('./js/jquery.dataTables.min.js');
    loadScript('./js/dataTables.bootstrap4.min.js');
    loadScript('./js/sampleDatatable.js');


    // <!-- for date picker -->
    loadScript('./js/bootstrap-datepicker.min.js');
  

    // <!-- multi dropdown -->
    loadScript('./js/fSelect.js');

    // loadScript('./js/mdb.js');


    // <!-- Initi Elements -->

    loadScript('./js/init.js');
    
  }

 

  render (){
    return (
      <Router>
       
          <Switch>
            <Route path="/home">
            <Home />
            </Route>
            <Route path="/sample">
                <Sample />
            </Route>
            <Route path="/">
                <Sample />
            </Route>
          </Switch>
        
      </Router>
      
    );
  }

 
  
}

function Sample(){
  return (
    <div className="app">
      


    <div className="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
    <main className="main-content" id="main-content">
    <div className="container white_bg no_padding">
      <Header/>
    </div>

    <Navigation />

    
   
    {/* <!-- Container start --> */}
    <div className="container white_bg body_min_height material-content">
        <div className="row">
            <div className="PageTitle">HOME</div>
          
        </div>
        
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '60vh' }}
            >

            <Grid item xs={3}>
                <Card />
                <select></select>
                
             </Grid>   

        </Grid> 

        
        

    </div>
    {/* Container Ends */}
    
    <Footer/>
    </main>
    </div>
    {/* End of App Draw */}
      
    </div>
  );
}

function Home(){
  return (
    <div className="app">
      <Flyout />


    <div className="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
    <main className="main-content" id="main-content">
    <div className="container white_bg no_padding">
      <Header/>
    </div>

    <Navigation />
   
    
    <Footer/>
    </main>
    </div>
    {/* End of App Draw */}

    </div>
  );
}

