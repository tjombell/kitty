import Cryptokitty from './Cryptokitty.json';

const options = {
  contracts: [Cryptokitty],
  web3: {
    fallback :{
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  }
};
export default options;
