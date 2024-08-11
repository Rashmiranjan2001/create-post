import React from 'react';
import './styles/input.scss';

interface IInputProps {
  type: HTMLInputElement['type']
  placeholder: HTMLInputElement['placeholder']
  label: HTMLLabelElement['textContent']
  name: HTMLInputElement['name']
  value: HTMLInputElement['value']
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IInputProps): JSX.Element => {
  return (
    <div className='input'>
      <label className='input__label'>
        {props.label}
      </label>
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
