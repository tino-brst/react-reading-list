import React from 'react'
import { Theme } from '../constants'

type Props = {
  value: Theme
  onChange: (value: Theme) => void
}

export const ThemeSelect: React.FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  return (
    <select
      className="ThemeSelect"
      value={value}
      onChange={(event) => onChange(event.target.value as Theme)}
    >
      <option value={Theme.light}>Light</option>
      <option value={Theme.dark}>Dark</option>
      <option value={Theme.sepia}>Sepia</option>
      {/* TODO go through the Theme enum options programmatically */}
      {/* avoids the chance of forgetting to add the option by hand */}
    </select>
  )
}
