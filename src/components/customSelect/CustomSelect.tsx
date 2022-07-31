import Select from "react-select";
import { ITipsOption } from "../../types";
import { customStyles } from "./styles";

interface IProps {
  tips: ITipsOption;
  handleSelect: (option: ITipsOption | null) => void;
  options: ITipsOption[];
}

export const CustomSelect = ({ tips, handleSelect, options }: IProps) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={tips}
      onChange={handleSelect}
      isMulti={false}
    />
  );
};
