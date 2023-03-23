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
    // samples dict
    var samples_dict = data.samples
    console.log(samples_dict)
    // metadata dict 
    var meta_dict = data.metadata
    console.log(meta_dict)

    // metadata 
    var dem_dict = meta_dict[0]
    console.log(dem_dict)

    var test_table = [{
        type: 'table',
        cells: {
            values: dem_dict
        }
    }]
    Plotly.newPlot('sample-metadata', test_table);

    //sample_values
    var sample_values_bar = samples_dict[0].sample_values.slice(0,10).reverse()
    console.log(sample_values_bar)
    //otu_ids
    var ids_bar = samples_dict[0].otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse()
    console.log(ids_bar)
    //otu_labels
    var labels_bar = samples_dict[0].otu_labels.slice(0,10).reverse()
    console.log(labels_bar)

    // process to combine and sort for bar chart
    //  - create empty dict
    //  - for loop through 

    var test_bar = [{
        type: 'bar',
        x: sample_values_bar,
        y: ids_bar,
        text: labels_bar,
        orientation: 'h'
    }]

    var layout_bar = {
        title: "bar chart"
        }

    Plotly.newPlot("bar", test_bar, layout_bar);


    // variables for bubble chart
    //sample_values
    var sample_values_bubble = samples_dict[0].sample_values
    console.log(sample_values_bubble)
    //otu_ids
    var ids_bubble = samples_dict[0].otu_ids
    console.log(ids_bubble)
    //otu_labels
    var labels_bubble = samples_dict[0].otu_labels
    console.log(labels_bubble)

    var test_bubble = {
        x: ids_bubble,
        y: sample_values_bubble,
        text: labels_bubble,
        mode: 'markers',
        marker: {
          color: ids_bubble,
          size: sample_values_bubble
        }
      };
      
      var data = [test_bubble];
      
      var layout = {
        title: 'Bubble Chart Hover Text',
        showlegend: false,
        height: 600,
        width: 1200
      };
      
      Plotly.newPlot("bubble", data, layout);
});

// TEST TEST TEST







// 2) bar chart
//      - horizontal
//      - x: sample_values
//      - y: otu_ids
//      - hover: otu_labels


// basic structure
// not sure if text is correct for hover info
// var bar_data = [{
//     type: 'bar',
//     x: [20, 14, 23],
//     y: ['giraffes', 'orangutans', 'monkeys'],
//     text: ['label1', 'label2', 'label3'],
//     orientation: 'h'
// }];


// Plotly.newPlot("bar", bar_data)

// 3) bubble chart
//      - x: otu_ids
//      - y: sample_values
//      - marker size: sample_values
//      - marker colors: otu_ids
//      - text values: otu_labels

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Bubble Chart Hover Text',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot("bubble", data, layout);
  
// 4) demographic table
//      - metadata object w/in json

// 5) drop down 
//      - init function
//      - wrap all charts in function

// Other Thoughts
//      - html template all ready for me
//      - 