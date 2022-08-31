import { useContext } from "react";
import LoanClass from "../../../../core/class/LoanClass";
import { ThemeContext } from "../../../../core/context";

const useLoans = () => {
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const loan = new LoanClass(null).state;
  return { generalDictionary, loan };
};

export default useLoans;
