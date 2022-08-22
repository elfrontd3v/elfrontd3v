import { Button, styled } from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div className="App">
      <Button variant="text" color="primary">
        hi
      </Button>
      <Button
        variant="contained"
        color="otherColor"
        startIcon={<AddchartIcon />}
      >
        hi
      </Button>
      <Button variant="outlined" disabled>
        hi
      </Button>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
