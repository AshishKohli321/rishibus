 var nav = document.getElementById("nav");
        window.onscroll = function(){
            if(window.pageYOffset > 600)
            {
               nav.style.background ="#27478a";
               nav.style.transition =".5s";
            }
            else{
                nav.style.background ="transparent";
            }

        }   
 //Search//////////////////

 // Clock mehod
setInterval( ()=>{
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes(); 
    secondtime = d.getSeconds();  

    day = d.getDay();
    month = d.getMonth();
    fullyear = d.getFullYear(); 

    hourRoted = 30*hourtime + minutetime/2 ;
    minuteRoted = 6*minutetime;
    secondRoted = 6*secondtime;

    hour.style.transform=`rotate(${hourRoted}deg)`;
    minute.style.transform=`rotate(${minuteRoted}deg)`;
    second.style.transform=`rotate(${secondRoted}deg)`;

    if(hourtime>12){
        hourtime = hourtime - 12;
        Ampm = 'PM';
    }else{
        Ampm = 'AM';
    }
    if(hourtime == 12){
        hourtime = 12;
    }
    document.getElementById("digitalClock").innerHTML = hourtime + ":" + minutetime + ":" + secondtime + " " +Ampm;
    document.getElementById("currentDate").innerHTML = day + "/" + month + "/" + fullyear;
console.log(d);
},1000);


 // Clock mehod

const search_btn_fun = () =>{
    // alert("hello");
    let filter = document.querySelector("#input_search").value.toUpperCase();
    // console.log(filter);
    let myTable = document.getElementById("myTable1");

    let tr = myTable.getElementsByTagName("tr");
    for (var i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[2];
        if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
        
    }



    //table2
     let myTable2 = document.getElementById("myTable2");
     let tr2 = myTable2.getElementsByTagName("tr");
        for (var i=0;i<tr2.length;i++){
            let td2 = tr2[i].getElementsByTagName("td")[1];
            if(td2){
                let textvalue = td2.textContent || td2.innerHTML;
                if(textvalue.toUpperCase().indexOf(filter) > -1){
                    tr2[i].style.display="";
                }else{
                    tr2[i].style.display="none";
                }
            }
            
        }
    //table2


    //table3
     let myTable3 = document.getElementById("myTable3");
     let tr3 = myTable3.getElementsByTagName("tr");
        for (var i=0;i<tr3.length;i++){
            let td3 = tr3[i].getElementsByTagName("td")[1];
            if(td3){
                let textvalue = td3.textContent || td3.innerHTML;
                if(textvalue.toUpperCase().indexOf(filter) > -1){
                    tr3[i].style.display="";
                }else{
                    tr3[i].style.display="none";
                }
            }
            
        }
    //table3
    //table4
     let myTable4 = document.getElementById("myTable4");
     let tr4 = myTable4.getElementsByTagName("tr");
        for (var i=0;i<tr4.length;i++){
            let td4 = tr4[i].getElementsByTagName("td")[1];
            if(td4){
                let textvalue = td4.textContent || td4.innerHTML;
                if(textvalue.toUpperCase().indexOf(filter) > -1){
                    tr4[i].style.display="";
                }else{
                    tr4[i].style.display="none";
                }
            }
            
        }
    //table4

}





 //Search////////////////// 

    