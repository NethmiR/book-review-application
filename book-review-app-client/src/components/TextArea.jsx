import React from "react";
import classNames from "classnames";

/**
 * TextArea component renders a textarea with optional caption and error text.
 *
 * @param {Object} props - The props for the TextArea component.
 * @param {string} props.value - The value of the textarea.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @param {string} [props.caption] - Optional caption text displayed above the textarea.
 * @param {function} props.onChange - Callback function to handle changes in the textarea.
 * @param {boolean} [props.disabled] - Whether the textarea is disabled.
 * @param {string} [props.width] - The width of the textarea container.
 * @param {string} [props.containerClassName] - Custom class name for the textarea container.
 * @param {string} [props.captionClassName] - Custom class name for the caption.
 * @param {string} [props.textAreaClassName] - Custom class name for the textarea.
 * @param {string} [props.errorText] - Optional error text displayed below the textarea.
 * @param {string} [props.errorTextColor] - Optional error text color.
 * @param {number} [props.maxCharCount] - Optional maximum character count.
 * @param {number} [props.rows] - Optional number of rows for the textarea.
 * @param {boolean} [props.uppercase] - Whether the input text should be in uppercase.
 * @returns {JSX.Element} The rendered TextArea component.
 */
const TextArea = ({
  value = "",
  placeholder = "Placeholder",
  onChange = () => {},
  disabled = false,
  width = "w-full",
  containerClassName = "",
  captionClassName = "",
  textAreaClassName = "",
  caption,
  errorText,
  errorTextColor = "text-red",
  maxCharCount,
  rows = 4,
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
    <div className={classNames(width, containerClassName)}>
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
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        rows={rows}
        className={classNames(
          "block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-opacity-20 focus:ring-inset hover:ring-blue focus:ring-blue sm:text-sm sm:leading-6 duration-300 ease-in-out transition-all",
          textAreaClassName
        )}
      />
      <div className="flex justify-between mt-1 text-xs">
        {errorText && <p className={classNames(errorTextColor)}>{errorText}</p>}
        {maxCharCount && (
          <div className="text-gray-500">
            {value.length}/{maxCharCount} characters
          </div>
        )}
      </div>
    </div>
  );
};

export default TextArea;
