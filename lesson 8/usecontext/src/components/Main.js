import React from 'react'
import { useTheme } from './ThemeContext'

export default function Main() {
  const { theme, clickHandler } = useTheme();
  return (
    <div className={theme}>
        <h2>
            Main
        </h2>
    </div>
  )
}
