document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-butn");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", (event) => {
        event.preventDefault(); //prevent form submission and page reload

        const query = document.getElementById("search-input").value.trim();
        const xhr = new XMLHttpRequest();

        //configure GET request with the query parameter
        xhr.open("GET", `superheroes.php?query=${encodeURIComponent(query)}`, true);

        xhr.onload = () => {
            if (xhr.status === 200) {
               
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = "<p>Error fetching data. Please try again.</p>";
            }
        };

        xhr.onerror = () => {
            resultDiv.innerHTML = "<p>Request failed.</p>";
        };

        // Sendrequest
        xhr.send();
    });
});
