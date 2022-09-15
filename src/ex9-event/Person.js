import React, { useState } from "react";

const Person = () => {
  const initPersonData = { firstName: "", lastName: "" };
  const [person, setPerson] = useState(initPersonData);
  const [showData, setShowData] = useState(false);

  const changeFirstName = (e) => {
    const value = e.target.value;
    let _person = { ...person, firstName: value };
    setPerson(_person);
  };

  const changeLastName = (e) => {
    const value = e.target.value;
    let _person = { ...person, lastName: value };
    setPerson(_person);
  };

  const showDataClickFalse = () => {
    setShowData(false);
  };

  const resetForm = () => {
    setPerson(initPersonData);
  }
  return (
    <div className="container">
      <form className="form-control">
        <input
          type="text"
          className="form-control"
          value={person.firstName}
          onChange={changeFirstName}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          className="form-control"
          value={person.lastName}
          onChange={changeLastName}
          placeholder="Enter Last Name"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowData(true)}
        >
          Submit
        </button>
      </form>
      {showData && (
        <div className="card">
          <div className="card-header bg-dark">Person Info</div>
          <div className="card-body">
            <p>FirstName: {person.firstName}</p>
            <p>LastName: {person.lastName}</p>
          </div>
          <div className="card-footer">
          <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setShowData(false);
            resetForm();
          }}
        >
          Reset
        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Person;
