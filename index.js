const axios = require("axios");

app.get("/live", async (req,res)=>{
 try{
  const r = await axios.get(
   "https://www.cricbuzz.com/api/cricket-match/live-scores",
   {
     headers:{
       "User-Agent":"Mozilla/5.0 (Linux; Android 13; Pixel 7)",
       "Accept":"application/json",
       "Referer":"https://www.cricbuzz.com/"
     }
   }
  );
  res.json(r.data);
 }catch(e){
  res.status(500).json({error:"Cricbuzz blocked"});
 }
});
