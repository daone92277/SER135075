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
                  aria-label={option}
                />

                <Checkbox aria={option} className="checkbox js-option" 
              id={"checkbox-" + option}
              dataGroup={option} />


              
                <div className="choice-input"></div>
                <span>{option}</span>
              </label>
            </li>
            );
          
           
              return(
          
              <div className="select-menu js-select-menu">
                
                <input
                  className="menu-state js-menu-state sr-only"
                  id={this.props.id}
                type="checkbox"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                 
                />
                <label  
                  className="select-label js-select-label"
                  data-default-label={this.props.placeholder}
                  aria-label={this.props.placeholder}
                  data-label={this.props.placeholder}
                  htmlFor={this.props.id}
                >
                  <div className="arrow">
                    <i className="mdc-select__dropdown-icon"></i>
                  </div>

                  <span className="select-menu-value"></span>
                </label>




                <ul  className="menu js-select-options mdc-menu mdc-menu-surface animated mdc-menu-surface--open">
                <li className="menu-item filter">
                  <input className="js-filter-input" type="text" aria-label={"search " + this.props.id} placeholder="Search" />
                </li>
                <li className="menu-item check-all">
                  <div className="toggle-container">
                    <input
                      className="toggle js-check-all"
                      id="unique-id-check-all"
                      type="checkbox"
                      data-group="check-all"
                    />
                    {/* <label className="toggle-label" htmlFor="unique-id-check-all">
                      <Checkbox className="check-all" htmlFor="unique-id-check-all" dataGroup="check-all" />
                      <span>Check all</span>
                    </label> */}
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