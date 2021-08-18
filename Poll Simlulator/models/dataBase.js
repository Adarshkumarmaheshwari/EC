let votes = {};
let voters = new Set();

let importAllCandidate = () => {
    let persons = [];
    if (persons.size != 0) {
        for (let cand in votes) {
            persons.push(cand);
        }
    }
    return persons;
}

let addVotersToCandidate = (candidate, count) => {
    if (candidate in votes) {
        votes[candidate] = count;
        return true;
    } else {
        return false;
    }
}

let addCandidates = (candidateList) => {
    votes = {};
    for (let cand of candidateList) {
        votes[cand] = 0;
    }
}

let importVoteCount = (candidate) => {
    if (candidate in votes) {
        return votes[candidate];
    } else {
        return -1;
    }
}

let checkVoterExistance = (voter) => {
    if (voters.has(voter)) {
        return false;
    }
    voters.add(voter);
    return true;
}

let DeleteAllVoters = () => {
    if (voters.size != 0) {
        voters.clear();
    }
}

exports.addCandidates = addCandidates;
exports.importAllCandidate = importAllCandidate;
exports.addVotersToCandidate = addVotersToCandidate;
exports.importVoteCount = importVoteCount;
exports.checkVoterExistance = checkVoterExistance;
exports.DeleteAllVoters = DeleteAllVoters;