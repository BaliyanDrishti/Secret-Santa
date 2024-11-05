var santa = ["Aditya Gupta", "Ashish Anand", "Ashok Das", "Bhanuprasad Sunkara", "Bushra", "Deekcha Singh", "Drishti Baliyan", "Koustav Ghosh", "Lalit Parashar", "Mraduvendra Singh", "Namita Jagtap", "Nisha Yadav", "Pallavi Sharma", "Pooja Ghosh", "Sampurna Banerjee", "Sanskriti Sohaney", "Saurabh Yadav", "Shaurya Toshniwal", "Shivaguru Kannan", "Soumalya Bhattacharji", "Srimathi Jagannathan", "Udit Kumar", "UMA Nandanuru", "Utsab Basu", "Varun Verma"];
var child = ["Udit Kumar", "Mraduvendra Singh", "Utsab Basu", "Shaurya Toshniwal", "Deekcha Singh", "Lalit Parashar", "Koustav Ghosh", "Pallavi Sharma", "Saurabh Yadav", "Soumalya Bhattacharji", "Pooja Ghosh", "Bushra", "Sanskriti Sohaney", "Ashok Das", "Bhanuprasad Sunkara", "Drishti Baliyan", "Sampurna Banerjee", "Shivaguru Kannan", "Aditya Gupta", "Ashish Anand", "Namita Jagtap", "UMA Nandanuru", "Varun Verma", "Srimathi Jagannathan", "Nisha Yadav"];
function myfunction() {   

for (var i = 0; i < child.length; i++)
{
    var name = "";
    name = $("#fname").val();

    if(name.toLowerCase() == child[i].toLowerCase())
    {       
        $("#secretSanta").html(santa[i]);
    }    
}
}
