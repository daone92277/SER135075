import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';



export default class MultiSelectBox extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {


        const Options = this.props.Options;

        if(Options != null){

            const listItems = Options.map((option) =>
            

              <li
              className="js-filterable mdc-list-item"
              data-filter-criteria={option}
              key={option}
            >
              <label className="menu-item">
                <input
                  className="checkbox js-option"
                  type="checkbox"
                  value={option}
                  data-group={option}
                />

                <Checkbox className="checkbox js-option" 
              id={"checkbox-" + option}
              dataGroup={option} />


              
                <div className="choice-input"></div>
                <span>{option}</span>
              </label>
            </li>
            );
          
            
              //   return( <div className="mdc-select mdc-select--outlined">
              //   <div className="mdc-select__anchor">
              //     <i className="mdc-select__dropdown-icon"></i>
              //     <div id={this.props.id} className="mdc-select__selected-text" aria-labelledby="outlined-select-label" tabIndex="0" aria-disabled="false" aria-expanded="false"></div>
              //     <div className="mdc-notched-outline mdc-notched-outline--upgraded">
              //       <div className="mdc-notched-outline__leading"></div>
              //       <div className="mdc-notched-outline__notch" >
              //         <span id="outlined-select-label" className="mdc-floating-label" >{this.props.label}</span>
              //       </div>
              //       <div className="mdc-notched-outline__trailing"></div>
              //     </div>
              //   </div>
              
               
              //   <div className="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox" >
              //       <ul className="mdc-list">
              //       {listItems}
              //       </ul>
              //   </div>
              // </div>);
              return(
              
              
            
              
              <div className="select-menu js-select-menu" id="unique-id">
                
                <input
                  className="menu-state js-menu-state"
                  id="unique-id-menu-state"
                  type="checkbox"
                />
                <label
                  className="select-label js-select-label"
                  data-default-label={this.props.placeholder}
                  data-label={this.props.placeholder}
                  htmlFor="unique-id-menu-state"
                >
                  <div className="arrow">
                    <i className="mdc-select__dropdown-icon"></i>
                  </div>
                </label>


                <ul className="menu js-select-options mdc-menu mdc-menu-surface mdc-menu-surface--open">
                <li className="menu-item filter">
                  <input className="js-filter-input" type="text" placeholder="Search" />
                </li>
                <li className="menu-item check-all">
                  <div className="toggle-container">
                    <input
                      className="toggle js-check-all"
                      id="unique-id-check-all"
                      type="checkbox"
                    />
                    <label className="toggle-label" htmlFor="unique-id-check-all">
                      <span>Check all</span>
                    </label>
                  </div>
                </li>
                {listItems}


                </ul>

              </div>);

        }else{
            return(null);
        }
   

    
    }

}