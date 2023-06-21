const LinkStyle = {
  baseStyle: () => ({
    marginBottom: '2',
  }),

  sizes: {
    sm: {
      fontSize: '16px',
    },
  },
  variants: {
    normal: (props) => ({
      fontWeight: 'normal',
      color: props.colorMode === 'dark'
        ? props.theme.colors.primary.dark
        : props.theme.colors.link,
      _activeLink: {
        color: props.theme.colors.primary,
        fontWeight: 'bold',
      },
      _hover: {
        color: props.theme.colors.primary,
        textDecoration: 'none',
      },
    }),
    footerLink: (props) => ({
      fontWeight: 'normal',
      color: props.colorMode === 'dark'
        ? props.theme.colors.textWhite
        : props.theme.colors.link,
      fontSize: '14px',
      _activeLink: {
        color: props.theme.colors.primary,
        fontWeight: 'bold',
      },
      _hover: {
        color: props.theme.colors.primary,
        textDecoration: 'none',
      },
    }),

  },
  defaultProps: {
    variant: 'normal',
    size: 'sm',
  },
};

export default LinkStyle;
