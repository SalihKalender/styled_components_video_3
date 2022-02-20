import styled, { ThemeProvider } from 'styled-components'
import Child from './child'

const theme = {
    color: '#07A151',
    bg: '#9F9CA0'
}

const Wrapper = styled.div`
    color: ${props => props.theme.color};
    background: ${props => props.theme.bg}
`
const Button = styled.button`
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.color};
`

Button.defaultProps = {
    theme: {
        color: '#ADC937'
    }
}

const theme_2 = {
    color: '#FD16BB',
    bg: '#E32928'
}

const PhragraphComp = styled.p`
    color: ${props => props.theme.color};
    background: ${props => props.theme.bg}
`

const InvertTheme = ({color, bg}) => (
    {
        color: bg,
        bg: color
    }
)

function One() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <h1>Home Page</h1>
                    <Child />
                    <Button>Themed Button</Button>
                    <ThemeProvider theme={theme_2}>
                        <PhragraphComp>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sapiente!
                        </PhragraphComp>
                        <Child />
                        <ThemeProvider theme={InvertTheme}>
                            <PhragraphComp>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sapiente!
                            </PhragraphComp>
                            <Child />
                        </ThemeProvider>
                    </ThemeProvider>
                </Wrapper>
            </ThemeProvider>
            <Button>Default</Button>
        </>
    )
}

export default One