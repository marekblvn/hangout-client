const getColorScheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#5D3891",
          },
          secondary: {
            main: "#F99417",
          },
          background: {
            main: "#F5F5F5",
            contrastText: "#191919",
          },
        }
      : {
          primary: {
            main: "#6D4C9C",
          },
          secondary: {
            main: "#FA9F2E",
          },
          background: {
            main: "#252525",
            contrastText: "#f5f5f5",
          },
        }),
  },
});

export default getColorScheme;
