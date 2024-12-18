document.getElementById("careerQuiz").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    
    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions.");
        return;
    }

    let career = "";
    let score = {
        creative: 0,
        technical: 0,
        analytical: 0,
        people: 0,
        machines: 0,
        office: 0,
        outdoor: 0
    };

    // Assign scores
    score[q1.value]++;
    score[q2.value]++;
    score[q3.value]++;

    // Suggest career based on scores
    if (score.creative > score.technical && score.creative > score.analytical) {
        career = "Creative Career (e.g., Designer, Writer, Artist)";
    } else if (score.technical > score.creative && score.technical > score.analytical) {
        career = "Technical Career (e.g., Engineer, Developer, IT Specialist)";
    } else if (score.analytical > score.creative && score.analytical > score.technical) {
        career = "Analytical Career (e.g., Data Analyst, Researcher)";
    } else {
        career = "Mixed Career Path (Consider a combination of interests!)";
    }

    // Show result
    document.getElementById("results").innerText = "We suggest a career in: " + career;
});
