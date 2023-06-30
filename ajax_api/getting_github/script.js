


async function apicall()
{
    var response = await fetch("https://api.github.com/users/adion81");
    var coderData = await response.json();
    var count = coderData.followers
    var element = document.querySelector("#propic")
    console.log(count)
    var h1 = document.querySelector("h1");
    element.src = coderData.avatar_url
    document.getElementById("bntID")
    
    h1.innerText = "Follower count: " + count;

    return coderData;
}
