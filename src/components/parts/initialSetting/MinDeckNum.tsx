import { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

export default function MinDeckNum(props: any) {
  const register = props.register;
  const [deckNum, setDeckNum] = useState(0);

  useEffect(() => {
    // コンポーネントがマウントされた時にlocalStorageから値を読み込む
    const savedDeckNum = localStorage.getItem("deckNum");
    if (savedDeckNum) {
      setDeckNum(Number(savedDeckNum));
    }
  }, []);

  const handleDeckNumChange = (event: any) => {
    const value = event.target.value;
    setDeckNum(value);
    // 値が変更されるたびにlocalStorageに保存する
    localStorage.setItem("deckNum", value);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto 1fr)",
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
        }}
      >
        1分の駐屯数
      </Typography>
      <TextField
        id="outlined-basic"
        type="number"
        variant="outlined"
        value={deckNum}
        onChange={handleDeckNumChange}
        // {...register("deckNum")}
        sx={{
          ml: 2,
        }}
      />
    </Box>
  );
}
