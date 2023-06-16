export const inputIconStyle = {
  color: "gray.500",
  width: "20px",
  height: "24px",
};

export const inputStyle = {
  fontFamily: "heading",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  color: "blue.900",
  borderColor: "gray.200",
};
const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export const stylesWrapperDatePicker = {
  "& .react-datepicker-popper": {
    zIndex: 5,
  },
  "& .react-datepicker-wrapper": {
    width: "100%",
  },
  "& .react-datepicker": {
    padding: "8px 0",
    color: "#042B51",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
    border: `1px solid #fff`,

    "& .react-datepicker__header": {
      padding: 0,
      border: "none",
      fontWeight: 400,
      backgroundColor: "#fff",
      "& .react-datepicker__day-name": {
        margin: 0,
      },
    },
    "& .react-datepicker-year-header": {
      lineHeight: 2.1,
      fontSize: "1rem",
      marginBottom: "0.5rem",
      color: "#042B51",
    },
    "& .react-datepicker__triangle": {
      display: "none",
    },
    "& > .react-datepicker__navigation": {
      top: "12px",
      "&.react-datepicker__navigation--previous": {
        width: "24px",
        height: "24px",
        border: "none",
        backgroundImage: "url('/left.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "& .react-datepicker__navigation-icon": {
          display: "none",
        },
      },
      "&.react-datepicker__navigation--next": {
        width: "24px",
        height: "24px",
        border: "none",
        backgroundImage: "url('/right.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "& .react-datepicker__navigation-icon": {
          display: "none",
        },
      },
      "&.react-datepicker__navigation--next--with-time": {
        right: "122px",
      },
      "&:focus, &:active": {
        outline: 0,
      },
    },
    "& .react-datepicker__current-month": {
      fontWeight: 400,
      lineHeight: 2.1,
      fontSize: "1rem",
      letterSpacing: "0.15px",
      marginBottom: "12px",
      color: "#042B51",
    },
    "& .react-datepicker__day-names": {
      marginBottom: "12px",
      "& .react-datepicker__day-name": {
        lineHeight: 1.5,
        fontWeight: 500,
        width: "2.25rem",
        fontSize: "0.875rem",
        letterSpacing: "0.1px",
        color: "#042B51",
      },
    },
    "& .react-datepicker__day": {
      margin: 0,
      width: "2.25rem",
      lineHeight: "2.75",
      height: "2.25rem",
      borderRadius: "50%",
      color: "#042B51",
      "&.react-datepicker__day--selected, &.react-datepicker__day--keyboard-selected":
        {
          color: "#fff",
          backgroundColor: `#042B51 !important`,
        },
      "&.react-datepicker__day--in-range, &.react-datepicker__day--in-selecting-range":
        {
          borderRadius: 0,
          color: "#042B51",
          backgroundColor: `${hexToRGBA("#042B51", 0.06)} !important`,
          "&:empty": {
            backgroundColor: "transparent !important",
          },
        },
      "&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start":
        {
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          color: "#fff",
          backgroundColor: `#042B51 !important`,
        },
      "&.react-datepicker__day--range-end": {
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        color: "#fff",
        backgroundColor: `#042B51 !important`,
      },
      "&:focus, &:active": {
        outline: 0,
      },
      "&.react-datepicker__day--outside-month": {
        height: "auto",
      },
      "&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)":
        {
          color: "rgba(#042B51, 0.38)",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      "&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover":
        {
          color: "#042B51",
          backgroundColor: hexToRGBA("#042B51", 0.12),
        },
      "&.react-datepicker__day--today": {
        fontWeight: 400,
        "&:not(.react-datepicker__day--selected)": {
          border: `1px solid #042B51`,
        },
      },
    },
    "& .react-datepicker__header__dropdown": {
      "& .react-datepicker__month-dropdown-container:not(:last-child)": {
        marginRight: "32px",
      },
      "& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container":
        {
          marginBottom: "16px",
        },
      "& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year":
        {
          fontSize: "0.875rem",
          marginRight: "4px",
          color: "#042B51",
        },
      "& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow":
        {
          borderTopColor: "#021D37",
          borderRightColor: "#021D37",
        },
      "& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow":
        {
          top: 4,
          borderTopColor: "#021D37",
          borderRightColor: "#021D37",
        },
      "& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown":
        {
          paddingTop: "6px",
          paddingBottom: "6px",
          borderColor: "#042B51",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow:
            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        },
      "& .react-datepicker__month-option, & .react-datepicker__year-option": {
        paddingTop: "2px",
        paddingBottom: "2px",
        "&:hover": {
          backgroundColor: "currentColor",
        },
      },
      "& .react-datepicker__month-option.react-datepicker__month-option--selected_month":
        {
          backgroundColor: hexToRGBA("#042B51", 0.08),
          "&:hover": {
            backgroundColor: hexToRGBA("#042B51", 0.12),
          },
          "& .react-datepicker__month-option--selected": {
            display: "none",
          },
        },
      "& .react-datepicker__year-option.react-datepicker__year-option--selected_year":
        {
          backgroundColor: hexToRGBA("#042B51", 0.08),
          "&:hover": {
            backgroundColor: hexToRGBA("#042B51", 0.12),
          },
          "& .react-datepicker__year-option--selected": {
            display: "none",
          },
        },
      "& .react-datepicker__year-option": {
        // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
        "& .react-datepicker__navigation--years-upcoming": {
          width: 9,
          height: 9,
          borderStyle: "solid",
          borderWidth: "3px 3px 0 0",
          transform: "rotate(-45deg)",
          borderTopColor: "rgba(#042B51, 0.38)",
          borderRightColor: "rgba(#042B51, 0.38)",
          margin: `11px auto 0`,
        },
        "&:hover .react-datepicker__navigation--years-upcoming": {
          borderTopColor: "#35323E",
          borderRightColor: "#35323E",
        },
        "& .react-datepicker__navigation--years-previous": {
          width: 9,
          height: 9,
          borderStyle: "solid",
          borderWidth: "0 0 3px 3px",
          transform: "rotate(-45deg)",
          borderLeftColor: "rgba(#042B51, 0.38)",
          borderBottomColor: "rgba(#042B51, 0.38)",
          margin: `0 auto 11px`,
        },
        "&:hover .react-datepicker__navigation--years-previous": {
          borderLeftColor: "#35323E",
          borderBottomColor: "#35323E",
        },
      },
    },
    "& .react-datepicker__month": {
      marginTop: "12px",
    },
    // [theme.breakpoints.down("sm")]: {
    //   "& .react-datepicker__month": {
    //     marginLeft: 0,
    //     marginRight: 0,
    //     marginBottom: 0,
    //   },
    // },
    "& .react-datepicker__month, & .react-datepicker__year": {
      "& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text":
        {
          height: "2rem",
          alignItems: "center",
          display: "inline-flex",
          justifyContent: "center",
          "&:hover": {
            borderRadius: "10px",
          },
          "&:focus, &:active": {
            outline: 0,
          },
        },
      "& .react-datepicker__quarter--selected, & .react-datepicker__year-text--selected, & .react-datepicker__month--selected, & .react-datepicker__quarter-text--keyboard-selected, & .react-datepicker__month-text--keyboard-selected, & .react-datepicker__year-text--keyboard-selected":
        {
          color: "#fff",
          borderRadius: "10px",
          backgroundColor: `#042B51 !important`,
        },
      "& .react-datepicker__week-number": {
        fontWeight: 600,
        color: "#042B51",
      },
    },
    "& .react-datepicker__year-wrapper": {
      maxWidth: 205,
      justifyContent: "center",
    },
    "& .react-datepicker__input-time-container": {
      display: "flex",
      alignItems: "center",
    },
    "& .react-datepicker__today-button": {
      borderRadius: "1rem",
      margin: "0 1rem 0.3rem",
      color: "#fff",
      backgroundColor: "#042B51",
    },
    "& .react-datepicker__monthPicker": {
      "& .react-datepicker__month-text": {
        borderRadius: 8,
      },
      "& .react-datepicker__month-text--today": {
        fontWeight: 400,
      },
    },

    // ** Time Picker
    "& .react-datepicker__time-container": {
      borderLeftColor: "#042B51",
    },
    "&.react-datepicker--time-only, & .react-datepicker__time-container": {
      width: "7rem",
      padding: "5px 0",
      "& .react-datepicker-time__header": {
        fontWeight: 500,
        letterSpacing: "0.1px",
        marginBottom: "12px",
        color: "#042B51",
      },

      "& .react-datepicker__time": {
        background: "#fff",
        "& .react-datepicker__time-box .react-datepicker__time-list-item--disabled":
          {
            color: "rgba(#042B51, 0.38)",
          },
      },

      "& .react-datepicker__time-list-item": {
        borderRadius: "8px",
        lineHeight: "1.429",
        fontSize: "0.875rem",
        height: "auto !important",
        marginLeft: "13px",
        marginRight: "5px",
        color: "#042B51",
        paddingTop: `7px !important`,
        paddingBottom: `7px !important`,
        "&:focus, &:active": {
          outline: 0,
        },
        "&:hover": {
          backgroundColor: `currentColor !important`,
        },
        "&.react-datepicker__time-list-item--selected": {
          fontWeight: "400 !important",
          color: `"#fff" !important`,
          backgroundColor: `#042B51 !important`,
        },
      },

      "& .react-datepicker__time-box": {
        width: "100%",
      },
      "& .react-datepicker__time-list": {
        "&::-webkit-scrollbar": {
          width: 8,
        },

        /* Track */
        "&::-webkit-scrollbar-track": {
          background: "#fff",
        },

        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: "#aaa",
          borderRadius: "10px",
        },

        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#999",
        },
      },
    },
    "&.react-datepicker--time-only .react-datepicker__time-container": {
      width: "calc(7rem - 2px)",
    },
    "& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover":
      {
        backgroundColor: hexToRGBA("#042B51", 0.6),
      },
  },
  "& .react-datepicker__close-icon": {
    paddingRight: "16px",
    "&:after": {
      width: "unset",
      height: "unset",
      fontSize: "1.5rem",
      color: "#042B51",
      backgroundColor: "transparent !important",
    },
  },
};

