function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let result;
    result = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "result: " + result;
}
async function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const url = `http://localhost:8080/api/add?num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        document.getElementById("result").innerText = "Result: " + data.result;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}
async function sub() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const url = `http://localhost:8080/api/sub?num1=${num1}&num2=${num2}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        document.getElementById("result").innerText = "Result: " + data.result;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}