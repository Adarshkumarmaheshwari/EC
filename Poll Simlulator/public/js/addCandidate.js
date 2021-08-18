window.onload = () => {
    document.querySelector("#addButton").addEventListener("click", () => {
        let candidates = (document.querySelector("#ListOfRegisteredPersons").value.split('\n'));
        fetch("/addCandidates", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "candidates": candidates })
            })
            .then(res => res.json())
            .then(res => {
                if (res.result == "success") {
                    new Swal({ icon: 'success', text: "candidates set successfully" })
                }
            })
            .catch(err => { new Swal({ icon: 'error', err }) });
    });
}