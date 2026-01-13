const express = require("express");
const axios = require("axios");
const app = express();

app.get("/live", async (req,res)=>{
 try{
  const r = await axios.get("https://www.cricbuzz.com/api/cricket-match/live-scores",{
    headers:{
      "User-Agent":"Mozilla/5.0"
    }
  });
  res.json(r.data);
 }catch(e){
  res.status(500).json({error:"Cricbuzz blocked"});
 }
});

app.listen(3000);
