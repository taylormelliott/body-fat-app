const sum = () => {
    let a = document.getElementById("current").value
    let b = document.getElementById('desired').value

    let add = Number(a) + Number(b) 

    document.getElementById("output").innerHTML = 'It will take ' + add + " weeks to reach your goal"
}

