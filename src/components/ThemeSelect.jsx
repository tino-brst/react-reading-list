import React from 'react';
import { Theme } from '../constants';

export const ThemeSelect = ({ value, onChange }) => {
  return (
    <select
      className="ThemeSelect"
      value={value}
      onChange={onChange}
    >
      <option value={Theme.light}>Light</option>
      <option value={Theme.dark}>Dark</option>
      <option value={Theme.sepia}>Sepia</option>
    </select>
  );
}