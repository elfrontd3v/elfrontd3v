import { useContext, useEffect, useState } from "react";
import LoanClass from "core/class/LoanClass";
import { AuthContext, ThemeContext } from "core/context";
import LoansServices from "api/counts/LoansServices";
import { v4 as uuid } from "uuid";
import { message } from "antd";

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

  const [loadingModal, setLoadingModal] = useState(false);
  const [modalVisible, setModalVisible] = useState({
    state: false,
    visualize: false,
  });
  const [loanToEdit, setLoanToEdit] = useState({
    ...new LoanClass(null).state,
  });
  let loanId = uuid();

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

  const searchFilter = (searchValue) => {
    let resultSearch = [];
    setSearch({ ...search, searchValue: searchValue });
    search.auxLoansList.forEach((loan) => {
      if (
        loan.name.toString().toLowerCase().includes(searchValue.toLowerCase())
      ) {
        resultSearch.push(loan);
      }
    });
    setLoansList(resultSearch);
  };

  const handleCancel = () => {
    loanId = uuid();
    setModalVisible({ state: false, visualize: false });
    setLoanToEdit({ ...new LoanClass(null).state });
  };

  const handleOpenModal = () => {
    setSearch({ ...search, searchValue: "" });
    setLoansList(search.auxLoansList);
    setModalVisible({ state: true, visualize: false });
    setLoanToEdit({ ...new LoanClass(null).state });
  };

  const handleCreate = (values, oldValues) => {
    const auxPayload = new LoanClass(values).state;
    let payload;
    if (oldValues && oldValues.id) {
      payload = new LoanClass({ ...oldValues, ...auxPayload }).state;
    } else {
      payload = new LoanClass({
        ...auxPayload,
        id: loanId,
        uid: authState.uid,
      }).state;
    }
    console.log(payload);
  };

  const deleteLoanHandle = (id) => {
    LoansServices.deleteLoan(id)
      .then((response) => {
        if (response) {
          message.success(generalDictionary.ENDPOINT_DELETE);
          getAllLoans();
        } else {
          message.warning(generalDictionary.ENDPOINT_WARNING);
        }
      })
      .catch((error) => {
        message.error(generalDictionary.ENDPOINT_ERROR);
        console.error(error);
      });
  };

  return { generalDictionary };
};

export default useLoans;
