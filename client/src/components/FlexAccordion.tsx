import { Box } from "@mui/material";
import { styled } from "@mui/system";


const FlexAccordion = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //垂直居中
  flexDirection: "column",
});

export default FlexAccordion;
