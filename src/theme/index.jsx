import { extendTheme } from '@chakra-ui/react';
import ButtonStyle from './components/Button';
import HeadingStyle from './components/Heading';
import InputStyle from './components/Input';
import LinkStyle from './components/Link';
import TextStyle from './components/Text';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // Small screens (up to 480px)
    md: '48em', // Medium screens (up to 768px)
    lg: '62em', // Large screens (up to 992px)
    xl: '80em', // Extra-large screens (up to 1200px)
  },

  colors: {
    primary: {
      light: '#000814',
      dark: '#B6C2CF',
    },
    secondary: '#FFC300',
    link: '#333333',
    muted: '#64748b',
    blue1: '#003566',
    blue2: '#001D3D',
    mainBlue: {
      light: '#F3F9FF',
      dark: '#24303A',
    },
    mainGrey: {
      light: '#F9F9F9',
      dark: '#222222',
    },
    mainPink: {
      light: '#FEF5FF',
      dark: '#2A242B;',
    },
    bgGrey: {
      light: '#F8F8F8',
      dark: '#161A1D',
    },
    gray1: '#333333',
    gray3: '#BDBDBD',
    gray4: '#18181B',
    heroText: '#383737',
    textDark: '#1C1C1C',
    textWhite: '#EFEFEF',
    background: '#141414',
    lightBlue: '#3188D8',
    lighterBlue: ' #AED8FF',
    matteGreen: '#50B887',
    mainGreen: {
      light: '#F2FFF1',
      dark: '#212E27',
    },
    darkGreen: '#65D19E',
    errorRed: '#E13131',

    mattePink: '#E0B7C7',
    deepMattePink: '#B4557A',
    mainYellow: {
      light: '#FFFDF2',
      dark: '#2C2A25',
    },
    secondYellow: '#FFD60A',
    purple: '#7F56D9',
  },

  fonts: {
    heading: 'Inter, sans-serif',
  },

  components: {
    Button: ButtonStyle,
    Input: InputStyle,
    Text: TextStyle,
    Link: LinkStyle,
    Heading: HeadingStyle,
  },

  textStyles: {
    normal: {
      fontSize: { base: '16px', lg: '1.2vw' },
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
  },

  layerStyles: {
    card: {
      backgroundColor: 'white',
      borderRadius: 'md',
    },
  },

  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: ['sm', 'md'],
        color: props.theme.colors.gray[600],
        lineHeight: 'tall',
        backgroundColor: 'gray2',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      },
      button: {
        fontFamily: 'Inter, sans-serif',
      },
    }),
  },
});

export default theme;
