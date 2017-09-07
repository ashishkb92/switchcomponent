import React, {Component} from 'react';

const EditJSON = (props) => {
  return (
    <div className="form-group">
  <label >JSON used:</label>
  <textarea className="form-control" rows="30" value={JSON.stringify(props, null, 2)} onChange={props.onChange}></textarea>
</div>
  )
}

export default EditJSON;
