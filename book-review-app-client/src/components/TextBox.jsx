import React from "react";
import classNames from "classnames";

/**
 * TextBox component renders an input field with optional caption and error text.
 *
 * @param {Object} props - The props for the TextBox component.
 * @param {string} props.value - The value of the input field.
 * @param {string} [props.type] - The type of the input field (e.g., text, password).
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} [props.caption] - Optional caption text displayed above the input field.
 * @param {string} [props.autoComplete] - The autoComplete attribute for the input field.
 * @param {function} props.onChange - Callback function to handle changes in the input field.
 * @param {boolean} [props.disabled] - Whether the input field is disabled.
 * @param {string} [props.width] - The width of the input field container.
 * @param {string} [props.componentClassName] - Custom class name for the input field container.
 * @param {string} [props.captionClassName] - Custom class name for the caption.
 * @param {string} [props.inputClassName] - Custom class name for the input field.
 * @param {string} [props.errorText] - Optional error text displayed below the input field.
 * @param {string} [props.errorTextColor] - Optional error text color.
 * @param {number} [props.maxCharCount] - Optional maximum character count.
 * @param {function} [props.onKeyDown] - Callback function to handle key press events in the input field.
 * @param {boolean} [props.uppercase] - Whether the input text should be in uppercase.
 * @returns {JSX.Element} The rendered TextBox component.
 */
const TextBox = ({
  value = "",
  type = "text",
  placeholder = "Placeholder",
  autoComplete = "off",
  onChange = () => {},
  disabled = false,
  width = "w-full",
  componentClassName = "",
  captionClassName = "",
  inputClassName = "",
  caption,
  errorText,
  errorTextColor = "text-red",
  maxCharCount,
  onKeyDown,
  uppercase = false,
}) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (uppercase) {
      inputValue = inputValue.toUpperCase();
    }
    if (!maxCharCount || inputValue.length <= maxCharCount) {
      onChange(inputValue);
    }
  };

  return (
    <div className={classNames(width, componentClassName)}>
      {caption && (
        <label
          className={classNames(
            "block mb-1 text-sm font-medium text-gray-700",
            captionClassName
          )}
        >
          {caption}
        </label>
      )}
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={classNames(
          "block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-opacity-20 focus:ring-inset hover:ring-blue focus:ring-blue sm:text-sm sm:leading-6 duration-300 ease-in-out transition-all",
          inputClassName
        )}
      />
      {errorText && (
        <p className={classNames("mt-1 text-xs", errorTextColor)}>
          {errorText}
        </p>
      )}
    </div>
  );
};

export default TextBox;
