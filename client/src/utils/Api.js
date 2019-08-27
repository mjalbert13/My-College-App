// import axios from "axios";

// const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=";
// const SEARCH = "&&_fields=id,school.name,school.state,latest.student.size,latest.cost.avg_net_price.private,latest.cost.avg_net_price.public";
// const APIKEY = "&api_key=BIFbRR52Xaw50EbCN0uhRJElf9mG1fkiDHAK7fEL";
// // const query = "boston%20college";

// // const key = process.env.KEY;


// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + SEARCH + APIKEY);
//     // return axios.get(BASEURL + query + SEARCH + "&api_key=" + key);
//   }

// };

import axios from "axios";

const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools?_zip=";
const SEARCH = "&_distance=20mi&&_fields=id,school.name,school.state,latest.student.size,latest.cost.avg_net_price.private,latest.cost.avg_net_price.public&_per_page=100";
const APIKEY = "&api_key=BIFbRR52Xaw50EbCN0uhRJElf9mG1fkiDHAK7fEL";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + SEARCH + APIKEY);
  }

};