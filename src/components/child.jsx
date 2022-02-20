import { useContext } from 'react'
import { ThemeContext, useTheme, withTheme } from 'styled-components'

function Child({theme}) {
    // const currentTheme = useTheme()
    // const currentTheme = useContext(ThemeContext)
    const currentTheme = theme
    console.log(currentTheme)
    return (
        <>
        
        </>
    )
}

export default  withTheme(Child)