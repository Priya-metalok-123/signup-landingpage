import React from "react";
import "../stylesheet/company.css";
import location from "../background-images/Vector.png";
import { useState, useEffect } from "react";
import "../stylesheet/contactus.css";

const ContactSection = () => {

  
  // -------------------------------------------- form validation

  const [formValues, setformValues] = useState({
    username: "",

    email: "",

    subject: "",

    // checkemail:'email',

    // checksubject:'subject number',

    message: "",
  });

  const [submitSucess, setSubmitSuccess] = useState(false);

  // ------------------------------------------radio buttons

  const [rcheck, setRcheck] = useState(false);
  const [rcheck2, setRcheck2] = useState(false);

  let oneClick = () => {
    setRcheck(true);
    setRcheck2(false);
  };

  let twoClick = () => {
    setRcheck2(true);
    setRcheck(false);
  };

  // --------------------------------------------radio end

  // let {name,email,subject} =formValues

  const eventChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues.username)
  };

  const [formErrors, setformErrors] = useState({
    error: "please enter data",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setformErrors(validate(formValues));
  };

  const validate = (values) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    // const re = /^[A-Za-z]+$/;
    const email_re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const errors = {};

    if (!values.username) {
      errors.username = "please enter your name";
    } else if (formValues.username.length < 5) {
      errors.username = "please enter at least 6 characters";
    } else if (!re.test(values.username)) {
      errors.username = "only alphabets are allowed";
    }

    if (!values.email) {
      errors.email = "please enter email";
    } else if (!email_re.test(values.email)) {
      errors.email = "please enter valid email";
    }

    if (!values.subject) {
      errors.subject = "please enter subject";
    }

    // } else if (re.test(values.subject)) {
    //   errors.subject = "only numbers are allowed";
    // } else if (values.subject.length <= 9) {
    //   errors.subject = "please enter  valid subject number";
    // } else if (values.subject.length > 10) {
    //   errors.subject = "please enter  valid subject number";
    // }

    if (rcheck === false && rcheck2 === false) {
      errors.radio = "please chose one option";
    }

    if (!values.message) {
      errors.message = "please drop a message";
    }

    return errors;
  };

  useEffect(() => {
    let objectLength = Object.keys(formErrors).length;

    if (objectLength === 0) {
      console.log("successfully submited ");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      };
      fetch("https://reqres.in/api/posts", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          if (res) {
            setSubmitSuccess(true);
          } else {
            setSubmitSuccess(false);
          }
          console.log(res);


          setTimeout(() => {
            setSubmitSuccess(false);
          }, 3000);

        })
        .catch((err) => console.log(err));

      formValues.username = "";
      formValues.email = "";
      formValues.subject = "";
      formValues.message = "";
      setRcheck(false);
      setRcheck2(false);
    }

    // else{
    //   console.log("noooooooooooooooooooooooooooooooooooooo we are geting " + objectLength + "  errrrrrrrrrrrrrrrrrrrrrrrors ")
    // }
  }, [formErrors]);

  return (
    <>
      {/* -----------------------contact us section--------------------  */}

      <div className="container contact-section ">
        <div className="address">
          <p className="contact-us-head">Contact us</p>
          <div className="d-flex gap-2" style={{ marginLeft: "-22px" }}>
            {/* <img
              src={location}
              alt=""
              style={{ width: "15px", height: "20px", marginTop: "22px" }}
            /> */}
            <div>
              {/* <p className="address-para pt-3">
                Trendz Axis , 5 Floor, H.No: 1-89/A/7, on Plot No.7, Survey
                <br /> Nos.28,29,&30,
                <br />
                Madhapur, Gachibowli, Hyderabad, Telangana-500081.
              </p> */}
            </div>
          </div>
          <p className="address-para pt-5">sportsverse@metalok.io</p>
          <p className="address-para">+916266868051</p>

          
        </div>

        {/* -------------------------form - section  */}

        <div className="contact-form ">
          <div className="send-us-heading">
            <h4>Send us a Message</h4>
          </div>
          <form className="form-section">
            <div className="input-section">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                placeholder=""
                name="username"
                value={formValues.username}
                required
                onChange={eventChange}
              />
              {<h6 className="error-name">{formErrors.username}</h6>}
              <label htmlFor="email">Email : </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formValues.email}
                placeholder=""
                onChange={eventChange}
              />
              {<h6 className="error-email">{formErrors.email}</h6>}
              <label htmlFor="subject">Subject : </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formValues.subject}
                placeholder=""
                onChange={eventChange}
              />
              {<h6 className="error-phone">{formErrors.subject}</h6>}
            </div>
            <div>
              <p className="preffered-para">
                Preffered method of communication
              </p>
              <div className="d-flex gap-3">
                <input
                  type="radio"
                  checked={rcheck ? true : false}
                  onClick={oneClick}
                />
                <span>Email</span>
                <input
                  type="radio"
                  checked={rcheck2 ? true : false}
                  onClick={twoClick}
                />
                <span>phone</span>
                {/* {<h6 className="error-radio">{formErrors.radio}</h6>} */}
              </div>
              {<h6 className="error-radio">{formErrors.radio}</h6>}
            </div>

            <div className="message-input">
              <label htmlFor="message">Message :</label>
              <input
                type="text"
                id="message"
                placeholder=""
                name="message"
                value={formValues.message}
                required
                onChange={eventChange}
              />
              {<h6 className="error-message">{formErrors.message}</h6>}
            </div>

            <div className="m-auto">
              
            <button className="submit-btn" onClick={handleSubmit}>
                {submitSucess ? <div className="submited-btn">{"Submited"}</div>  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
