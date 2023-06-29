const HeadingStyle = {
  baseStyle: () => ({
    fontSize: { base: '16px', lg: '1.2vw' },
  }),

  sizes: {
    md: {
      fontSize: '60px',
      fontWeight: '600',
      lineHeight: '72px',
      letterSpacing: '-0.04em',
    },
  },
  variants: {
    primary: (props) => ({
      color:
        props.theme.colors.primary[
          props.colorMode === 'dark' ? 'dark' : 'light'
        ],
      fontSize: '60px',
      fontStyle: 'semi-bold',
      lineHeight: '72px',
    }),
    secondary: (props) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary.dark
          : props.theme.colors.gray4,
      fontWeight: '700',
      fontSize: '41px',
    }),
    tertiary: (props) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary.dark
          : props.theme.colors.gray4,
      fontWeight: '600',
      fontSize: '36px',
    }),
    quaternary: (props) => ({
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary.dark
          : props.theme.colors.heroText,
      fontWeight: '500',
      fontSize: '28px',
    }),
    cardHeader: (props) => ({
      fontWeight: '700',
      fontSize: '18px',
      color: props.theme.colors.primary,
    }),
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
  },
  defaultProps: {},
};

export default HeadingStyle;
