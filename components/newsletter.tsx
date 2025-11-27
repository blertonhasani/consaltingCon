"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Button } from "@mui/material";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function Newsletter() {
  const [send, setSend] = useState(false);

  const validationSchema = yup.object({
    user_name: yup
      .string()
      .min(3, "User Name should be minimum 3 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid Email")
      .required("Email is required"),
    phone_no: yup
      .string()
      .min(7, "Phone Number should be minimum 7 characters")
      .required("Phone Number is required"),
    message: yup
      .string()
      .min(10, "Message should be minimum 10 characters")
      .required("Phone Number is required"),
  });

  const url = `https://evrnb7vdec.execute-api.us-east-2.amazonaws.com/stages/Contact-DigitalButterFly`;

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      phone_no: "",
      message: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(url, values)
        .then((response) => {
          if (response.config.data) {
            enqueueSnackbar("Thank you for contacting us.", {
              variant: "success",
            });
            setSend(true);
          } else {
            enqueueSnackbar("An error occurred", {
              variant: "error",
            });
          }
        })
        .catch((e) => {
          enqueueSnackbar(`An error occurred`, {
            variant: "error",
          });
        });
    },
  });

  return (
    <section id="contact">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Contact Us</h2>
      </div>
      <div className="max-w-6xl mx-auto sm:px-6 ">
        <div
          className="md:grid md:grid-cols-12 md:gap-6 items-center"
          data-aos="fade-up"
        >
          {send == false ? (
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 aos-init aos-animate">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="text"
                    className="w-full appearance-none bg-gray-800 focus:text-info rounded-sm py-3 mb-2  text-white"
                    placeholder="User Name"
                    aria-label="User Name"
                    name="user_name"
                    onChange={formik.handleChange}
                    value={formik.values.user_name}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="email"
                    className="w-full appearance-none bg-gray-800 border focus:text-info rounded-sm py-3 mb-2  text-white"
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="number"
                    className="w-full appearance-none bg-gray-800 border focus:text-info rounded-sm py-3 mb-2 text-white"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    name="phone_no"
                    onChange={formik.handleChange}
                    value={formik.values.phone_no}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="text"
                    className="w-full appearance-none bg-gray-800 border focus:text-info rounded-sm py-3 mb-2 text-white"
                    placeholder="Message..."
                    aria-label="Messag.."
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <SnackbarProvider />

                  <Button
                    className="btn bg-blue-800 hover:bg-blue-950 shadow"
                    type="submit"
                    variant="contained"
                    sx={{ mt: "15px" }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 aos-init aos-animate">
              <h2 className="h2 mb-4">Thank you for contacting us.</h2>
            </div>
          )}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl aos-init aos-animate">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48386.606384705585!2d-74.04356268861824!3d40.74459058716929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1703986317809!5m2!1sen!2sus"
              width="100%"
              height="350"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
