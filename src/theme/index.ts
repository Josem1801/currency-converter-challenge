export const theme = {
  palette: {
    primary: '#040811',
    secondary: '#007DF0',
    white: '#ffffff',
  },
  breakpoints: {
    phone: 480,
    table: 720,
    laptop: 1080,
    computer: 1444,
  },
  typography: {
    small: {
      fontSize: 12,
      fontWeight: 300,
    },
    medium: {
      fontSize: 16,
      fontWeight: 400,
    },
    large: {
      fontSize: 22,
      fontWeight: 700,
    },
    larger: {
      fontSize: 50,
      fontWeight: 900,
    },
  },
}

export type ThemeType = typeof theme
