import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import validation schema
import { validationSchemaTwo } from "../validationSchemas/index";

const SecondForm = ({ handleNext }: { handleNext: () => void }) => {
  const formik = useFormik({
    initialValues: {
      facebook: "",
      address: "",
      contact: "",
      comment: "",
    },
    onSubmit: () => {
      handleNext();
    },
    validationSchema: validationSchemaTwo,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "70%", margin: "0 auto" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="address"
              label="Residental Address"
              name="address"
              autoComplete="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              variant="outlined"
              fullWidth
              id="contact"
              label="Contact Number"
              name="contact"
              autoComplete="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="facebook"
              label="Facebook URL"
              name="facebook"
              autoComplete="facebook"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={formik.touched.facebook && Boolean(formik.errors.facebook)}
              helperText={formik.touched.facebook && formik.errors.facebook}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Comment your answer (optional)"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              name="comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
              error={
                formik.touched.comment && Boolean(formik.errors.comment)
              }
              helperText={
                formik.touched.comment && formik.errors.comment
              }
            />
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginBottom: "60px", marginTop: "20px" }}
        >
          Contine
        </Button>
      </form>
    </div>
  );
};

export default SecondForm;