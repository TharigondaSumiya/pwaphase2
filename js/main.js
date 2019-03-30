function submitdata(){
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var phoneno=document.querySelector("#phoneno").value;
var emailid=document.querySelector("#emailid").value;
var address=document.querySelector("#address").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyear=document.querySelector("#gyear").value;
var gpercentage=document.querySelector("#gpercentage").value;
var iinstitute=document.querySelector("#iinstitute").value;
var ibranch=document.querySelector("#ibranch").value;
var iyear=document.querySelector("#iyear").value;
var ipercentage=document.querySelector("#ipercentage").value;
var sscinstitute=document.querySelector("#sscinstitute").value;
var sscbranch=document.querySelector("#sscbranch").value;
var sscyear=document.querySelector("#sscyear").value;
var sscpercentage=document.querySelector("#sscpercentage").value;
var skills=document.querySelector("#skills").value;
// indexedDB implementation
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
  }
    open.onerror=function(error)
    {
      console.log("error exists");
    }
    open.onsuccess=function(e){
      request=e.target.result;
      var transaction=request.transaction("formdata","readwrite");
      store=transaction.objectStore("formdata");
      store.put({
        career:career,
        name:name,
        phoneno:phoneno,
        emailid:emailid,
        address:address,
        education:[
          {
        institute:ginstitute,
        branch:gbranch,
        year:gyear,
         percentage:gpercentage
      },
     {
        institute:iinstitute,
        branch:ibranch,
        year:iyear,
        percentage:ipercentage
      },
      {
        institute:sscinstitute,
        branch:sscbranch,
        year:sscyear,
        percentage:sscpercentage
      }
    ],
        skills:skills
      });
    }

window.open("index.html");
}
