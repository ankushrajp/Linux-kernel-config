function openContent(event, id)
{
    var i, content, links;

    content = document.getElementsByClassName("content");
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }

    links = document.getElementsByClassName("link");
        for (i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }

    document.getElementById(id).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.getElementById("defaultOpen").click();

function openEvent(event)
{
    event.currentTarget.nextElementSibling.classList.toggle("show");
    event.currentTarget.classList.toggle("active");
}

const name = ["Symbol", "Choice", "Info"];

var input = document.querySelectorAll("#code");
for (var i = 0; i < input.length; i++){

        var index = input[i].innerHTML.indexOf("Info");
        input[i].innerHTML = input[i].innerHTML.substring(0,index+9) + '<div class="info">' + input[i].innerHTML.substring(index+9) + '</div>';

        for (var j = 0; j < name.length; j++){
                input[i].innerHTML = input[i].innerHTML.replace(name[j],`<mark>${name[j]}</mark>`);
        }
}
