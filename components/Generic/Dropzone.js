import { AttachFile, Cancel } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ onChange, getValues, name, setValue }, ref) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      file.preview = URL.createObjectURL(file);
      onChange(file);
    },
  });
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: getValues(name) == null ? 5 : 0,
        overflow: "hidden",
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: isDragAccept
          ? "success.main"
          : isDragReject
          ? "error.main"
          : "gray",
        borderRadius: 2,
        width: "min(100%, 400px)",
        height: 400,
        outline: "none",
        transition: "border .24s ease-in-out",
        mx: "auto",
        textAlign: "center",
        "&:hover": {
          borderColor: "#62A82C",
        },
      }}
      {...getRootProps()}
    >
      {getValues(name) == null ? (
        <>
          <input
            {...getInputProps()}
            onChange={(e) => {
              const file = e.target.files[0];
              file.preview = URL.createObjectURL(file);
              onChange(file);
            }}
          />

          <AttachFile
            sx={{
              fontSize: 80,
              mb: 2,
            }}
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag and drop some files here,
              <br />
              or click to select files
            </p>
          )}
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            src={getValues(name).preview || getValues(name)}
            alt="preview"
            layout="fill"
            objectFit="cover"
          />

          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              p: "3px",
            }}
            onClick={(e) => {
              setValue(name, null);
              e.stopPropagation();
            }}
          >
            <Cancel />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default React.forwardRef(DropZone);
