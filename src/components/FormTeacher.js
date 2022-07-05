import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import * as yup from "yup";

import { useFormik } from "formik";

const formValidationSchema = yup.object({
  name: yup.string().required("Please enter a Name"),
  dept: yup.string().required("Please provide department"),
  salary: yup
    .number()
    .typeError("Must be number")
    .required("Please enter salary with min.500")
    .min(500)
    .max(100000),
  designation: yup.string().required("Please provide designation"),
  allowance: yup
    .number()
    .typeError("Must be number")
    .required("Please enter allowance with min.100")
    .min(100)
    .max(10000)
});

const FormTeacher = ({ onSubmit, type, teacherDetails }) => {
  const {
    handleSubmit,
    handleChange,
    errors,
    handleBlur,
    touched,
    values
  } = useFormik({
    initialValues: {
      name: teacherDetails.name,
      dept: teacherDetails.dept,
      image: teacherDetails.image,
      salary: teacherDetails.salary,
      designation: teacherDetails.designation,
      allowance: teacherDetails.allowance
    },
    enableReinitialize: `${type === "Add" ? false : true}`,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      let { salary, allowance } = values;
      salary = +salary;
      allowance = +allowance;

      const data = { ...values, salary, allowance };
      console.log(values);
      onSubmit(data);
    }
  });
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            {type === "Add" ? "Add" : "Edit"} Teacher Details
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={errors.name && touched.name ? true : false}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  onBlur={handleBlur}
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={errors.dept && touched.dept ? true : false}
                  helperText={errors.dept && touched.dept ? errors.dept : ""}
                  onChange={handleChange}
                  value={values.dept}
                  fullWidth
                  id="dept"
                  label="Department"
                  onBlur={handleBlur}
                  name="dept"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.image && touched.image ? true : false}
                  helperText={errors.image && touched.image ? errors.image : ""}
                  onChange={handleChange}
                  value={values.image}
                  fullWidth
                  id="image"
                  label="Profile Picture"
                  onBlur={handleBlur}
                  name="image"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={errors.salary && touched.salary ? true : false}
                  helperText={
                    errors.salary && touched.salary ? errors.salary : ""
                  }
                  onChange={handleChange}
                  value={values.salary}
                  fullWidth
                  id="salary"
                  label="Basic-salary"
                  onBlur={handleBlur}
                  name="salary"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={errors.allowance && touched.allowance ? true : false}
                  helperText={
                    errors.allowance && touched.allowance
                      ? errors.allowance
                      : ""
                  }
                  onChange={handleChange}
                  value={values.allowance}
                  fullWidth
                  id="allowance"
                  label="allowance"
                  onBlur={handleBlur}
                  name="allowance"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {type === "Add" ? "Add" : "Edit"}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FormTeacher;
