function visualize_map(map_name, map_class){
    map_list = document.getElementsByClassName(map_class);
    if (map_name=="all"){
    maps = document.getElementsByClassName('map');
    charts = document.getElementsByClassName('chart')
    graphs = document.getElementsByClassName('graph')
        for (x=0;x<maps.length;x++){
            maps[x].classList.add("hide");
        } 
        for (x=0;x<charts.length;x++){
            charts[x].classList.add("hide");
        }  
        for (x=0;x<graphs.length;x++){
            graphs[x].classList.add("hide");
        }  
    }
    else if (document.getElementById(map_name).classList.contains("hide")){
        for (x=0;x<map_list.length;x++){
            document.getElementsByClassName(map_class)[x].classList.add("hide");
            document.getElementsByClassName(map_class)[x].classList.remove("display");
        }
        document.getElementById(map_name).classList.remove("hide");
        document.getElementById(map_name).classList.add("display");
    } else {
        document.getElementById(map_name).classList.add("hide");
        document.getElementById(map_name).classList.remove("display");
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