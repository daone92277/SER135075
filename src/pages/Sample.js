import React, { Component } from "react";
import Alert from "../common/Alert/Alert";
import Button from "../common/Button/Button";
import TextField from "../common/TextField/TextField";
import DatePicker from "../common/DatePicker/DatePicker";
import Modal from "../common/Modal/Modal";
import Accordion from "../common/Accordion/Accordion";
import Radio from "../common/Radio/Radio";
import Card from "../common/Cards/Card";
import List from "../common/List/List";
import Checkbox from "../common/Checkbox/Checkbox";
import SelectBox from "../common/SelectBox/SelectBox";
import TabsSample from "../common/Tabs/TabsSample";
import Toggle from "../common/Toggle/Toggle";
import MultiSelectBox from "../common/SelectBox/MultiSelectBox";

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Snippet for Selectbox
    const SelectFieldOptions = ["Version 1", "Version 2", "Version 3"];
    const SelectMultiFieldOptions = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    const ListData = ["Version 1", "Version 2", "Version 3"];
    return (
      <React.Fragment>
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                {/* <!-- Primary & Secondary Buttons --> */}
                <div className="col-md-12 mb-5">
                  <h5>Primary Buttons & Secondary Buttons</h5>
                  <Button
                    id="customId"
                    label="Custom Button"
                    type="primary"
                    AdditionalClasses=""
                  />

                  <Button
                    id=""
                    label="Primary Hovered/Active"
                    type="primary"
                    AdditionalClasses="active"
                  />

                  <Button
                    id=""
                    label="Secondary"
                    type="secondary"
                    AdditionalClasses=""
                  />

                  <Button
                    id=""
                    label="Secondary Hovered/Active"
                    type="secondary"
                    AdditionalClasses="active"
                  />
                    <Button
                    id=""
                    label="Disabled"
                    type="secondary"
                    AdditionalClasses=""
                    disabled="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Buttons Ends */}

        {/*  <!-- Flyouts --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <h5>Flyouts</h5>
                </div>
                <div className="col-md-12 position-relative">
                  <header className="mdc-top-app-bar app-bar" id="app-bar">
                    <div className="mdc-top-app-bar__row">
                      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
                          menu
                        </button>
                        <span className="mdc-top-app-bar__title">
                          Click icon to open fly out
                        </span>
                      </section>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Flyouts --> Ends */}

        {/* <!-- Text Fields --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-12">
                  <h5>Text Fields</h5>
                </div>
                <div className="col-md-4">
                  <TextField
                    label="First Name"
                    className="First-name"
                    id="first-name"
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    label="Last Name"
                    className="last-name"
                    id="last-name"
                    type="text"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    label="Email"
                    className="email-address"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Text Fields Ends --> */}

        {/* <!-- Select Box  --> */}

        <div className="row">
          <div className="col-md-4">
            <SelectBox
              id="SelectBox"
              label="Select Box"
              Options={SelectFieldOptions}
            />
          </div>

          <div className="col-md-4">

          <MultiSelectBox aria-label="States" id="States" Options={SelectMultiFieldOptions} placeholder="Select More than one" />
          </div>
          <div className="col-md-4">
          <MultiSelectBox aria-label="Software Version" id="Version" Options={SelectFieldOptions} placeholder="Select More than one" /></div>

        </div>

        {/* <!-- Select Box Ends --> */}

        
        {/* <!-- Checkboxs --> */}
        <div className="row">
          <div className="col-md-4">
            <Checkbox
              label="My Checkbox Label 1"
              id="checkbox-1"
              htmlFor="checkbox-1"
            />
          </div>
          <div className="col-md-4">
            <Checkbox
              label="My Checkbox Label 2"
              id="checkbox-2"
              htmlFor="checkbox-2"
            />
          </div>
          <div className="col-md-4">
            <Checkbox
              label="My Checkbox Label 1"
              id="checkbox-1"
              htmlFor="checkbox-1"
              disable="true"
            />
          </div>
        </div>

        {/* <!-- Radio Buttons --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-4 md-radio">
                  <Radio
                    FieldLabel="Field Name 1"
                    radioOptionOneId="radio-1"
                    radioOptionTwoId="radio-2"
                    name="radios1"
                    OptionLabelOne="Option 1"
                    OptionLabelTwo="Option 2"
                  />
                </div>
                <div className="col-md-4 md-radio">
                  <Radio
                    FieldLabel="Field Name 2"
                    radioOptionOneId="radio-3"
                    radioOptionTwoId="radio-4"
                    name="radios2"
                    OptionLabelOne="Yes"
                    OptionLabelTwo="No"
                  />
                </div>

                <div className="col-md-4 md-radio">
                  <Radio
                    FieldLabel="Field Name 3"
                    radioOptionOneId="radio-3"
                    radioOptionTwoId="radio-4"
                    name="radios3"
                    OptionLabelOne="Enable"
                    OptionLabelTwo="Disable"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Radio Ends --> */}

        {/*  */}
        <div className="row">
          <div className="col-md-2 ml-2">
            <Toggle label="off/on" id="customID" checked="true" />
          </div>
          <div className="col-md-2 ml-2">
            <Toggle label="off/on" id="basic-switchID" />
          </div>
        </div>
        {/*  */}

        {/* <!-- Radio Buttons --> */}

        {/* Tabs Begins */}

        <TabsSample />
        {/* Tabs Ends */}

        {/* Cards */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="col-md-3">
                <Card
                  CardTitle="Card Title"
                  CardSubTitle="Subtitle Text"
                  Body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                  Action="Action 1"
                  ActionTwo="Action 2"
                />
              </div>
              <div className="col-md-3">
                <Card
                  CardTitle="Card Title"
                  CardSubTitle="Subtitle"
                  Body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  CardMedia="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                  Action="Action 1"
                  ActionTwo="Action 2"
                />
              </div>
              <div className="col-md-3">
                <Card
                  CardTitle="Card Title"
                  CardSubTitle="Subtitle"
                  Body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  CardMediaInsert="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                  Action="Action 1"
                  ActionTwo="Action 2"
                  Avatar="images/BR_Abstract_Digital_May2019_121.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Tooltips --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                {/* <!-- Primary & Secondary Buttons --> */}
                <div className="col-md-12 mb-5">
                  <h5>Tooltips</h5>

                  <Button
                    id=""
                    label="Tooltip on top"
                    type="btn-secondary"
                    AdditionalClasses=""
                    dataToggle="tooltip"
                    dataPlacement="top"
                    title="Tooltip on top"
                  />

                  <Button
                    id=""
                    label="Tooltip on right"
                    type="btn-secondary"
                    AdditionalClasses=""
                    dataToggle="tooltip"
                    dataPlacement="right"
                    title="Tooltip on right"
                  />
                  <Button
                    id=""
                    label="Tooltip on bottom"
                    type="btn-secondary"
                    AdditionalClasses=""
                    dataToggle="tooltip"
                    dataPlacement="bottom"
                    title="Tooltip on bottom"
                  />
                  <Button
                    id=""
                    label="Tooltip on left"
                    type="btn-secondary"
                    AdditionalClasses=""
                    dataToggle="tooltip"
                    dataPlacement="left"
                    title="Tooltip on left"
                  />

                  <Button
                    id=""
                    label="Tooltip with HTML"
                    type="btn-secondary"
                    AdditionalClasses=""
                    dataToggle="tooltip"
                    dataPlacement="top"
                    dataHTML="true"
                    title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Tooltips Ends --> */}

        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                {/* Date Picker */}
                <div className="col-md-12">
                  <h5>Date Picker</h5>
                </div>
                <div className="col-md-4">
                  <DatePicker id="StartDate" label="Start Date" />
                </div>
                <div className="col-md-4">
                  <DatePicker id="EndDate" label="End Date" />
                </div>
                <div className="col-md-4">
                  <DatePicker id="CustomDate" label="Custom Label" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Date Picker Ends */}

        {/* <!-- Accordion --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-12">
                  <h5>Accordion</h5>
                  <div className="jumbotron">
                    <div className="card mt-3 code-snippet">
                      <Accordion
                        title="Sample Accordion Title"
                        text="Open or Close Panel
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Accordion Ends --> */}

        {/* <!-- Datatables --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-12">
                  <h5>Datatables</h5>
                  <div className="table-responsive">
                    <div id="base_datatable"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Datatables Ends --> */}

        {/* <!-- Lists --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              {/* <!-- Primary Buttons --> */}
              <div className="row">
                <div className="col-md-12">
                  <h5>Lists</h5>

                  <List Data={ListData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Lists --> Ends */}

        {/* <!-- Alerts --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row" id="section-alerts">
                <div className="col-12">
                  <Alert status="success" message="Success!" />
                  <Alert status="info" message="Info!" />
                  <Alert status="warning" message="Warning!" />
                  <Alert status="danger" message="Danger!" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="form-group row">
          <div className="col-md-4">
          <TextField
                    label="First Name"
                    className="First-name"
                    id="customer-first-name"
                    type="text"
                  />
          </div>
          <div className="col-md-4">
          <TextField
                    label="Last Name"
                    className="Last-name"
                    id="customer-last-name"
                    type="text"
                  />
          </div>
        </div>
        <div className="form-group row  mt-5">
          
                <div className="col-lg-4 col-md-5 md-radio">
                  <Radio
                    FieldLabel="Field Name 1"
                    radioOptionOneId="radio-1"
                    radioOptionTwoId="radio-2"
                    name="radios1"
                    OptionLabelOne="Option 1"
                    OptionLabelTwo="Option 2"
                  />
                </div>
                <div className="col-lg-4 col-md-5 md-radio">
                  <Radio
                    FieldLabel="Field Name 2"
                    radioOptionOneId="radio-3"
                    radioOptionTwoId="radio-4"
                    name="radios2"
                    OptionLabelOne="Yes"
                    OptionLabelTwo="No"
                  />
                </div>

               

         
        </div>
        <div className="form-group row my-5">
       
          <div className="col-md-4">
            <DatePicker id="CustomDateId" label="Choose Date" />
          </div>
          <div className="col-md-4">
          <TextField
                    label="Field Name"
                    className="field-name"
                    id="field-name"
                    type="text"
                  />
            
          </div>
          <div className="col-md-4 mdc-select-w-form">
           
          <SelectBox
              id="SelectBox"
              label="Select Box"
              Options={SelectFieldOptions}
            />
          </div>
          
        </div>
        <div className="form-group row pt-5 border-top mx-2">
          <div className=" ml-auto float-right">
          <Button
                    id=""
                    label="Cancel"
                    type="secondary"
                    AdditionalClasses=""
                  />
                  <Button
                    id="customId"
                    label="Save"
                    type="primary"
                    AdditionalClasses=""
                  />

                 
          </div>
        </div>

        {/* Form ends */}

        {/* <!-- Modals --> */}
        <div className="row">
          <div className="scrollspy-item">
            <div className="scrollspy-content">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <h5>Modals</h5>
                  <Button
                    id=""
                    label="Small Modal"
                    type="primary"
                    AdditionalClasses=""
                    dataToggle="modal"
                    dataTarget="#myModal"
                  />

                  <Button
                    id=""
                    label="Regular Modal"
                    type="primary"
                    AdditionalClasses=""
                    dataToggle="modal"
                    dataTarget="#mymodal-lg"
                  />

                  <Button
                    id=""
                    label="Large Modal"
                    type="primary"
                    AdditionalClasses=""
                    dataToggle="modal"
                    dataTarget="#mymodal-x-lg"
                  />
                </div>
              </div>

              <Modal
                id="myModal"
                size="modal-sm"
                ariaLabel="mySmallModalLabel"
                title="Custom Title For Small Modal"
                primaryButtonLabel="Save"
                secondaryButtonLabel="Cancel"
                primaryButtonId=""
                secondaryButtonId=""
                Content="Modal Body Text Here."
              />

              <Modal
                id="mymodal-lg"
                size="modal-x-lg"
                ariaLabel="myLargeModalLabel"
                title="Custom Title For Regular Modal"
                primaryButtonLabel="Save"
                secondaryButtonLabel="Cancel"
                primaryButtonId=""
                secondaryButtonId=""
                Content="Modal Body Text Here."
              />

              <Modal
                id="mymodal-x-lg"
                size="modal-lg"
                ariaLabel="myXLargeModalLabel"
                title="Custom Title For Large Modal"
                primaryButtonLabel="Save"
                secondaryButtonLabel="Cancel"
                primaryButtonId=""
                secondaryButtonId=""
                Content="Modal Body Text Here."
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
