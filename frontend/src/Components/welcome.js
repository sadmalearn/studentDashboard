import React, { useEffect, useState } from 'react';
import { Url } from '../Constants/ApiUrlConstants';

const Welcome = () => {
  const [welcomeData, setWelcomeData] = useState([]); // Renamed state variable

  useEffect(() => {
    console.log(Url.getAllStudents);
    fetch(Url.getAllStudents, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWelcomeData(data); // Store the fetched data in state
      });
  }, []);
  const handleDelete = (e) =>{
    console.log(e);
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
                {welcomeData?.map((item,i)=>{
                    console.log(item);
                    return(
                        <tr>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.standard}</td>
                        <td><div >edit</div><div onClick={(item) => {handleDelete(item)}}>delete</div></td>
                    </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
  );
};

export default Welcome; // Corrected component name to start with a capital letter
