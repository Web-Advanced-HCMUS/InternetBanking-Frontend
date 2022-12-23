import {
    Box,
    Divider,
    Modal,
    TextField,
    Autocomplete,
    Button,
  } from "@mui/material";
  import PaidIcon from "@mui/icons-material/Paid";
  import CloseIcon from "@mui/icons-material/Close";
  
  import { useState } from "react";
  const DebtReminder = () => {
    const DebtInfor = [
      {
        title: "Số dư khả dụng",
        balance: "30.000",
      },
      {
        title: "TỔNG TIỀN NHẬN",
        balance: "0",
      },
      {
        title: "TỔNG TIỀN TRẢ",
        balance: "0",
      },
    ];
  
    const bankFriends = [
      { label: "Lady Gaga", id: "11233" },
      { label: "Taylor Swift", id: "122334" },
      { label: "Justin Bieber", id: "121341" },
      { label: "John Cena", id: "121342" },
    ];
  
    const [openModal, setOpenModal] = useState(false);
    const [bankName, setBankName] = useState('');
    const [debt, setDebt] = useState("");
    const [reason, setReason] = useState("");
  
  
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  
    const handleDebt = (event) => {
      setDebt(event.target.value);
    };
    const handleReason = (event) => {
      setReason(event.target.value);
    };
    const handleChooseBankName = (event) => {
      setBankName(event.target.value)
    }
    const handleDebtSubmit = () => {
      //get all infor
      handleClose();
    }
  
    return (
      <>
  
        {/* Handle Toastify */}
  
        <Box
          display={"flex"}
          flexDirection="column"
          width={"100%"}
          alignItems="center"
        >
          <Box fontSize={"2.2rem"} fontWeight="600" m={"1rem"}>
            Nhắc nợ
          </Box>
          <Box display={"flex"} gap="0.3rem" fontWeight={"300"}>
            Số dư khả dụng:{" "}
            <Box fontWeight={"700"} color="#767474">
              {DebtInfor[0].balance}
            </Box>
          </Box>
  
          <Box
            display={"flex"}
            alignItems="center"
            alignContent={"center"}
            justifyContent="center"
            gap={"0.3rem"}
            m={"1rem"}
            p={"1rem"}
            color="#736B84"
            width={"100%"}
            fontSize="1.2rem"
            sx={{
              boxShadow: "1px 4px 6px -5px #222, 1px -4px 6px -5px #BFBFB6",
  
              "&:hover": {
                color: "#56408a",
                cursor: "pointer",
              },
            }}
          >
            <PaidIcon></PaidIcon>
            <Box>Nhắc nợ</Box>
          </Box>
  
          {/* ------------------------Thông tin nợ---------------------- */}
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            gap="5rem"
            flexWrap={"wrap"}
            paddingY="1rem"
            width="40%"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 0px 5px #C3C3C3",
            }}
          >
            {DebtInfor.map((infor, index) => (
              <Box
                display={"flex"}
                flexDirection="column"
                gap="0.2rem"
                alignItems="center"
                key={infor.title}
              >
                <Box fontWeight={"400"} fontSize="1.2rem">
                  {infor.title}
                </Box>
                <Box
                  fontWeight={"600"}
                  fontSize="1.5rem"
                  color={DebtInfor.length === index + 1 ? "red" : ""}
                >
                  {infor.balance}
                </Box>
              </Box>
            ))}
          </Box>
  
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"flex-end"}
            width="40%"
          >
            <Box
              borderRadius={"5px"}
              bgcolor="#ffffff"
              boxShadow="0px 0px 5px #C3C3C3"
              fontWeight={"700"}
              color="#56408a"
              marginTop="1rem"
              paddingY={"1rem"}
              paddingX={"2rem"}
              sx={{
                "&:hover": {
                  color: "#8C79B8",
                  bgcolor: "aliceblue",
                  transition: "0.5s",
                  cursor: "pointer",
                },
              }}
              onClick={handleOpen}
            >
              TẠO NHẮC NỢ MỚI
            </Box>
          </Box>
  
          {/* -----------------------Nhắc nợ của mình---------------------- */}
          <Box
            display={"flex"}
            flexDirection="column"
            width={"40%"}
            borderRadius={"10px"}
            bgcolor="#ffffff"
            boxShadow="0px 0px 5px #C3C3C3"
            m="2rem"
          >
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent="space-between"
              margin="1rem"
            >
              <Box fontWeight={"600"} fontSize="1.2rem" color={"#56408a"}>
                Cần xử lý
              </Box>
              <Box fontWeight={"600"} fontSize="1.2rem" color={"#56408a"}>
                Thu gọn
              </Box>
            </Box>
            <Divider />
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              justifyItems={"center"}
              alignItems="center"
              margin="1rem"
              gap={"10px"}
            >
              <Box>Chưa có nhắc nợ</Box>
            </Box>
          </Box>
  
          {/* -----------------------Nợ đã trả---------------------- */}
          <Box
            display={"flex"}
            flexDirection="column"
            width={"40%"}
            borderRadius={"10px"}
            bgcolor="#ffffff"
            boxShadow="0px 0px 5px #C3C3C3"
            m="2rem"
          >
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent="space-between"
              margin="1rem"
            >
              <Box fontWeight={"600"} fontSize="1.2rem" color={"#56408a"}>
                Cần xử lý
              </Box>
              <Box fontWeight={"600"} fontSize="1.2rem" color={"#56408a"}>
                Thu gọn
              </Box>
            </Box>
            <Divider />
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              justifyItems={"center"}
              alignItems="center"
              margin="1rem"
              gap={"10px"}
            >
              <Box>Bạn không có nhắc nợ nào</Box>
              <Box>
                Đi mượn nợ nhiều vô thì bạn sẽ có thông tin ở phần này Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nihil ipsa, beatae.
              </Box>
            </Box>
          </Box>
        </Box>
  
  
        {/* -------------------Modal nhắc nợ-----------------  */}
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
        >
          <Box                    
            sx={{
              position: "absolute",
              border: '0px',
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "25%",
              bgcolor: "white",
              p: 3,
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <CloseIcon
                sx={{
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
            </Box>
  
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              gap="0.5rem"
              color="#56408a"
              fontSize={"1.2rem"}
              fontWeight="500"
              marginBottom={3}
            >
              <PaidIcon sx={{ fontSize: 35 }}></PaidIcon>
              <Box>TẠO NHẮC NỢ MỚI</Box>
            </Box>
  
            <Autocomplete
              disablePortal
              id="bank-friends"
              options={bankFriends}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Bạn muốn gửi nhắc nợ tới ai" />
              )            
            }
            value = {bankName}
            onChange = {handleChooseBankName}
  
            />
            <div className="form-group position-relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="balanceInput"
                label="Nhập số tiền"
                id="balanceInput"
                autoComplete="balanceInput"
                value={debt}
                onChange={handleDebt}
              />
            </div>
  
            <div className="form-group position-relative">
              <TextField
                margin="normal"
                fullWidth
                name="reasonInput"
                label="Lý do (không bắt buộc)"
                id="reasonInput"
                value={reason}
                onChange={handleReason}
              />
            </div>
  
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
              sx={{
                bgcolor: "#56408a",
                color: "white",
                marginTop: "1rem",
                paddingY: "0.7rem",
                fontWeight: "600",
              }}
              onClick={handleDebtSubmit}
            >
              GỬI NHẮC NỢ
            </Button>
          </Box>
        </Modal>
      </>
    );
  };
  
  export default DebtReminder;