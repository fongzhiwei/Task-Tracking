teamDetail = document.querySelector("[id=memberList]")

const openMemberModal=()=>{
    const open = document.getElementById("myModal");
    open.style.display= "block";
    loadTaskDetail();
};



const generateNewSection = (member,count) =>`
<tr>
<td>${count}</td>
<td>${member.name}</td>
<td>${member.address}</td>
<td>3 Hours</td>
</tr>`
;


let globalStorage = [];

const loadMemberDetail = () => {
    const getMemberData = localStorage.getItem("team");
    const {team} = JSON.parse(getMemberData);
    i = 0;
    team.map((memberData) => {
        globalStorage.push(memberData)
        

        generateNewSection(memberData,count);
        count++;
    });

};