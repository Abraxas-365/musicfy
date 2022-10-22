import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../lib/Components/Share/Header";
import { handleFormSubmit } from "./utils";
import { useNavigate } from "react-router-dom";

const NewAlbum = () => {
    const navigate = useNavigate();

    const isNonMobile = useMediaQuery("(min-width:600px)");


    return (
        <Box m="20px">
            <Header title="CREATE ALBUM" subtitle="Create a New Album" />

            <Formik
                onSubmit={fields => {
                    handleFormSubmit(fields, navigate)
                }}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Album Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="artist"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.artist}
                                name="artist"
                                error={!!touched.artist && !!errors.artist}
                                helperText={touched.artist && errors.artist}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Year"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.year}
                                name="year"
                                error={!!touched.year && !!errors.year}
                                helperText={touched.year && errors.year}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="url"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.url}
                                name="url"
                                error={!!touched.url && !!errors.url}
                                helperText={touched.url && errors.url}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Album
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    artist: yup.string().required("required"),
    year: yup.number().required("Year is required").min(2010).max(2021),
    url: yup.string().url().required("required"),
});
const initialValues = {
    name: "",
    artist: "",
    year: 2010,
    url: "",
};

export default NewAlbum;
