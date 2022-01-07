import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth.js";
import "./ProductManage.css";
const ProductManage = () => {
  const { user } = useAuth();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/shopManage?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <div>
      <h5>hello porduct={product.length} </h5>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-12">
            <div className="row bg-danger">
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <h5 className="text-light fw-bold">Product</h5>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <h5 className="text-light fw-bold"> Quantity</h5>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <h5 className="text-light fw-bold">Subtotal</h5>
              </div>
            </div>
            {product.map((singlePD) => (
              <div key={singlePD._id}>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-6 col-6">
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                            <img
                              className="img-fluid"
                              src={singlePD.image}
                              alt=""
                            />
                          </div>
                          <div className="col-md-8 col-lg-8 col-sm-8 col-8">
                            <h6> {singlePD.title} </h6>
                            <p> price $ :{singlePD.price}</p>
                            <button>Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-3 col-3">
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "10ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Box>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-3 col-4">
                    <p> $ :{singlePD.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            {/* <hr className="bg-danger h-5" > */}

            <div className="row">
              <div className="total-text"></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <h6 className="fw-bold">Subtotal</h6>
                <h6 className="fw-bold">text</h6>
                <h6 className="fw-bold">Total</h6>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <p> $ : 555</p>
                <p> $ : 555</p>
                <p> $ : 555</p>
              </div>
              <button className="proceed-checkout rounded-pill">
                Proceed to CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
