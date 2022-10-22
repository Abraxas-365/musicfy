import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../lib/Components/Share/Header";
import { handleFormSubmit } from "./utils";
import { useNavigate } from "react-router-dom";

const NewSong = () => {
    const navigate = useNavigate();

    const isNonMobile = useMediaQuery("(min-width:600px)");


    return (
        <Box m="20px">
            <Header title="CREATE SONG" subtitle="Create a New Song" />

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
                                label="Song Name"
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
                                type="number"
                                label="Album Id"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.album_id}
                                name="album_id"
                                error={!!touched.album_id && !!errors.album_id}
                                helperText={touched.album_id && errors.album_id}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Song
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
    album_id: yup.number().required("required")
});
const initialValues = {
    name: "",
    album_id: "",
};

export default NewSong;
