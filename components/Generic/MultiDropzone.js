import { AttachFile, Cancel } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/legacy/image";
import React from "react";
import { useDropzone } from "react-dropzone";
const MultiDropzone = ({ onChange, getValues, name, setValue }, ref) => {
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
    onDrop: (files) => {
      const array = Array.from(files);
      array.forEach((file) => {
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      onChange(array);
    },
    // maxFiles: 1,
  });

  const mobileScreen = useMediaQuery("(max-width: 600px)");
  const tabletScreen = useMediaQuery("(max-width: 960px)");
  const desktopScreen = useMediaQuery("(min-width: 960px)");

  const handleFileSelect = (e) => {
    console.log(e.target.files);
    const files = e.target.files;
    console.log(files);
    const array = Array.from(files);
    array.forEach((file) => {
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    });
    onChange(array);
  };

  const handleFileDelete = (index) => {
    let files = getValues(name);
    console.log(files);
    files.splice(index, 1);
    if (files.length === 0) files = null;
    setValue(name, files);
  };

  const handleFileClear = () => {
    setValue(name, null);
  };

  return (
    <>
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
          width: "100%",
          height: 250,
          outline: "none",
          transition: "border .24s ease-in-out",
          mx: "auto",
          textAlign: "center",
          "&:hover": {
            borderColor: "#62A82C",
          },
          fontSize: 12,
        }}
        {...getRootProps()}
      >
        <>
          <input
            {...getInputProps()}
            onChange={(e) => {
              handleFileSelect(e);
            }}
          />

          <AttachFile
            sx={{
              fontSize: 50,
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
      </Box>
      {getValues(name) && (
        <Box>
          <ImageList
            sx={{ width: "100%", mt: 2, maxHeight: 480, overflow: "auto" }}
            cols={(desktopScreen && 3) || (tabletScreen && 2) || 1}
            rowHeight={150}
          >
            {getValues(name) &&
              getValues(name).map((file, index) => (
                <ImageListItem
                  key={index}
                  sx={{
                    position: "relative",
                  }}
                >
                  <Image
                    src={file.preview || file}
                    alt="preview"
                    layout="fill"
                    objectFit="cover"
                  />
                  {file?.name && <ImageListItemBar title={file.name} />}
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      color: "white",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      // p: "3px",
                    }}
                    onClick={() => {
                      handleFileDelete(index);
                    }}
                  >
                    <Cancel />
                  </IconButton>
                </ImageListItem>
              ))}
          </ImageList>
          <Typography variant="caption" color="text.secondary">
            {(getValues(name) && getValues(name).length) || 0} files selected
          </Typography>
          <Typography align="right">
            <Button variant="contained" onClick={handleFileClear} color="error">
              Clear All
            </Button>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default React.forwardRef(MultiDropzone);
