import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function CalcTimes(props: any) {
  const toggleStr = props.toggleStr;
  const toggleTest = props.onChange;
  const castleKinds = props.onClick;
  return (
    <>
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        城種別
      </Typography>

      <ToggleButtonGroup
        value={toggleStr}
        exclusive
        onChange={toggleTest}
        aria-label="text alignment"
      >
        <ToggleButton
          value="red"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          赤城
        </ToggleButton>
        <ToggleButton
          value="blue"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          青城
        </ToggleButton>
        <ToggleButton
          value="gold"
          onClick={castleKinds}
          aria-label="left aligned"
          sx={{
            width: 1 / 3,
          }}
        >
          金城
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
