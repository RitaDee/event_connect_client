const InputStyle = {
  baseStyle: (props) => ({
    field: {
      bg: 'white',
      borderWidth: 1,
      ':focus': {
        borderWidth: 2,
        borderColor: props.theme.colors.primary,
      },
    },
  }),

  size: {
    sm: {
      // padding: 4,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    borderless: () => ({
      field: {
        borderWidth: 0,
        borderColor: 'transparent',
        ':focus': {
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props) => props.theme.colors.primary,
  },
};

export default InputStyle;
