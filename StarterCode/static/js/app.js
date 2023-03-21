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

// 4) demographic table
//      - metadata object w/in json

// 5) drop down 
//      - init function
//      - wrap all charts in function

// Other Thoughts
//      - html template all ready for me
//      - 