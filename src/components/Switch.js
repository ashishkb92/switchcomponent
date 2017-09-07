import React, { Component } from 'react';

const Switch = ({ className, label, disabled, handleClick, id, value, switchType, locked }) => {
  const localHandleClick = () => {
    if (!className.includes('disabled')) {
      handleClick(id, switchType);
    }
  };

  if (value) {
    className = `btn btn-default`;
  }

  if (locked || disabled) {
    className = `${className} disabled`;
  }

  return (
    <div className={className} onClick={localHandleClick}>
      <span>{label}</span>
    </div>
  );
};

export default Switch;
