import { useContext, useEffect, useState } from "react";
import LoanClass from "core/class/LoanClass";
import { AuthContext, ThemeContext } from "core/context";
import LoansServices from "api/counts/LoansServices";

const useLoans = () => {
  const [authState] = useContext(AuthContext);
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;

  const [loansList, setLoansList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    searchValue: "",
    auxLoansList: [],
  });
  const loan = new LoanClass(null).state;

  useEffect(() => {
    if (authState?.uid) {
      getAllLoans();
    }
  }, [authState?.uid]);

  const getAllLoans = () => {
    setLoading(true);
    LoansServices.getAllLoansByUid(authState.uid)
      .then((response) => {
        const responseData = [];
        response.forEach((doc) => {
          responseData.push(doc.data());
        });
        setLoansList(responseData);
        setSearch({ ...search, auxLoansList: responseData });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return { generalDictionary, loan };
};

export default useLoans;
