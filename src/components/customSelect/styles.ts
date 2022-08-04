import { StylesConfig } from "react-select";
import { ITipsOption } from "../../types";

export const customStyles: StylesConfig<ITipsOption> = {
  control: (styles) => ({
    ...styles,
    height: "64px",
    marginTop: "10px",
    paddingLeft: "44px",
    textAlign: "center",
    color: "#756C6C",
    borderRadius: "30px",
    border: "none",
    fontWeight: "bolder",
    caretColor: "transparent",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
