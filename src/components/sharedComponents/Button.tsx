import './styles/button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
}

const getButtonClass = (variant: string, size: string): string => {
  const buttonClass = 'button';
  let buttonVariantClass = buttonClass;
  let buttonSizeClass = buttonClass;
  switch (variant) {
    case 'primary':
      buttonVariantClass += '--primary';
      break;
    case 'secondary':
      buttonVariantClass += '--secondary';
      break;
    default:
      buttonVariantClass += '--primary';
  }

  switch (size) {
    case 'small':
      buttonSizeClass += '--small';
      break;
    case 'medium':
      buttonSizeClass += '--medium';
      break;
    case 'large':
      buttonSizeClass += '--large';
      break;
    default:
      buttonSizeClass += '--medium';
  }

  return `${buttonClass} ${buttonVariantClass} ${buttonSizeClass}`;
};

const Button = (props: IButtonProps): JSX.Element => {
  const { text, variant, size, ...otherProps } = props;

  return (
    <button
      className={getButtonClass(variant, size)}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
