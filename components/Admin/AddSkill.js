import { gql, useMutation } from "@apollo/client";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import ButtonBackground from "../../assets/Pattern/ButtonBackground";
import { CategoryIcon } from "../../public/icons/CategoryIcon";
import { uploadImage } from "../../services/fileUpload";

// Controlled components
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";
import TaskConfirmationModal from "../Generic/TaskConfirmationModal";

const ADD_SKILL = gql`
  mutation SkillCreate($data: SkillCreateInput!) {
    skillCreate(data: $data) {
      id
      name
      description
      image
    }
  }
`;

const UPDATE_GIG = gql`
  mutation SkillUpdate($skillUpdateId: ID!, $data: SkillUpdateInput!) {
    skillUpdate(id: $skillUpdateId, data: $data)
  }
`;

const AddSkill = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");
  const [action2, setAction2] = React.useState("Add");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [addSkill] = useMutation(ADD_SKILL, {
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Skill added successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
    },
  });

  const [updateGig] = useMutation(UPDATE_GIG, {
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Skill updated successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
    },
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setModalOpen(true);
    const image = await uploadImage(formData.image, "skill-images");
    if (action == "Edit") {
      console.log("Edit");
      updateGig({
        variables: {
          skillUpdateId: data.id,
          data: {
            name: formData.name,
            description: formData.description,
            image: image,
          },
        },
      });
    } else {
      addSkill({
        variables: {
          data: {
            name: formData.name,
            description: formData.description,
            image: image,
          },
        },
      });
    }
  };

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addSkill" ? action : setAction("Edit");
    parts[parts.length - 1] == "addSkill" ? action2 : setAction2("Edit");
  }, [router, action, action2]);

  React.useEffect(() => {
    if (action == "Edit") {
      reset(data);
    }
  }, [data, action, reset]);

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <CategoryIcon sx={{ mr: 1, mb: 0.3 }} fontSize="large" />
            {action2} Skill
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="name"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Skill Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="name"
                  name="name"
                  placeholder="Skill Name"
                  fullWidth
                  autoComplete="Skill Name"
                  error={errors.name ? true : false}
                  helperText={errors.name && "Skill Name is required"}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="description"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Skill Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="description"
                  name="description"
                  placeholder="Skill Description"
                  fullWidth
                  multiline
                  rows={2}
                  autoComplete="Skill Description"
                  error={errors.description ? true : false}
                  helperText={
                    errors.description && "Skill Description is required"
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="image"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Skill Image
                </InputLabel>
                <ControlledDropzone
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  // required
                  name="image"
                  id="image"
                />
                {errors.image && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    Image is required
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
                  <ButtonBackground />
                  <CategoryIcon sx={{ mr: 0.3, mb: 0.2 }} fontSize="small" />
                  <span className="relative">{action2} Skill</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <TaskConfirmationModal
        open={modalOpen}
        redirectURL="/admin/viewSkills"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default AddSkill;
