function copyText() {
    var aName = document.getElementById("agentsName").value;
    var callsDate = document.getElementById("dateTime").value;
    var toPhoneN = document.getElementById("toPhoneNumber").value;
    var fromPhoneN = document.getElementById("fromPhoneNumber").value;
    var extNumber = document.getElementById("extensionNumber").value;
    var callResults = document.getElementById("callResults").value;

    var e = document.getElementById("callType");
    var sCallType = e.options[e.selectedIndex].text;
    

    //Now, let's get the current date

    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var newTimeDate = callsDate.split("T");

    console.log(newTimeDate);

    document.getElementById("temp").value =
        "---Agents name---\n" + aName + " | " + today + 
        "\n\n --Calls Info--\nTo: " + toPhoneN +
        "\nFrom: " + fromPhoneN + 
        "\nOutbound or Inbound?\n" + sCallType +
        "\nExt# Presenting the issue (if applicable): " + extNumber +
        "\nDate/Time (Year/Month/Day): " + newTimeDate[0] + " // Time: " + newTimeDate[1] +
        "\nResults: " + callResults;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}