import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import { validationSchemaThree } from "../validationSchemas/index";

const ThirdForm = ({ handleNext }: { handleNext: () => void }) => {
    const formik = useFormik({
    initialValues: {
      BankAccount: '',
      AccountNumber: '',
      CreditCardNumber: '',
      DebitCardNumber: '',
    },
    onSubmit: () => {
      handleNext();
    },

    validationSchema: validationSchemaThree,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit} style={{ width: "70%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="BankAccount"
              label="Enter Name of Bank"
              name="BankAccount"
              autoComplete="BankAccount"
              value={formik.values.BankAccount}
              onChange={formik.handleChange}
              error={
                formik.touched.BankAccount && Boolean(formik.errors.BankAccount)
              }
              helperText={
                formik.touched.BankAccount && formik.errors.BankAccount
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="AccountNumber"
              label="Account Number"
              name="AccountNumber"
              type="number"
              autoComplete="AccountNumber"
              value={formik.values.AccountNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.AccountNumber &&
                Boolean(formik.errors.AccountNumber)
              }
              helperText={
                formik.touched.AccountNumber && formik.errors.AccountNumber
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              variant="outlined"
              fullWidth
              id="CreditCardNumber"
              label="Credit Card Number"
              name="CreditCardNumber"
              autoComplete="CreditCardNumber"
              value={formik.values.CreditCardNumber}
              onChange={formik.handleChange}
              error={formik.touched.CreditCardNumber && Boolean(formik.errors.CreditCardNumber)}
              helperText={formik.touched.CreditCardNumber && formik.errors.CreditCardNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              variant="outlined"
              fullWidth
              id="DebitCardNumber"
              label="Debit Card Number"
              name="DebitCardNumber"
              autoComplete="DebitCardNumber"
              value={formik.values.DebitCardNumber}
              onChange={formik.handleChange}
              error={formik.touched.DebitCardNumber && Boolean(formik.errors.DebitCardNumber)}
              helperText={formik.touched.DebitCardNumber && formik.errors.DebitCardNumber}
            />
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Register Account
        </Button>
      </form>
    </div>
  );
};

export default ThirdForm;