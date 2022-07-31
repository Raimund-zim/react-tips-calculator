import { StylesConfig } from "react-select";
import { ITipsOption } from "../../types";

export const customStyles: StylesConfig<ITipsOption> = {
  control: (styles) => ({
    ...styles,
    height: "50px",
    marginTop: "10px",
    textAlign: "center",
    color: "#756C6C",
    borderRadius: "30px",
    border: "none",
    fontWeight: "bolder",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};
