import styled from 'styled-components'
interface TypographyTypes {
  fontVariant?: 'small' | 'medium' | 'large' | 'larger'
  color?: 'primary' | 'secondary' | 'white'
}
export const Typography = styled.p<TypographyTypes>`
  font-size: ${({ theme, fontVariant }) =>
    theme.typography[fontVariant || 'medium'].fontSize}px;
  font-weight: ${({ theme, fontVariant }) =>
    theme.typography[fontVariant || 'medium'].fontWeight};
  color: ${({ theme, color }) => theme.palette[color || 'white']}; ;
`
