import React from 'react';
import './styles/input.scss';

interface IInputProps {
  type: HTMLInputElement['type']
  placeholder: HTMLInputElement['placeholder']
  label: HTMLLabelElement['textContent']
  name: HTMLInputElement['name']
  value: HTMLInputElement['value']
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  text: string // Add this line
}

const Input = (props: IInputProps): JSX.Element => {
  return (
    <div className='input'>
      <div className='input__label-container'>
        <label className='input__label'>
          {props.label}
        </label>
        <span className='input__text'>
          {props.text}
        </span>
      </div>
      <input
        className='input__box'
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
