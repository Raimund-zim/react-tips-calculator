import { FormEvent, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { ITipsOption } from "../../types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../customSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Subtitle, Title, Total } from "./styles";

export const Form = () => {
  const options: ITipsOption[] = [
    {
      value: 10,
      label: "10%",
    },
    {
      value: 15,
      label: "15%",
    },
    {
      value: 20,
      label: "20%",
    },
  ];

  const [option] = useState<ITipsOption[]>(options);
  const [button, setButton] = useState(true);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tips, setTips] = useState<ITipsOption>({
    value: 10,
    label: "10%",
  });
  const [total, setTotal] = useState(0);

  const calculatedTips = (billStr: string, peopleStr: string): number => {
    const bill = Number(billStr);
    const people = Number(peopleStr);
    return (bill + (bill * tips.value) / 100) / people;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(calculatedTips(bill, people));
  };

  const hadleSelect = (option: SingleValue<ITipsOption>): void => {
    if (option) {
      setTips(option);
    }
  };

  const handlePeople = (value: string): void => {
    setPeople(value);
  };

  const handleButton = (value: boolean): void => {
    setButton(value);
  };

  const handleBill = (value: string): void => {
    setBill(value);
  };

  useEffect(() => {
    if (bill && people) {
      return handleButton(false);
    }
    return handleButton(true);
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input
        placeholder="Enter bill"
        type="number"
        value={bill}
        onChange={handleBill}
      />
      <Input
        placeholder="Enter  persons"
        type="number"
        value={people}
        onChange={handlePeople}
      />
      <CustomSelect tips={tips} handleSelect={hadleSelect} options={option} />
      <Total>Total: {total.toFixed(2)} $</Total>
      <Button text="Ohhhoooo 🍻" disabled={button} type="submit" />
    </StyledForm>
  );
};
