import React, { useEffect, useState } from 'react';
import { Url } from '../Constants/ApiUrlConstants';
import ReactModal from 'react-modal';
import './student.css'
const Welcome = () => {
  const [welcomeData, setWelcomeData] = useState([]); // Renamed state variable
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    // console.log(Url.getAllStudents);
    fetch(Url.getAllStudents, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWelcomeData(data); // Store the fetched data in state
      });
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const body = {
      'id': id
    }
    fetch(Url.deleteStudent, {
      method: "DELETE",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setWelcomeData(data); // Store the fetched data in state
      });
  }
  const [submitData, setSubmitData] = useState({
    name: '',
    email: '',
    mobile: '',
    standard: ''
  })
  const handleInputChange = (e, field) => {
    setSubmitData({
      ...submitData,
      [field]: e.target.value
    })
  }
  console.log(submitData);

  const handleNewStudent = () => {
    console.log("asdasdasdsd", JSON.stringify(submitData));
    fetch(Url.addStudent, {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setWelcomeData(data); // Store the fetched data in state
      });
  }
  const handleUpdateStudent = () => {
    fetch(Url.editStudentDetails, {
      method: "PUT",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setWelcomeData(data); // Store the fetched data in state
      });
  }
  const handleModalOpen = (item) => {
    setOpenModal(true)
    console.log(item);
    setSubmitData(item)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  return (
    <div>
      <h1>Welcome Page</h1>
      <table border="1">
        <thead>
          <th>sr. no.</th>
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>standard</th>
          <th>Action</th>
        </thead>
        <tbody>
          {welcomeData?.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.standard}</td>
                <td><div onClick={() => { handleModalOpen(item) }}>edit</div><div onClick={() => { handleDelete(item._id) }}>delete</div></td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <div>

        <label> full name </label>
        <input type="text" onChange={(e) => { handleInputChange(e, 'name') }} name="firstname" size="15" />
        <label>
          Course :
        </label>
        <select onChange={(e) => { handleInputChange(e, 'standard') }}>
          <option value="Course">Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
          <option value="MCA">MCA</option>
          <option value="M.Tech">M.Tech</option>
        </select>

        <label>
          Phone :
        </label>
        <input type="text" onChange={(e) => { handleInputChange(e, 'mobile') }} name="phone" size="10" />
        Email:
        <input type="email" onChange={(e) => { handleInputChange(e, 'email') }} id="email" name="email" />

        <button type="button" onClick={handleNewStudent}>submit</button>
      </div>
      <ReactModal
        isOpen={openModal}
        contentLabel="Minimal Modal"
        className="Modal BugCreateModal ModalWidth"
        overlayClassName="Overlay"
        onRequestClose={handleModalClose}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <label> full name </label>
          <input type="text" value={submitData.name} onChange={(e) => { handleInputChange(e, 'name') }} name="firstname" size="15" />
          <label> Course : </label>
          <select onChange={(e) => { handleInputChange(e, 'standard') }}>
            <option value="Course">Course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          <label> Phone : </label>
          <input type="text" value={submitData.mobile} onChange={(e) => { handleInputChange(e, 'mobile') }} name="phone" maxLength="10" />
          Email:
          <input type="email" value={submitData.email} onChange={(e) => { handleInputChange(e, 'email') }} />
          <button type="button" onClick={handleUpdateStudent}>submit</button>
          <button type="button" onClick={handleModalClose}>Close</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Welcome; // Corrected component name to start with a capital letter
