import { useContext, useEffect, useState } from "react";
import LoanClass from "core/class/LoanClass";
import { AuthContext, ThemeContext } from "core/context";

const useLoans = () => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const [loading, setLoading] = useState(false);
  const loan = new LoanClass(null).state;

  useEffect(() => {
    if (authState?.uid) {
      getAllLoans();
    }
  }, [authState?.uid]);

  const getAllLoans = () => {
    setLoading(true);
  };

  return { generalDictionary, loan };
};

export default useLoans;
