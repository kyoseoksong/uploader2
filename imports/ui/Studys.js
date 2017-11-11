import React from 'react';

export default class Studys extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    const diagnosis_date = "Apr 18 1953"; // read data from files
    const patient_name = "Hong Gil Dong";
    const sex = "M";
    const id = "1035014";
    const study_date = "2015.3.1";
    const malignancy = "82.4%"
    const suspicious_scans = "6/60";
    const description = "This is a description";
    e.preventDefault();
    if(diagnosis_date) {
      Studys.insert({
        diagnosis_date,
        patient_name,
        sex,
        id,
        study_date,
        malignancy,
        suspicious_scans,
        description
      })
    }
  }

  render() {
    return (
      <div>
        <h1> study </h1>
      </div>
    )
  }
}
