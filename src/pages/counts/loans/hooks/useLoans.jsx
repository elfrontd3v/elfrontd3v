import { useContext, useEffect, useState } from "react";
import { message, Space, Tag, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import LoansServices from "api/counts/LoansServices";
import { v4 as uuid } from "uuid";
import { AuthContext, ThemeContext } from "core/context";
import LoanClass from "core/class/LoanClass";
import ModalAlertMessage from "components/modalAlertMessage/ModalAlertMessage";

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
    setLoadingModal(true);
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
    //servicio de insertar
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
  const columns = [
    {
      title: generalDictionary.NAME,
      dataIndex: "name",
      key: "name",
      align: "center",
      ellipsis: true,
      sorter: (a, b) => a.name.localeCompare(b.name),
      showSorterTooltip: false,
    },
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
      align: "center",
      ellipsis: true,
    },
    {
      title: "Valor inicial",
      dataIndex: "initialValue",
      key: "initialValue",
      align: "center",
      ellipsis: true,
    },
    {
      title: "Porcentaje",
      dataIndex: "interestsPercent",
      key: "interestsPercent",
      align: "center",
      ellipsis: true,
    },
    {
      title: "Valor porcentaje",
      dataIndex: "interests",
      key: "interests",
      align: "center",
      ellipsis: true,
    },
    {
      title: generalDictionary.ACTIONS,
      key: "action",
      align: "center",
      ellipsis: true,
      render: (loan) => {
        const { ModalAlertMessageFunction } = ModalAlertMessage({
          okText: generalDictionary.DELETE,
          title: generalDictionary.DELETE,
          description: generalDictionary.SURE_DELETE_LOAN,
          okParams: loan.id,
          okHandle: deleteLoanHandle,
        });
        return (
          <Space size="small">
            <Tooltip title={generalDictionary.SEE_DETAIL}>
              <Tag color={"blue"}>
                <InfoCircleTwoTone
                  onClick={() => {
                    setLoanToEdit({ ...new LoanClass(loan).state });
                    setModalVisible({ state: true, visualize: true });
                  }}
                />
              </Tag>
            </Tooltip>
            <Tooltip title={generalDictionary.EDIT}>
              <Tag color={"green"}>
                <EditOutlined
                  onClick={() => {
                    setLoanToEdit({ ...new LoanClass(loan).state });
                    setModalVisible({ state: true, visualize: false });
                  }}
                />
              </Tag>
            </Tooltip>
            <Tooltip title={generalDictionary.DELETE}>
              <Tag color={"red"}>
                <DeleteOutlined onClick={ModalAlertMessageFunction} />
              </Tag>
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return {
    generalDictionary,
    loading,
    loansList,
    columns,
    filter: { search, searchFilter },
    modal: {
      modalVisible,
      loanToEdit,
      loadingModal,
      handleCancel,
      handleCreate,
      handleOpenModal,
    },
  };
};

export default useLoans;
