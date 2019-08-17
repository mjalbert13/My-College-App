import axios from "axios";

const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=boston%20college";
const APIKEY = "&apikey=BIFbRR52Xaw50EbCN0uhRJElf9mG1fkiDHAK7fEL";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }

};
