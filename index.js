const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
  res.send("ESPN Cricket Proxy Running");
});

app.get("/live", async (req,res)=>{
  try{
    const r = await axios.get(
      "https://hs-consumer-api.espncricinfo.com/v1/pages/matches/live"
    );
    res.json(r.data);
  }catch(e){
    res.status(500).json({error:"ESPN fetch failed"});
  }
});

app.listen(PORT, ()=>console.log("Server running", PORT));
