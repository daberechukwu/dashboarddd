import { Box } from "@mui/material";

import { tokens } from "../../theme";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
     
     wqjipewjartes[rhdyjthkj]
    </Box>
  );
};

export default Contacts;