import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BackpackIcon from "@mui/icons-material/Backpack";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Box, Button, Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const AccountInfor = {
    username: "Ronaldo",
    avatarImage:
      "https://icdn.dantri.com.vn/thumb_w/680/2022/12/05/16702399461500-1670244611370.jpg",
    backgroundImage:
      "https://img.freepik.com/free-vector/purple-watercolor-abstract-background_52683-73545.jpg?w=2000",
  };

  const ButtonList1 = [
    {
      title: "Chuyển tiền",
      icon: CompareArrowsIcon,
      url: '/transfer'
    },
    {
      title: "Nhắc nợ",
      icon: BackpackIcon,
      url: '/debt'
    },
  ];
  const ButtonList2 = [
    {
      title: "Top up",
      icon: VerticalAlignTopIcon,
      url: '/home'
    },
    {
      title: "Thanh toán",
      icon: AssignmentIcon,
      url: '/home'
    },
  ];

  return (
    <Box color={"black"} marginBottom="10rem">
      <Box
        display={"flex"}
        flexDirection={"row"}
        width="100%"
        gap={"1rem"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        // backgroundImage="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);"
        mt={2}
        padding="3vh"
        sx={{
            backgroundImage: 'linear-gradient(to right, #A88BEB, #F8CEEC)'
        }}
      >
        <Box component="div" fontSize={"2em"} fontWeight="400" color={"aliceblue"}>
          Xin chào, </Box>
        <Box fontSize={"2em"} fontWeight="bold" color={"aliceblue"}>{AccountInfor.username}</Box>
        <Avatar
          src={AccountInfor.avatarImage}
          alt="account-avatar"
          sx={{
            width: "100",
            height: "50"
          }}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        width="60%"
        gap={"1em"}
        justifyContent={"center"}
        margin="auto"
        padding={1}
      >
        {ButtonList1.map((button) => (
          <Button
            disableRipple
            display={"flex"}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"center"}
            fullWidth="true"
            sx={{
              bgcolor: "#2c3e50",
              boxShadow: "0.5px 2px 2px 2px #fff",
              fontSize: "1.3rem",
              color: "#8e44ad",
              borderRadius: "5px",
              gap: "0.75em",
              "&:hover": {
                bgcolor: "#95a5a6",
                color: "#9b59b6",
                boxShadow: "0 0.5em 0.5em -0.4em #fff",
                transform: "translateY(-0.15em)",
                transition: "0.25s",
                cursor: "pointer",
              },
            }}
            component={Link} to={button.url}
          >
            <button.icon />
            <div width="50" fontSize="1rem">{button.title}</div>
          </Button>
        ))}
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        width="60%"
        gap={"1em"}
        justifyContent={"center"}
        margin="auto"
        padding={1}
      >
        {ButtonList2.map((button) => (
          <Button
            disableRipple
            display={"flex"}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"center"}
            fullWidth="true"
            sx={{
              bgcolor: "#2c3e50",
              boxShadow: "0.5px 2px 2px 2px #fff",
              fontSize: "1.3rem",
              color: "#8e44ad",
              borderRadius: "5px",
              gap: "0.75em",

              "&:hover": {
                bgcolor: "#95a5a6",
                color: "#9b59b6",
                boxShadow: "0 0.5em 0.5em -0.4em #fff",
                transform: "translateY(-0.15em)",
                transition: "0.25s",
                cursor: "pointer",
              },
            }}

          >
            <button.icon />
            <div width="50">{button.title}</div>
          </Button>
        ))}
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"0.5rem"}
        alignItems="center"
        alignContent={"center"}
        justifyContent={"space-between"}
        width="60%"
        m={"auto"}
        mt="30px"
        bgcolor={"#2c3e50"}
        boxShadow={"3px 3px 10px 3px #000"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems="center"
          padding={"15px"}
          color="aliceblue"
        >
          <Box fontWeight={"600"} fontSize="1.5em">
            Tài khoản chính
          </Box>
          <Box fontWeight={"250"} color="#FEA47F">
            Số tài khoản: 888192938012
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"15px"}
          flexWrap="wrap"
          alignItems="center"
          color={"#9b59b6"}
          fontSize="1.5em"
          marginRight={"5px"}
          fontWeight="bold"
        >
          <AccountBalanceWalletIcon />
          3,000,000 VND
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"0.5rem"}
        alignItems="center"
        alignContent={"center"}
        justifyContent={"space-between"}
        width="60%"
        m={"auto"}
        mt="30px"
        bgcolor={"#2c3e50"}
        boxShadow={"3px 3px 10px 3px #000"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems="center"
          padding={"15px"}
          color="aliceblue"
        >
          <Box fontWeight={"600"} fontSize="1.5em">
            Tài khoản tiết kiệm
          </Box>
          <Box fontWeight={"250"} color="#FEA47F">
            Thời gian đáo hạn: 25/12/2023
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"15px"}
          flexWrap="wrap"
          alignItems="center"
          color={"#9b59b6"}
          fontSize="1.5em"
          marginRight={"5px"}
          fontWeight="bold"
        >
          <AccountBalanceWalletIcon />
          300,000,000 VND
        </Box>
      </Box>
    </Box>
  );
}

export default App;
