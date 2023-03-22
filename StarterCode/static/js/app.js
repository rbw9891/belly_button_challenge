// PSEUDO CODE
//
//
//

// 1) read in json 
//      - url
//      - promise
//      - then(function)
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// promise
const dataPromise = d3.json(url);
console.log(dataPromise);

// get data
d3.json(url).then(function (data) {
    console.log(data)
});

// variables for sample_values
let sample_values = Object.values(data.samples)
console.log(sample_values)



// 2) bar chart
//      - horizontal
//      - x: sample_values
//      - y: otu_ids
//      - hover: otu_labels

// basic structure
// not sure if text is correct for hover info
var bar_data = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    text: ['label1', 'label2', 'label3'],
    orientation: 'h'
}];


Plotly.newPlot("bar", bar_data)

// 3) bubble chart
//      - x: otu_ids
//      - y: sample_values
//      - marker size: sample_values
//      - marker colors: otu_ids
//      - text values: otu_labels

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Bubble Chart Hover Text',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot("bubble", data, layout);
  
// 4) demographic table
//      - metadata object w/in json

// 5) drop down 
//      - init function
//      - wrap all charts in function

// Other Thoughts
//      - html template all ready for me
//      - 