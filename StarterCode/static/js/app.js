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


   //select sample metadata element and append list of metadata
    let meta_ul = d3.select("#sample-metadata").append("ul");
    meta_ul.append("li").text(`Id: ${meta_dict[0].id}`);
    meta_ul.append("li").text(`Ethnicity: ${meta_dict[0].ethnicity}`);
    meta_ul.append("li").text(`Gender: ${meta_dict[0].gender}`);
    meta_ul.append("li").text(`Age: ${meta_dict[0].age}`);
    meta_ul.append("li").text(`Location: ${meta_dict[0].location}`);
    meta_ul.append("li").text(`BBType: ${meta_dict[0].bbtype}`);
    meta_ul.append("li").text(`WFreq: ${meta_dict[0].wfreq}`);
    

    //sample_values
    var sample_values_bar = samples_dict[0].sample_values.slice(0,10).reverse()
    console.log(sample_values_bar)
    //otu_ids
    var ids_bar = samples_dict[0].otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse()
    console.log(ids_bar)
    //otu_labels
    var labels_bar = samples_dict[0].otu_labels.slice(0,10).reverse()
    console.log(labels_bar)

    // let bar_x = []
    // let bar_y = []
    // let bar_label = []
    // let bubble_x = []
    // let bubble_y = []
    // let bubble_label = []

    // if (dropDown === )

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



// 5) drop down 
//      - init function
//      - wrap all charts in function

// Other Thoughts
//      - html template all ready for me
//      - 