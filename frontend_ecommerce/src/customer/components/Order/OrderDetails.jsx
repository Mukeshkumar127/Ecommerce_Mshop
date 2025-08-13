import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard />
      </div>

      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid
        className="space-y-5"
      >
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid size={6}>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top "
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                  alt=""
                />

                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
