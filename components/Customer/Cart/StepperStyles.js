import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
  },
  separator: {
    color: "#bfe6a1",
    borderColor: "#bfe6a1",
    border: "4px solid #bfe6a1",
    borderRadius: "200px",
    width: "100%",
  },
  separatorActive: {
    width: "100%",
    color: "#bfe6a1",
    border: `4px solid #62A82C`,
    transition: "all 1s ease",
  },
  steps: {
    width: "100%",
    paddingLeft: "20rem",
    paddingRight: "20rem",
  },
  step: {
    backgroundColor: "#62A82C",
    borderRadius: "200px",
    width: "100%",
  },
  stepIcon: {
    display: "none",
  },
  stepBody: {
    color: "#fff",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
    margin: 0,
    // '&:hover': {
    //   backgroundColor: '#62A82C',
    //   borderRadius: '200px',
    // },
  },
  stepLabel: {
    color: "#fff",
    fontSize: "16px",
  },
  // stepBody: {
  //   display: "none",
  // },

  // step: {
  //   padding: 0,
  // },

  // stepIcon: {
  //   borderWidth: 3,
  // },

  // separator: {
  //   marginLeft: -5,
  //   marginRight: -5,
  //   height: 7,
  // },
}));
