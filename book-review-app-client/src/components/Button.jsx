import React from "react";
import classNames from "classnames";

/**
 * Button component renders a customizable button with optional icon.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.caption - The caption text for the button.
 * @param {function} props.onClick - Callback function to handle button click.
 * @param {string} [props.width] - The width of the button.
 * @param {string} [props.background] - The background color of the button.
 * @param {React.ComponentType<{ className?: string }> | null} [props.icon] - Optional icon component to display inside the button.
 * @param {string} [props.textColor] - The text color of the button.
 * @param {string} [props.iconColor] - The color of the icon.
 * @param {string} [props.buttonClassName] - Custom class name for the button.
 * @param {string} [props.iconClassName] - Custom class name for the icon.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({
  caption = "Button",
  onClick = () => {},
  width = "w-auto",
  background = "bg-green",
  icon: Icon = null,
  textColor = "text-white",
  iconColor = "text-white",
  buttonClassName = "",
  iconClassName = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-md",
        background,
        width,
        "px-10 py-2 text-sm font-semibold shadow-sm my-2 flex justify-center items-center hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-300 ease-in-out",
        textColor,
        buttonClassName,
        { "opacity-50 cursor-not-allowed": disabled }
      )}
      disabled={disabled}
    >
      {Icon && (
        <Icon
          className={classNames("text-md mr-3", iconColor, iconClassName)}
        />
      )}
      <span>{caption}</span>
    </button>
  );
};

export default Button;
