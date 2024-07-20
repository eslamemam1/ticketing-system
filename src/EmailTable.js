import React, { useState } from "react";

const EmailTable = () => {
  const [faultState, setFaultState] = useState("");
  const handleChange = (event) => {
    setFaultState(event.target.value);
  };

  const [ttNumber, setTTNumber] = useState("");
  const handleChangettNumber = (event) => {
    setTTNumber(event.target.value);
  };

  const [Notification, setNotification] = useState("");
  const handleChangeNotification = (event) => {
    setNotification(event.target.value);
  };

  const [Network, setNetwork] = useState("");
  const handleChangeNetwork = (event) => {
    setNetwork(event.target.value);
  };

  const [Seveirty, setSeveirty] = useState("");
  const handleChangeSeveirty = (event) => {
    setSeveirty(event.target.value);
  };

  const [FaultOccurredTime, setFaultOccurredTime] = useState("");
  const handleChangeFaultOccurredTime = (event) => {
    setFaultOccurredTime(event.target.value);
  };

  const [FaultRestorationTime, setFaultRestorationTime] = useState("");
  const handleChangeFaultRestorationTime = (event) => {
    setFaultRestorationTime(event.target.value);
  };

  const [FaultDescription, setFaultDescription] = useState("");
  const handleChangeFaultDescription = (event) => {
    setFaultDescription(event.target.value);
  };

  const [effectedNE, seteffectedNE] = useState("");
  const handleChangeeffectedNE = (event) => {
    seteffectedNE(event.target.value);
  };

  const [neSlotAndPort, setneSlotAndPort] = useState("");
  const handleChangeneSlotAndPort = (event) => {
    setneSlotAndPort(event.target.value);
  };

  const [assignedTo, setassignedTo] = useState("");
  const handleChangeassignedTo = (event) => {
    setassignedTo(event.target.value);
  };

  const [rootCause, setrootCause] = useState("");
  const handleChangerootCause = (event) => {
    setrootCause(event.target.value);
  };

  const [emailBody, setEmailBody] = useState("");

  const generateEmailBody = () => {
    const tableHTML = `
      <table border={1}>
        <tbody>
            <tr>
                <td>Fault State</td>
                <td>${faultState}</td>
            </tr>
            <tr>
                <td>TT Number</td>
                <td>Inc-${ttNumber}</td>
            </tr>
            <tr>
                <td>Notification</td>
                <td>${Notification}</td>
            </tr>
            <tr>
                <td>Network</td>
                <td>${Network}</td>
            </tr>
            <tr>
                <td>Seveirty</td>
                <td>${Seveirty}</td>
            </tr>
            <tr>
                <td>Fault Occurred Time</td>
                <td>${FaultOccurredTime}</td>
            </tr>
            <tr>
                <td>Fault Restoration Time</td>
                <td>${FaultRestorationTime}</td>
            </tr>
            <tr>
                <td>Fault Description</td>
                <td>${FaultDescription}</td>
            </tr>
            <tr>
                <td>Effected NE</td>
                <td>${effectedNE}</td>
            </tr>
            <tr>
                <td>NE slot/port </td>
                <td>${neSlotAndPort}</td>
            </tr>
            <tr>
                <td>Assigned TO (Group & Assignee)</td>
                <td>${assignedTo}</td>
            </tr>
            <tr>
                <td>Root Cause</td>
                <td>${rootCause}</td>
            </tr>
        </tbody>
    </table>
    `;
    setEmailBody(tableHTML);
  };

  const downloadTemplate = () => {
    const element = document.createElement("a");
    const file = new Blob([emailBody], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "table_template.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailBody }),
      });

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  return (
    <div className=" w-full">
      <div className=" w-[80%] my-10 m-auto border-2 border-gray-500 rounded-md">
        <h1 className=" text-center text-4xl my-3">Ticketing System</h1>
        <hr />
        <div className=" flex justify-start mx-5 items-center">
          <span className=" text-2xl">Fault State : </span>
          <input
            type="radio"
            name="openOrClose"
            value="Open"
            id="open"
            onClick={handleChange}
            className=" size-5 mx-3"
          />
          <label for="open" className=" text-xl">
            Open
          </label>
          <input
            type="radio"
            name="openOrClose"
            value="Close"
            id="close"
            onClick={handleChange}
            className=" size-5 mx-3"
          />
          <label for="close" className=" text-xl">
            Close
          </label>
        </div>
        <div className=" flex justify-start mx-5 items-center">
          <span className=" text-2xl mr-2 ">TT Number : </span>
          <input
            name="ttNumber"
            type="text"
            value={ttNumber}
            onChange={handleChangettNumber}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl">Notification : </span>
          <input
            type="radio"
            name="openOrCloseNotification"
            value="Opened"
            id="Opened"
            onChange={handleChangeNotification}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="Opened">
            Opened
          </label>
          <input
            type="radio"
            name="openOrCloseNotification"
            value="Closed"
            id="Closed"
            onChange={handleChangeNotification}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="Closed">
            Closed
          </label>
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl">Network : </span>
          <input
            name="Network"
            type="radio"
            value="HUAWEI-QPN"
            id="HUAWEI-QPN"
            onChange={handleChangeNetwork}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="HUAWEI-QPN">
            HUAWEI-QPN
          </label>
          <input
            name="Network"
            type="radio"
            value="ZONE-SSN"
            id="ZONE-SSN"
            onChange={handleChangeNetwork}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="ZONE-SSN">
            ZONE-SSN
          </label>
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl">Seveirty : </span>
          <input
            name="Seveirty"
            type="radio"
            value="Critical"
            id="Critical"
            onChange={handleChangeSeveirty}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="Critical">
            Critical
          </label>
          <input
            name="Seveirty"
            type="radio"
            value="Major"
            id="Major"
            onChange={handleChangeSeveirty}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="Major">
            Major
          </label>
          <input
            name="Seveirty"
            type="radio"
            value="Minor"
            id="Minor"
            onChange={handleChangeSeveirty}
            className=" size-5 mx-3"
          />
          <label className=" text-xl" for="Minor">
            Minor
          </label>
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl mr-2 ">Fault Occurred Time : </span>
          <input
            name="FaultOccurredTime"
            type="text"
            value={FaultOccurredTime}
            onChange={handleChangeFaultOccurredTime}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl mr-2 ">Fault Restoration Time : </span>
          <input
            name="FaultRestorationTime"
            type="text"
            value={FaultRestorationTime}
            onChange={handleChangeFaultRestorationTime}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl mr-2 ">Fault Description : </span>
          <input
            name="FaultDescription"
            type="text"
            value={FaultDescription}
            onChange={handleChangeFaultDescription}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl  mr-2">Effected NE : </span>
          <input
            name="effectedNE"
            type="text"
            value={effectedNE}
            onChange={handleChangeeffectedNE}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl  mr-2">NE Slot / Port : </span>
          <input
            name="neSlotAndPort"
            type="text"
            value={neSlotAndPort}
            onChange={handleChangeneSlotAndPort}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl  mr-2">
            Assigned TO (Group & Assignee) :{" "}
          </span>
          <input
            name="assignedTo"
            type="text"
            value={assignedTo}
            onChange={handleChangeassignedTo}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <div className="flex justify-start mx-5 items-center">
          <span className=" text-2xl  mr-2">Root Cause : </span>
          <input
            name="rootCause"
            type="text"
            value={rootCause}
            onChange={handleChangerootCause}
            className=" border border-gray-400 rounded-lg"
          />
        </div>
        <hr className=" mt-5" />
        <div className="flex justify-around my-5">
          <button
            onClick={generateEmailBody}
            className=" border border-gray-500 rounded-lg p-1 text-xl text-white bg-violet-600 hover:bg-violet-700"
          >
            Save
          </button>
          <button
            onClick={downloadTemplate}
            className=" border border-gray-500 rounded-lg p-1 text-xl text-white bg-violet-600 hover:bg-violet-700"
          >
            Download Template
          </button>
          <button
            onClick={sendEmail}
            className=" border border-gray-500 rounded-lg p-1 text-xl text-white bg-violet-600 hover:bg-violet-700 hidden"
          >
            Send Email
          </button>
        </div>
        <div>
          <h2 className=" hidden">Email Body</h2>
          <textarea
            value={emailBody}
            readOnly
            rows="10"
            cols="50"
            className=" hidden"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default EmailTable;
