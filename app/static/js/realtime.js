// Simiple Scripts to test the dynamic elements, not final code

function updateSensors(s1,s2,s3,s4)
{
    var sensor1 = document.getElementById("tempSensor1");
    var sensor2 = document.getElementById("tempSensor2");
    var sensor3 = document.getElementById("tempSensor3");
    var sensor4 = document.getElementById("tempSensor4");
    
    if(s1 != null)
	sensor1.innerHTML = s1 + "C";
    if(s2 != null)
	sensor2.innerHTML = s2 + "C";
    if(s3 != null)
	sensor3.innerHTML = s3 + "C";
    if(s4 != null)
	sensor4.innerHTML = s4 + "C";
}

updateSensors(null,10,101,null);

function setOilLevel(level)
{
    var oBar = document.getElementById("myProgress");
    var bar = document.getElementById("oilLevelBar");
    var pLabel = document.getElementById("percentLabel");
    var amount = (level / 100) * oBar.clientHeight;
    pLabel.innerHTML =  (amount / oBar.clientHeight * 100).toFixed(0) + "%";
    bar.style.height = amount;
    
}
//As a percent
setOilLevel(56);

var trace1 = {
    x: [1, 2, 3, 4], 
    y: [10, 15, 13, 17], 
    type: 'scatter',
    name: 'Sensor 1'
};
var trace2 = {
    x: [1, 2, 3, 4], 
    y: [16, 5, 11, 9], 
    type: 'scatter',
    name: 'Sensor 2'
};

var tempLayout = {
    title:'Temperature VS Time',
    width: 600,
    height: 250
};

var levelLayout = {
    title:'Oil Level VS Time',
    width: 600,
    height: 250
};

var qualityLayout = {
    title:'Temperature VS Time',
    width: 600,
    height: 250
};

var data = [trace1, trace2];
Plotly.newPlot('oilTempGraph', data,tempLayout);
Plotly.newPlot('oilLevelGraph', data,levelLayout);
Plotly.newPlot('oilQualityGraph', data,qualityLayout);
