import React, {Component} from 'react';
import SCBSwitchList from './components/SCBSwitchList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

const SwitchDataOption = {
  switchType: 'optionList',
  locked: false,
  mandatory: false,
  parentComponentId: 1,
  visible: true,
  controllerAction: 'switchDataReciever',
  options: [
    {
      id: 1,
      label: 'Payee',
      disabled: false,
      tooltipText: 'Select Me',
      value: false
    }, {
      id: 2,
      label: 'Payer',
      disabled: false,
      tooltipText: 'Select Me',
      value: false
    }, {
      id: 3,
      label: 'Shared',
      disabled: false,
      tooltipText: 'Select Me',
      value: false
    }
  ]
};

const SwitchDataChecklist = {
  switchType: 'checkList',
  locked: false,
  mandatory: false,
  parentComponentId: 1,
  visible: true,
  tooltipAlignment: 'left',
  controllerAction: 'switchDataReciever',
  options: [
    {
      id: 1,
      label: 'Item 1',
      disabled: true,
      tooltipText: "Select Me",
      value: false
    }, {
      id: 2,
      label: 'Item 2',
      disabled: false,
      tooltipText: "Select Me",
      value: false
    }, {
      id: 3,
      label: 'Item 3',
      disabled: false,
      tooltipText: "Select Me",
      value: false
    }, {
      id: 4,
      label: 'Item 4',
      disabled: false,
      tooltipText: "Select Me",
      value: false
    }
  ]
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      SwitchDataOption,
      SwitchDataChecklist
    }
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <SCBSwitchList {...this.state.SwitchDataOption}>Option List Switch</SCBSwitchList>
        </div>
        <div className="jumbotron">
          <SCBSwitchList {...this.state.SwitchDataChecklist}>Checklist List Switch</SCBSwitchList>
        </div>
      </div>
    )
  }
}

export default App;
