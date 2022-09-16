import React from "react";

interface DropdownProps {
  placeholder: string,
  options: Array<string>,
}

export default function Dropdown(props: DropdownProps) {
  return (
    <select className="h-10 dark-mode-style dark:light-mode-style text-xs p-2" name={props.placeholder} aria-labelledby={props.placeholder + " dropdown menu"}>
      <option value="" disabled hidden>Select a {props.placeholder}...</option>
      {props.options.map((option) =>
        <option value={option}>{option}</option>
      )};
    </select>
  );
}