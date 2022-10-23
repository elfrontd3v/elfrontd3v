import React from "react";

class LoanClass extends React.Component {
  constructor(loan) {
    super(loan);
    this.state = {
      id: loan?.id ? loan.id : "",
      uid: loan?.uid ? loan.uid : "",
      name: loan?.name ? loan.name : "",
      initialValue: loan?.initialValue ? loan.initialValue : 0,
      interestsType: loan?.interestsType ? loan.interestsType : "VAL",
      interestsPercent: loan?.interestsPercent ? loan.interestsPercent : 0,
      interests: loan?.interests ? loan.interests : 0,
      value: loan?.value ? loan.value : 0,
      initialDate: loan?.initialDate ? loan.initialDate : new Date(),
      lastPayment: loan?.lastPayment ? loan.lastPayment : "",
      nextPayment: loan?.nextPayment ? loan.nextPayment : "",
      periodicity: loan?.periodicity ? loan.periodicity : "",
    };
  }
}

export default LoanClass;
