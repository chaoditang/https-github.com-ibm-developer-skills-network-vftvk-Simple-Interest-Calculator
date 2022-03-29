function compute() {
    var principal = document.getElementById("principal").value;
    if(principal == null || principal <= 0){
        alert("Enter a positive number");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // get the final result 
    var result = "If you deposit \<mark\>" + principal+"\</mark\>,\<br\> at an interest rate of \<mark\>" + rate + "\</mark\>%\<br\>You will recieve an amount of \<mark\>"
    + interest + "\</mark\>,\<br\>in the year \<mark\>" + year  + "\</mark\>\<br\>";
    document.getElementById("result").innerHTML= result;

}

function updateRate() {
    var reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = reteval + "%";
}
