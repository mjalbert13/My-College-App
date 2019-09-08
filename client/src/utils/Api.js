import axios from "axios";
import { log } from "util";

const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=";
const SEARCH = "&&_fields=id,school.name,school.state,latest.student.size,latest.cost.avg_net_price.private,latest.cost.avg_net_price.public,school.school_url";
const APIKEY = "&api_key=BIFbRR52Xaw50EbCN0uhRJElf9mG1fkiDHAK7fEL";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + SEARCH + APIKEY);
  },

  getColleges: function() {
    console.log("getting");
    return axios.get("/save");
  },

  saveNote: function(collegeName) {
    console.log("saving note function");
    return axios.put(`/save/${collegeName.id}`, collegeName);
  },

  saveCollege: function(collegeName) {
    console.log("saving college step 2");
    return axios.post(`/save/${collegeName.id}`, collegeName);
  }

};