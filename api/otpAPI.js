import axios from 'axios';

export default axios.create({
  baseURL:
    'https://2factor.in/API/V1/b2657eb7-ea1d-11ea-9fa5-0200cd936042/SMS/VERIFY',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});
