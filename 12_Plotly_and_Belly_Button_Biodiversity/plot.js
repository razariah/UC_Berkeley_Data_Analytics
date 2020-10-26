function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Load dashbord for first sample automatically
    sample1 = sampleNames[0]
    optionChanged(sample1)
})}

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Build Charts related to Meta data
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];

      buildDemographicPanel(result);
      buildGaugeChart(result);
    });
}

// Build Demogrphic Info Panel
function buildDemographicPanel(metaData) {
  var PANEL = d3.select("#sample-metadata");

  PANEL.html("");
  PANEL.append("h6").text("id: " + metaData.id);
  PANEL.append("h6").text("ethnicity: " + metaData.ethnicity);
  PANEL.append("h6").text("gender: " + metaData.gender);
  PANEL.append("h6").text("age: " + metaData.age);
  PANEL.append("h6").text("location: " + metaData.location);
  PANEL.append("h6").text("bbtype: " + metaData.bbtype);
  PANEL.append("h6").text("wfreq: " + metaData.wfreq);
}

function buildCharts(sample) {
  // var result;
  d3.json("samples.json").then((data) => {
    var sampledata = data.samples;
    var resultArray = sampledata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    console.log(result)
    buildBarChart(result);
    buildBubbleChart(result);
    // buildGaugeChart(sample);
  });
}

function buildBarChart(sampleData) {
  otuIds = sampleData.otu_ids.map(id => "OTU " + id).slice(0, 10).reverse();
  sampleValues = sampleData.sample_values.slice(0,10).reverse();
  otuLabels = sampleData.otu_labels.slice(0, 10).reverse()

  var trace = {
    y: otuIds,
    x: sampleValues,
    text: otuLabels,
    type: "bar",
    orientation: 'h'
  };

  var layout = {
      title: "OTU Values",
  };

  Plotly.newPlot("bar", [trace], layout);
}

// Bubble Chart
function buildBubbleChart(sampleData) {
  otuIds = sampleData.otu_ids;
  sampleValues = sampleData.sample_values;
  sizes = sampleValues; 
  otuLabels = sampleData.otu_labels;

  var trace = {
    x: otuIds,
    y: sampleValues,
    text: otuIds,
    mode: 'markers',
    marker: {
      size: sizes,
      color: otuIds
    }
  };

  var layout = {
    xaxis: {title: "OTU ID"}
  };
  
  Plotly.newPlot("bubble", [trace], layout);
}

// Guage Chart
function buildGaugeChart(metaData) {
  wfreq = metaData.wfreq

  var data = {
    type: "indicator",
    mode: "number+delta+gauge",
    value: wfreq,
    title: { text: "Belly Button Washing Frequency<br>Scrubs Per Week", font: { size: 24 } },
    delta: { reference: 9, increasing: { color: "green" } },
    gauge: {
      axis: { range: [0, 9], tickwidth: 1, tickcolor: "blue", 
      tickvals: [0,1,2,3,4,5,6,7,8,9]},
      bar: { color: "blue" , thickness: 0.3},
      // bgcolor: "white",
      borderwidth: 1,
      // bordercolor: "gray",
      steps: [
        { range: [0, 1], color: "E5FFCC" },
        { range: [1, 2], color: "CCFF99" },
        { range: [2, 3], color: "B2FF66"},
        { range: [3, 4], color: "99FF33" },
        { range: [4, 5], color: "80FF00" },
        { range: [5, 6], color: "66CC00" },
        { range: [6, 7], color: "4C9900" },
        { range: [7, 8], color: "336600" },
        { range: [8, 9], color: "193300" },
      ],
      // id: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
      // hoverinfo: "label",
      // text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
      // textinfo: "text",
      // textposition: "inside",
    }
  };
  
  var layout = {
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    // paper_bgcolor: "lavender",
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('gauge', [data], layout);
}


init();

/* Meta json example

"metadata": [
{
"id": 940,
"ethnicity": "Caucasian",
"gender": "F",
"age": 24,
"location": "Beaufort/NC",
"bbtype": "I",
"wfreq": 2
},
/*

/* Sample data
"samples": [
{
"id": "940",
"otu_ids": [],
"sample_values": [],
"otu_labels": []
},
...
*/

