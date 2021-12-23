let emp_data=[{"id":1,"first_name":"Zea","email":"zfarnhill0@privacy.gov.au","gender":"Polygender"},
{"id":2,"first_name":"Dorree","email":"dswyn1@nps.gov","gender":"Polygender"},
{"id":3,"first_name":"Ninnette","email":"nhynde2@php.net","gender":"Female"},
{"id":4,"first_name":"Siffre","email":"shickin3@angelfire.com","gender":"Genderqueer"},
{"id":5,"first_name":"Kimmie","email":"kscaife4@jimdo.com","gender":"Genderfluid"},
{"id":6,"first_name":"Shoshana","email":"sstuck5@e-recht24.de","gender":"Non-binary"},
{"id":7,"first_name":"Vilma","email":"vbiddlestone6@answers.com","gender":"Non-binary"},
{"id":8,"first_name":"Pris","email":"pfiggs7@about.me","gender":"Bigender"},
{"id":9,"first_name":"Kip","email":"kpetrecz8@shinystat.com","gender":"Genderqueer"},
{"id":10,"first_name":"Letitia","email":"ltrinbey9@oaic.gov.au","gender":"Agender"},
{"id":11,"first_name":"Derick","email":"dvanettia@nbcnews.com","gender":"Non-binary"},
{"id":12,"first_name":"Sebastian","email":"sorteub@e-recht24.de","gender":"Male"},
{"id":13,"first_name":"Titus","email":"tadamic@epa.gov","gender":"Genderfluid"},
{"id":14,"first_name":"Mehetabel","email":"mdenisd@walmart.com","gender":"Bigender"},
{"id":15,"first_name":"Aidan","email":"arebankse@163.com","gender":"Non-binary"},
{"id":16,"first_name":"Laryssa","email":"lbartolomieuf@homestead.com","gender":"Polygender"},
{"id":17,"first_name":"Dolf","email":"dstraneog@shutterfly.com","gender":"Genderqueer"},
{"id":18,"first_name":"Kit","email":"kpegdenh@behance.net","gender":"Bigender"},
{"id":19,"first_name":"Gratiana","email":"ganthilli@usgs.gov","gender":"Agender"},
{"id":20,"first_name":"Beryl","email":"bcauntj@irs.gov","gender":"Male"},
{"id":21,"first_name":"Sadella","email":"strembeyk@narod.ru","gender":"Polygender"},
{"id":22,"first_name":"Tasia","email":"twinsiowieckil@narod.ru","gender":"Agender"},
{"id":23,"first_name":"Reid","email":"rpineauxm@npr.org","gender":"Female"},
{"id":24,"first_name":"Doroteya","email":"dfishwickn@wikia.com","gender":"Bigender"},
{"id":25,"first_name":"Reina","email":"rstowgillo@goo.gl","gender":"Genderqueer"},
{"id":26,"first_name":"Kelila","email":"kfrerep@wiley.com","gender":"Polygender"},
{"id":27,"first_name":"Carla","email":"cboolsq@fema.gov","gender":"Female"},
{"id":28,"first_name":"Bobette","email":"bwrittler@blogspot.com","gender":"Male"},
{"id":29,"first_name":"Delilah","email":"dmapstons@admin.ch","gender":"Female"},
{"id":30,"first_name":"Merci","email":"mgeorgt@vistaprint.com","gender":"Polygender"},
{"id":31,"first_name":"Tami","email":"tgabeu@miibeian.gov.cn","gender":"Bigender"},
{"id":32,"first_name":"Marlow","email":"mfoottitv@newsvine.com","gender":"Agender"},
{"id":33,"first_name":"Rance","email":"rdarkw@intel.com","gender":"Genderqueer"},
{"id":34,"first_name":"Inez","email":"ipennicottx@tiny.cc","gender":"Female"},
{"id":35,"first_name":"Wernher","email":"wedscery@wp.com","gender":"Genderfluid"},
{"id":36,"first_name":"Dorette","email":"dlabesz@icq.com","gender":"Bigender"},
{"id":37,"first_name":"Selina","email":"smcian10@gmpg.org","gender":"Bigender"},
{"id":38,"first_name":"Bren","email":"banderton11@nationalgeographic.com","gender":"Non-binary"},
{"id":39,"first_name":"Hendrik","email":"hallwell12@amazon.co.jp","gender":"Male"},
{"id":40,"first_name":"Myrtia","email":"mimrie13@mapquest.com","gender":"Polygender"},
{"id":41,"first_name":"Meier","email":"mredgrove14@yale.edu","gender":"Male"},
{"id":42,"first_name":"Opaline","email":"omeddings15@mapquest.com","gender":"Non-binary"},
{"id":43,"first_name":"Danice","email":"dsinncock16@hugedomains.com","gender":"Polygender"},
{"id":44,"first_name":"Stanislas","email":"smulqueeny17@example.com","gender":"Agender"},
{"id":45,"first_name":"Marcello","email":"mfawckner18@naver.com","gender":"Agender"},
{"id":46,"first_name":"Gregg","email":"ghillam19@walmart.com","gender":"Female"},
{"id":47,"first_name":"Joann","email":"jjacobowicz1a@bandcamp.com","gender":"Female"},
{"id":48,"first_name":"Kelly","email":"kkirkhouse1b@liveinternet.ru","gender":"Genderfluid"},
{"id":49,"first_name":"Abie","email":"aapplebee1c@independent.co.uk","gender":"Genderqueer"},
{"id":50,"first_name":"Bar","email":"bscarsbrooke1d@xing.com","gender":"Female"}]


function fetch(){
    let rows=" ";
    // for(let i = 0; i < 10; i++){
    //     rows = rows +   `<tr><td> ${emp_data[i].id} </td>
    //                        <td> ${emp_data[i].first_name} </td>
    //                        <td> ${emp_data[i].email} </td>
    //                        <td> ${emp_data[i].gender} </td>
    //                     </tr>`;    
    // }
    // let j=10
    // while(j<20){
    //     rows = rows +   `<tr><td> ${emp_data[j].id} </td>
    //                         <td> ${emp_data[j].first_name} </td>
    //                         <td> ${emp_data[j].email} </td>
    //                         <td> ${emp_data[j].gender} </td>
    //                     </tr>`;  
    //     j++;                
    // }
    // let k=20
    // do{ rows = rows +   `<tr><td> ${emp_data[k].id} </td>
    //                         <td> ${emp_data[k].first_name} </td>
    //                         <td> ${emp_data[k].email} </td>
    //                         <td> ${emp_data[k].gender} </td>
    //                     </tr>`;  
    //     k++;
    // }
    // while(k<=50)

    for(l of emp_data ){
        rows = rows +   `<tr><td> ${l.id} </td>
                            <td> ${l.first_name} </td>
                            <td> ${l.email} </td>
                            <td> ${l.gender} </td>
                        </tr>`;
    }

    document.getElementById("data").innerHTML = rows;  
}
console.log("Working");