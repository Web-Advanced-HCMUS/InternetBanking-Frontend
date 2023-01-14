import { makeStyles } from '@mui/styles';

const useStylesLogin = makeStyles((theme) => ({
  footer: {
    minWidth: 450,
    marginLeft: '0 !important',
    marginTop: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    display: 'flex',
  },
  fchild1: {
    backgroundColor: '#563D82',
    width: '25%',
    height: '24px',
    borderBottomLeftRadius: 8,
  },
  fchild2: {
    backgroundColor: '#2774AE',
    width: '25%',
    height: '24px',
  },
  fchild3: {
    backgroundColor: '#EB3300',
    width: '25%',
    height: '24px',
  },
  fchild4: {
    backgroundColor: '#FF9425',
    width: '25%',
    height: '24px',
    borderBottomRightRadius: 8,
  },

  eye: {
    position: 'absolute',
    top: 25,
    right: 9,
    cursor: 'pointer',
    color: '#000',
  },

  logoTimo: {
    width: '50%',
    marginBottom: '13px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonChangeBg: {
    top: '20px',
    right: '16px',
    cursor: 'pointer',
    position: 'absolute',
  },
}));

export default useStylesLogin;
