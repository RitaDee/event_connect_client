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
    primary: '#32CD32',
    secondary: '#FFC300',
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
