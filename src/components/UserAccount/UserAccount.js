
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BackpackIcon from '@mui/icons-material/Backpack';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import "./UserAccount.css";
import { Button } from '@mui/material';

function App() {
  return (
    <div className="account-detail">
      <div className="account-container">
        <div className='welcome-title'>
          Xin chào, <span>Ronaldo</span>
        </div>
        <img
          src="https://icdn.dantri.com.vn/thumb_w/680/2022/12/05/16702399461500-1670244611370.jpg"
          alt="account-avatar"
          width="100"
          height="50"
          className="avatar-img"
        />
      </div>

      <div class="account-menu">
        <Button disableRipple class="account-activity">
          <CompareArrowsIcon/>
          <h2>CHUYỂN TIỀN</h2>
          
        </Button>
        <Button disableRipple class="account-activity">
        <BackpackIcon/>
          <h2>NHẮC NỢ</h2>
        </Button>
      </div>

      <div class="account-menu">
        <Button disableRipple class="account-activity">
        <VerticalAlignTopIcon/>
          <h2>TOP UP</h2>
        </Button>
        <Button disableRipple class="account-activity">
        <AssignmentIcon/>
          <h2>THANH TOÁN HÓA ĐƠN</h2>
        </Button>
      </div>

      <div className='account-box'>
        <div className="box-title">
            <div className='title'>Tài khoản chính</div>
            <div className='account-number'>Số tài khoản: 888192938012</div>
        </div>
        <div className='box-balance'>
          <AccountBalanceWalletIcon/>
          3,000,000 VND
        </div>
      </div>
    </div>
  );
}

export default App;
