const { request } = require("express");
let express = require("express");
let router = express.Router();
let dataBase = require("../models/dataBase.js");
module.exports = router;

router.post("/addCandidates", express.json(), (req, res) => {
    dataBase.addCandidates(req.body.candidates);
    dataBase.DeleteAllVoters();
    let finalResultFromData = { result: "success" };
    res.json(finalResultFromData);
});

router.get("/importAllCandidate", (req, res) => {
    res.json({ candidates: dataBase.importAllCandidate() });
});

router.get("/importVoteCount", (req, res) => {
    let finalResultFromData = {};
    finalResultFromData.votes = new Object();
    for (let c of dataBase.importAllCandidate()) {
        console.log(c, dataBase.importVoteCount(c));
        finalResultFromData.votes[c] = dataBase.importVoteCount(c);
    }
    res.json(finalResultFromData);
});

router.post("/voteCandidate", express.json(), (req, res) => {
    let finalResultFromData = {};
    if (!dataBase.checkVoterExistance(req.body.voter)) {
        finalResultFromData.error = "You have already voted";
    } else {
        let selectedCandidate = req.body.selectedCandidate;
        let votes = dataBase.importVoteCount(selectedCandidate);
        if (votes == -1) {
            finalResultFromData.error = "Please enter a valid candidate";
        } else {
            finalResultFromData.result = "success";
            dataBase.addVotersToCandidate(selectedCandidate, votes + 1);
        }
    }
    res.json(finalResultFromData);
});