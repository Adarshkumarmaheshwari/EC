let textResult = document.querySelector("#result_text")
window.onload = () => {
    fetch("/importVoteCount")
        .then(res => res.json())
        .then(res => {
            let res1 = "Please conduct poll for result";
            let res2 = "Please conduct poll for result";
            res.votes["Please conduct poll for result"] = -1;
            for (let cand in res.votes) {
                if (res.votes[cand] > res.votes[res1]) {
                    res2 = res1;
                    res1 = cand;
                } else if (res.votes[cand] > res.votes[res2]) {
                    res2 = cand;
                }
            }
            let resultText = "";
            resultText += "WON the poll : " + res1 + "( " + res.votes[res1] + " )<br>";
            resultText += "LOST the poll : " + res2 + "( " + res.votes[res2] + " )";
            textResult.innerHTML = resultText;
        })
        .catch(err => { new Swal({ icon: 'error', err }) });
};