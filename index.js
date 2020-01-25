let temp = 'spacx';
console.log(temp);
var divs = document.getElementsByTagName("div");
console.log(divs);
for (var i = 0; i < divs.length; i++) {
    var para = divs[i].innerText
    if (para.includes(temp)) {
        console.log("match hua");
        Array.from(divs[i].children).forEach(item => {
            console.log(item.innerHTML)

            if (item.innerHTML.includes(temp)){
                console.log(item.className)
                Array.from(document.getElementsByClassName(item.className)).forEach(item =>{
                    if(item.innerHTML.includes(temp)){
                        document.getElementsByClassName(item.className)[1].style.backgroundColor="orange"
                    }
                })
            }
        })
    } else {
        //console.log("nhi mila bhai")
    }


}  