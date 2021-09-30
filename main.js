function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mVMdqHrTi/model.json', modelready);
}
 function modelready()
 {
  classifier.classify(gotresults);   
 }
 function gotresults(error,results)
 {
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    random_r=Math.floor(Math.random() * 255)+1;
    random_g=Math.floor(Math.random() * 255)+1;
    random_b =Math.floor(Math.random() * 255)+1;
    document.getElementById("result_label").innerHTML='I can Hear-'+results[0].label;
    document.getElementById("accurate").innerHTML='Accuracy-'+results[0].confidence.toFixed(2);
    
    img=document.getElementsById("listen_img");
    if (results[0].label == "Barking") 
    { img.src = 'dog gif.gif'; dog = dog+1; } 
    else if (results[0].label == "Meowing") 
    { img.src = 'cat gif.gif'; cat = cat + 1; } 
    else{ img.src = 'Listening gif.png'; }
}
 }