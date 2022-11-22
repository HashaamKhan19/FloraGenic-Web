import { IconButton, Box } from '@mui/material'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AttachFile, Cancel } from '@mui/icons-material'

export default function DropZone({ setValue, name }) {
  const onDrop = useCallback((acceptedFiles) => {
    setValue(
      name,
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    )
  }, [])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
    onDrop,
  })
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: watch(name) == null || watch(name) === "" ? 5 : 0,
        overflow: 'hidden',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: isDragAccept
          ? 'success.main'
          : isDragReject
          ? 'error.main'
          : 'gray',
        borderRadius: 2,
        width: 'min(100%, 400px)',
        height: 400,
        outline: 'none',
        transition: 'border .24s ease-in-out',
        mx: 'auto',
        textAlign: 'center',
        '&:hover': {
          borderColor: '#62A82C',
        },
      }}
      {...getRootProps()}
    >
      {name == null || name === '' ? (
        <>
          <input {...getInputProps()} />

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
              Drag 'n' drop some files here,
              <br />
              or click to select files
            </p>
          )}
        </>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={name[0].preview || name}
            alt="preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <IconButton
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              p: '3px',
            }}
            onClick={() => {
              setValue(name, null)
            }}
          >
            <Cancel />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
