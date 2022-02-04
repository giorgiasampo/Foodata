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
