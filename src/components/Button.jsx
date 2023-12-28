const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-opensans text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-persian-blue text-white border-persian-blue"
      } rounded-full ${fullWidth &&  "w-full"}"} `}
      onClick={onClick}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
