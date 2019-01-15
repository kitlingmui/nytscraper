import axios from "axios";

export default {

  // Get Articles when onClick navbar scrape-btn
  getArticles: function() {
      return axios.post("/api/scrape");
  },
  // Get Saved Articles when onClick navbar saved-btn 
  getsaveArticles: function() {
      return axios.get("/api/saved");
  },
  // save an articles
  saveArticle: function(id){
      return axios.put('/api/savearticle' + id)
  }
  
};

// Save and delete function to be fixed
  // Gets all news
  // getStacks: function() {
  //   return axios.get("/api/stacks");
  // },
  // // Gets the news with the given id
  // getStacks: function(id) {
  //   return axios.get("/api/stacks/" + id);
  // },
  // // Deletes the news with the given id
  // deleteStack: function(id) {
  //   return axios.delete("/api/stacks/" + id);
  // },
  // // Saves a news to the database
  // saveStack: function(stackData) {
  //   return axios.post("/api/stacks", stackData);
  // }

