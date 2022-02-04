function visualize_map(map_name,map_class){
    if (map_name=="all"){
        document.getElementsByClassName(map_class)[0].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[1].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[2].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[3].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[4].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[5].classList.add("hide_"+map_class);
    }
    else if (document.getElementById(map_name).classList.contains("hide_"+map_class)){
        document.getElementsByClassName(map_class)[0].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[1].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[2].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[3].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[4].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[5].classList.add("hide_"+map_class);
        document.getElementsByClassName(map_class)[0].classList.remove("display_"+map_class);
        document.getElementsByClassName(map_class)[1].classList.remove("display_"+map_class);
        document.getElementsByClassName(map_class)[2].classList.remove("display_"+map_class);
        document.getElementsByClassName(map_class)[3].classList.remove("display_"+map_class);
        document.getElementsByClassName(map_class)[4].classList.remove("display_"+map_class);
        document.getElementsByClassName(map_class)[5].classList.remove("display_"+map_class);
        document.getElementById(map_name).classList.remove("hide_"+map_class);
        document.getElementById(map_name).classList.add("display_"+map_class);
    } else {
        document.getElementById(map_name).classList.add("hide_"+map_class);
        document.getElementById(map_name).classList.remove("display_"+map_class);
    }
}

function visualize_chart(chart_name){
    if (document.getElementById(chart_name).classList.contains("hide_chart")){
        document.getElementsByClassName("chart")[0].classList.add("hide_chart");
        document.getElementsByClassName("chart")[1].classList.add("hide_chart");
        document.getElementsByClassName("chart")[2].classList.add("hide_chart");
        document.getElementsByClassName("chart")[0].classList.remove("display_chart");
        document.getElementsByClassName("chart")[1].classList.remove("display_chart");
        document.getElementsByClassName("chart")[2].classList.remove("display_chart");
        document.getElementById(chart_name).classList.remove("hide_chart");
        document.getElementById(chart_name).classList.add("display_chart");
    } else {
        document.getElementById(chart_name).classList.add("hide_chart");
        document.getElementById(chart_name).classList.remove("display_chart");
    }

}

function visualize_metadata(metadata_name){
    if (document.getElementById(metadata_name).classList.contains("hide_metadata")){
        document.getElementsByClassName("metadata")[0].classList.add("hide_metadata");
        document.getElementsByClassName("metadata")[1].classList.add("hide_metadata");
        document.getElementsByClassName("metadata")[2].classList.add("hide_metadata");
        document.getElementsByClassName("metadata")[0].classList.remove("display_metadata");
        document.getElementsByClassName("metadata")[1].classList.remove("display_metadata");
        document.getElementsByClassName("metadata")[2].classList.remove("display_metadata");
        document.getElementById(metadata_name).classList.remove("hide_metadata");
        document.getElementById(metadata_name).classList.add("display_metadata");
    } else {
        document.getElementById(metadata_name).classList.add("hide_metadata");
        document.getElementById(metadata_name).classList.remove("display_metadata");
    }

}

function visualize_graph(graph_name){
    if (document.getElementById(graph_name).classList.contains("hide_graph")){
        document.getElementById(graph_name).classList.remove("hide_graph");
        document.getElementById(graph_name).classList.add("display_graph");
    } else {
        document.getElementById(graph_name).classList.add("hide_graph");
        document.getElementById(graph_name).classList.remove("display_graph");
    }
    display_adjuster('graph')
}


var col_num;

function display_adjuster(reference_class){
    class_count = document.getElementsByClassName(reference_class);
    element_count = document.getElementsByClassName("display_"+reference_class);

    for (x=0; x<class_count.length;x++){
        class_count[x].classList.remove("col-lg-"+col_num);
        class_count[x].classList.remove("col-md-"+col_num);
        class_count[x].classList.remove("mt-4");
        class_count[x].classList.remove("done");
    }

    switch (element_count.length) {
        case 1:
            col_num = 12;
            break
        case 2:
            col_num = 6;
            break
        case 3:
            col_num = 4;
            break
        }
    
    for (x=0; x<element_count.length;x++){
        element_count[x].classList.add("col-lg-"+col_num);
        element_count[x].classList.add("col-md-"+col_num);
        element_count[x].classList.add("mt-4");
        element_count[x].classList.add("done");
    }
}