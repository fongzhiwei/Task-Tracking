
function check(){

    const member = JSON.parse(localStorage.getItem('team'));

    const membersAddress = [];
    const membersPw = [];

    for (var i = 0; i < member.teamMembers.length; i++) {
        membersAddress[i] = member.teamMembers[i].address;
        membersPw[i] = member.teamMembers[i].password;
    }


    var userAdr = document.getElementById('userAddress').value;
    var userPw = document.getElementById('userPw').value;

    if(membersAddress.includes(userAdr)){
        var idx = membersAddress.indexOf(userAdr)
        if(membersPw[idx] === userPw){
            location.replace("index-d.html");
        }
        else{
            alert('Wrong Password');
        }
    }
    else{
        alert("Invalid Email")
    }

}