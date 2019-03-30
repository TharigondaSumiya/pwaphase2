var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB|| window.mozIndexedDB|| window.msIndexedDB||widow.webkitIndexedDB;
if (!idb in window)
{
  console.log("indexedDB is not supported in the current browser");
}
  // IndexedDB creation
  var request;
  var store;
  var open=idb.open("storeData",1);
  console.log("IndexedDB is created");
  open.onupgradeneeded=function (e){
    var request=e.target.result;
    request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
    console.log("store is created");
    open.onerror=function(error)
    {
      console.log("error exists");
    }
  }
    open.onsuccess=function(e){
      request=e.target.result;
      var transaction=request.transaction("formdata","readwrite");
      store=transaction.objectStore("formdata");
      var info=store.get(paravalue);
      info.onsuccess=function(data){
        console.log(data);
        personalinfo(data.target.result);
      }
    }
      var left=document.querySelector(".left");
      var right=document.querySelector(".right");
        function personalinfo(pi){
          var image=document.createElement("img");
          image.src="images/adduser.svg";
          image.alt=pi.name;
          left.append(image);
          var name=document.createElement("h3");
          name.textContent=pi.name;
          var phoneno=document.createElement("h3");
          phoneno.textContent=pi.phoneno;
          var emailid=document.createElement("h3");
          emailid.textContent=pi.emailid;
          left.append(name);
          left.append(phoneno);
          left.append(emailid);
          var career=document.createElement("h1");
          career.textContent="Career Objectives";
          right.append(career);
          var hr=document.createElement("hr");
          right.append(hr);
          var pa=document.createElement("p");
          pa.textContent=pi.career;
          right.append(pa);
          var ed=document.createElement("h1");
          ed.textContent="Education Details";
          right.append(ed);
          var hr=document.createElement("hr");
          right.append(hr);
          var table=document.createElement("table");
          table.border="2";
          var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
          var tr2="";
          for(var i in pi.education)
          {
            tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].year+"</td><td>"+pi.education[i].percentage+"</td><td>";
          }
          table.innerHTML=tr1+tr2;
          right.append(table);
          var sk=document.createElement("h1");
          sk.textContent="SKILLS";
          right.append(sk);
          var hr=document.createElement("hr");
          right.append(hr);
          var ss=document.createElement("h3");
          ss.textContent=pi.skills;
          right.append(ss);
           }
              //   var hr=document.createElement("hr");
              //   right.append(hr);
              //   var ul=document.createElement("ul");
              //   for(var i in sk){
              //     var li=document.createElement("li");
              //     li.innerHTML=sk[i].name+":"+sk[i].info;
              //     ul.append(li);
              //   }
              //   right.append(ul);
              //     }
              //
