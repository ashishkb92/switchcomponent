import React, {Component} from 'react';
import Switch from './Switch';
import EditJSON from './EditJSON';


class SCBSwitchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(id, switchType) {
    var updatedOptions = this.state.options.map(option => {
      if (option.id === id) {
        option.value = !option.value;
      } else {
        if (switchType === 'optionList') {
          option.value = false;
        }
      }
      return option;
    });
    this.setState({options: updatedOptions});
  }

  handleChange(event) {

    let parsedObj;
    try {
      parsedObj = JSON.parse(event.target.value);
      this.setState({
        ...parsedObj
      });
    } catch (e) {
      return;
    }
  }

  render() {
    const lock = this.state.locked
      ? <span className="glyphicon glyphicon-lock"></span>
      : null;
    const visible = this.state.visible
      ? null
      : {
        visibility: 'hidden'
      }
    const buttonGroupMargin = {
      marginTop: '60px'
    }
    return (
      <div className="row">
        <h2>{this.props.children}</h2>
        <hr />
        <div className="col-xs-8 col-sm-8 col-md-8">
          <div className="form-group ">
            <label>JSON used:</label>
            <textarea className="form-control" rows="30" value={JSON.stringify(this.state, null, 2)} onChange={this.handleChange}/>
          </div>
        </div >
        <div className="col-sm-4 col-xs-4 col-md-4">
          <div className="btn-group" style={visible,
          buttonGroupMargin}>
            {this.state.options.map(option => (<Switch key={option.id} className="btn btn-primary" handleClick={this.handleClick} {...option} locked={this.state.locked} switchType={this.state.switchType}/>))}
            {lock}
          </div>

        </div>

      </div>
    );
  }
}

export default SCBSwitchList;

//<EditJSON {...this.state} onChange={this.handleChange}/>
