import { DefaultTheme } from 'react-native-paper';

export default {
  ...DefaultTheme,
  dark: false,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0000',
    borderBottom: '#C4C4C4',
    accent: '#fff',
    background: '#fff',
    subTextGrey: '#6D6D6D',
    arrowGrey: '#757575',
    lightGray: '#EFEFEF',
    white: '#FFFFFF',
    subHeader: '#D50000',
    borderDisbled: '#D8D8D8',
    grayColor:'#F2F2F2',
    blue: {
      top: '#4A90E2',
      bottom: '#115A8E'
    },
    green: {
      top: '#09A94B',
      bottom: '#0A4E31'
    },
    red: {
      top: '#B50707',
      bottom: '#7F0B0B'
    },
    orange: {
      top: '#F5A623',
      bottom: '#B34E0C'
    },
    gray: {
      top: '#FAF5F5',
      bottom: '#D8D8D8'
    },
    gradients: {
      primary: ['#5E17EB', '#8C52FF']
    },
    homePageBtn: '#6200EE',
    themeColor: ['#FF0000', '#540110']
  },
  fonts: {
    fontFamily: "Roboto",
  }
};