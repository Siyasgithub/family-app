//https://teachablemachine.withgoogle.com/models/vLOw2Qg0Y/

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_qaulity:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML  = '<img id="captured_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lruaKBAt4/',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error('error');
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = result[0].label
        document.getElementById("result_object_accurcy").innerHTML = result[0].confidence.tofixed(3);

    }
}