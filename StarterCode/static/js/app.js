const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// TO DO NEXT
//  - variable for dropdown click value (maybe function passed as parameter?)
//  - function for bubble chart
//  - function for dem chart 


function makeBarChart(id, data) {

// -------- bar chart array variables----------
// take the subject id that was clicked in dropdown
// use that subject id to update the sample, id, label variables
//  - big list of samples and we want to find sample in list where subject id matches
//  - once we have that we we take that index in the list
// make new chart
  // var samples_dict = data.samples

  var sampleFilter = data.samples.filter(sample => {return sample.id == id})
  
  console.log(sampleFilter)
  //sample_values
  var sample_values_bar = sampleFilter[0].sample_values.slice(0,10).reverse()
  console.log(sample_values_bar)
  //otu_ids
  var ids_bar = sampleFilter[0].otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse()
  console.log(ids_bar)
  //otu_labels
  var labels_bar = sampleFilter[0].otu_labels.slice(0,10).reverse()
  console.log(labels_bar)

  // -------- bubble chart array variables----------
  var sample_values_bubble = sampleFilter[0].sample_values
  console.log(sample_values_bubble)
  //otu_ids
  var ids_bubble = sampleFilter[0].otu_ids
  console.log(ids_bubble)
  //otu_labels
  var labels_bubble = sampleFilter[0].otu_labels
  console.log(labels_bubble)



  // -------- plot bar chart -----------
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

  // -------- plot bubble chart -----------
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

} 


function demoGraphic(id, data) {
  d3.select("#sample-metadata").html("");
  var meta_ul = d3.select("#sample-metadata").append("ul");
 
  var meta_dict = data.metadata.filter(d => d.id == id)[0];

  
  meta_ul.append("li").text(`Id: ${meta_dict.id}`);
  meta_ul.append("li").text(`Ethnicity: ${meta_dict.ethnicity}`);
  meta_ul.append("li").text(`Gender: ${meta_dict.gender}`);
  meta_ul.append("li").text(`Age: ${meta_dict.age}`);
  meta_ul.append("li").text(`Location: ${meta_dict.location}`);
  meta_ul.append("li").text(`BBType: ${meta_dict.bbtype}`);
  meta_ul.append("li").text(`WFreq: ${meta_dict.wfreq}`);
}


function updateTest() {
  var subjectId = this.value
  console.log(`updateTest ${subjectId}`);

  d3.json(url).then(function (data) {
    demoGraphic(subjectId, data);
    makeBarChart(subjectId, data);
  });
  
}

d3.select("#selDataset").on("change", updateTest);

// get data
d3.json(url).then(function (data) {
    
    // -------- variables for 3 dictionaries of json object------------
    // samples dict
    var samples_dict = data.samples
    console.log(samples_dict)
    // metadata dict 
    
    
    // names dict
    var names_dict = data.names
    console.log(names_dict)

    // ------- dropdown menu --------------
    var dropDown = d3.select("#selDataset");
    names_dict.forEach(name => dropDown.append("option").text(name).attr("value", name));
  

    // ------- demographic panel -------------
    //select sample metadata element and append list of metadata
   
    
    
    // var clickAction = d3.select("#selDataset").on("click", () => {
    //                     let dropDown1 = d3.select("#selDataset")
    //                     console.log(dropDown1.property("value"))
    // })
    // console.log(clickAction)

    // // ------- bar chart function -----------
    // makeBarChart(clickAction, samples_dict)


    // -------- bubble chart array variables----------
    //sample_values
    var sample_values_bubble = samples_dict[0].sample_values
    console.log(sample_values_bubble)
    //otu_ids
    var ids_bubble = samples_dict[0].otu_ids
    console.log(ids_bubble)
    //otu_labels
    var labels_bubble = samples_dict[0].otu_labels
    console.log(labels_bubble)

    // -------- plot bubble chart -----------
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



  

    // paying attention to the dropdown
    //    - know which id user selects
    //    - by click get text content from option
    //    - 


    // changing the charts based on the value of dropdown

