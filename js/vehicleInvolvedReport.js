define([],function(){
	var config = {};
	config.title="Collision Report";
	var backColor = '#ffffff';
	var axisColor = '#3e3e3e';
	var gridlinesColor = '#000000';
	var axisTitleColor = '#333333';
	var color7 = '#4BACC6';
	var color2 = '#8064A2';
	var color3 = '#eda637';
	var color1 = '#a7a737';
	var color5 = '#86aa65';
	var color6 = '#8aabaf';
	var color9 = '#69c8ff';
	var color8 = '#3e3e3e';
	var color4 = '#4bb3d3';
	config.height=450,
    config.width= '100%';
	config.title="Collision Report";
	config.vAxis= {maxValue: 100};
	config.backgroundColor= backColor;
	config.chartArea={left: 165, width:"100%",height:"75%"};
	config.hAxis= {title: 'Day of Week', textStyle: {color: axisTitleColor}};
	config.vAxis= {title: '# of Vehicles', gridlines: {count: 5, color: gridlinesColor},format:0, baselineColor:axisColor, textStyle:{color: axisTitleColor}};
	config.colors= [ color1, color2, color3, color4, color5, color6, color7, color8];
	config.visType="PieChart";
	return config;
});