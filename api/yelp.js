import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer w-q_SUcY-e5VFbT2xejZjH5I9Bi1f63-GbSZq-AXAx21wABQVho-nxSly-Fs1H4i5MRF7CG9dEbKuMj_kwtflsM2diYi1TS1AHsp-SyyKUwjwjll0rkoWYKy1B4sX3Yx',
  },
});
