let vote = () => {
    let enteredVoterID = document.querySelector("#enteredVoterID").value;
    let selectedCandidate = document.querySelector("#candidates").value;
    fetch("/voteCandidate", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "selectedCandidate": selectedCandidate, "voter": enteredVoterID })
        })
        .then(res => res.json())
        .then(res => {
            if (res.result == "success") {
                new Swal({ icon: 'success', text: "You have successfully voted the candidate" })
            } else {
                new Swal({ icon: 'error', text: "You are not allowed to vote again!" })
            }
        })
        .catch(err => { new Swal({ err }) });
}
window.onload = () => {
    document.querySelector("#vote_button").addEventListener("click", vote);
    fetch("/importAllCandidate")
        .then(res => res.json())
        .then(res => {
            let candidates = document.querySelector("#candidates");
            for (let cand of res.candidates) {
                let VotedCandidate = document.createElement("option");
                VotedCandidate.text = cand;
                candidates.options.add(VotedCandidate);
                console.log(VotedCandidate)
            }
        })
        .catch(err => { new Swal({ err }) });
};