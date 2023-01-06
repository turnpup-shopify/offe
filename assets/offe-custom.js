// window.onload = function() {
//    var myiFrame = document.getElementById("attentive_creative");
// 	console.log(myiFrame);      
//    var doc = myiFrame.contentWindow.document;
//   	console.log(doc);      
//    var toStyle = doc.querySelector("#closeIconSvg");
//   	console.log(toStyle);      
//    toStyle.style.stroke = "rgb(83, 62, 37)";
// }

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('off-custom-JS DOM fully loaded and parsed');
  
  document.querySelectorAll('#klaviyo_form_button').forEach( (el) => {
    el.addEventListener("click", () => {
      console.log("click klaviyo form button");
      var _klOnsite = window._klOnsite || []; _klOnsite.push(['openForm', 'MpF4JT']);
    })
  })
       
        var second = 1000, 
         minute = second * 60, 
         hour = minute * 60, 
         day = hour * 24;

     var now = new Date().getTime(); 
   
   document.querySelectorAll(".timer").forEach(el => {
                                                   
    var tp_start_date = el.getAttribute("data-start");
    var tp_end_date = el.getAttribute("data-end");
    var tp_block_id = el.getAttribute("data-block-id");
    var tp_label_color = el.getAttribute("data-label-color");
     
    var toLaunchCountDown = new Date(tp_start_date).getTime();  
    var countDown = new Date(tp_end_date).getTime(); 
    var distance = countDown - now;
    var toLaunchDistance = toLaunchCountDown - now;
    var jquerySelector = tp_block_id;
    var debug = Math.floor(toLaunchDistance / (day));
    var debugEnd = Math.floor(distance / (day));
    console.log("tp_start_date: " + tp_start_date);
    console.log("tp_end_date: " + tp_end_date);
    console.log("toLaunchCountDown: " + toLaunchCountDown);
    console.log("debug: ");
    console.log(debug);

    if (toLaunchDistance >= 0 ){       

      console.log("sale starts: " + toLaunchDistance);
      if (Math.floor(toLaunchDistance / (day)) != 0 ) {
       var tempNumber = Math.floor(toLaunchDistance / (day));  
       if (tempNumber == 1) { var temp = "SALE STARTS IN " + tempNumber + " DAY" }
       else { var temp = "SALE STARTS IN " + tempNumber + " DAYS" }       
       document.getElementById(tp_block_id).querySelector(".js-timer").innerText = temp;  
      } 
      else {      
       var tempNumber = Math.floor((toLaunchDistance % (day)) / (hour));  
       if (tempNumber == 1) { var temp = "SALE STARTS IN " + tempNumber + " HOUR" }
       else { var temp = "SALE STARTS IN " + tempNumber + " HOURS" }      
       document.getElementById(tp_block_id).querySelector(".js-timer").innerText = temp;  
      }
      
    } else {
      
      console.log("sale ends: " + debugEnd);
      if (Math.floor(distance / (day))!=0) {
       var tempNumber = Math.floor(distance / (day)) + 1;  
       if (tempNumber == 1) { var temp = "SALE ENDS IN " + tempNumber + " DAY" }
       else { var temp = "SALE ENDS IN " + tempNumber + " DAYS" }       
       document.getElementById(tp_block_id).querySelector(".js-timer").innerText = temp;  
      } else {
       var tempNumber = Math.floor((distance % (day)) / (hour)); 
       if (tempNumber == 1) { var temp = "SALE ENDS IN " + tempNumber + " HOUR" }
       else { var temp = "SALE ENDS IN " + tempNumber + " HOURS" }       
       document.getElementById(tp_block_id).querySelector(".js-timer").innerText = temp;  
      }
      
    }

    el.querySelector(".timer-block__num").style.backgroundColor = tp_label_color;
        
   });

      
});
   
