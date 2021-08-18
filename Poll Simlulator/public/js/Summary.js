let summRes = document.querySelector("#summaryRes");

fetch("/importVoteCount")
    .then((res) => res.json())
    .then((res) => {
        let inputTextCandidates = "";
        for (let candidate in res.votes) {
            inputTextCandidates =
                inputTextCandidates +
                (candidate + " => " + res.votes[candidate] + "<br>");
        }
        summRes.innerHTML = inputTextCandidates;
    })
    .catch((err) => {
        new Swal({ err });
    });