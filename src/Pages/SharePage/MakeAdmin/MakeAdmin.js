import { Alert } from "@mui/material";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://obscure-fjord-46479.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/JSON",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAdminSubmit} className="login-design">
        <Form.Label className="login-form-design"> Enter Email</Form.Label>
        <Form.Control
          placeholder="Enter email"
          className="bg-transparent"
          name="email"
          type="email"
          onBlur={handleOnBlur}
        />
        <button type="submit"> Make admin</button>
        {success && <Alert severity="success"> make admin Successfully </Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
