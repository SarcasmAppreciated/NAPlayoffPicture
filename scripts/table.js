$(document).ready(function(){
	$(".guideBG").fadeIn("slow");
	$("#checkmark").click(function(){
		$(".guide").fadeOut("slow");		
	});
	
	// Data Source
	var teamRow = [{team:"TSM",first:93.75,second:6.25,third:"",fourth:"",fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},{team:"CLG",first:31.25,second:53.13,third:12.50,fourth:3.13,fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},
    {team:"C9",first:9.38,second:18.75,third:42.19,fourth:15.63,fifth:14.06,sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},{team:"TIP",first:6.25,second:28.13,third:32.81,fourth:25.00,fifth:7.81,sixth:"",seventh:"",eighth:"",ninth:"",tenth:""},
    {team:"T8",first:"",second:4.69,third:17.19,fourth:18.75,fifth:29.69,sixth:23.44,seventh:6.25,eighth:"",ninth:"",tenth:""},{team:"GV",first:"",second:3.13,third:20.31,fourth:17.19,fifth:29.69,sixth:23.44,seventh:6.25,eighth:"",ninth:"",tenth:""},
    {team:"TL",first:"",second:"",third:0.39,fourth:5.08,fifth:13.67,sixth:30.86,seventh:50.00,eighth:"",ninth:"",tenth:""},{team:"DIG",first:"",second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:"",eighth:68.75,ninth:31.25,tenth:""},
    {team:"WFX",first:"",second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:"",eighth:68.75,ninth:31.25,tenth:""},{team:"CST",first:"",second:"",third:"",fourth:"",fifth:"",sixth:"",seventh:"",eighth:"",ninth:"",tenth:100.00}];
	
	var numOfTeams = 10;
	var i;
	for(i = 0; i < numOfTeams; i++) {
		appendTable(i);
	}
	
	colourizeTable();
	
	// Given data, create table rows/columns + titles
	function appendTable(i){
		$("#winrate_table").append("<tr><td>" + teamRow[i].team + "</td><td>" + teamRow[i].first + " </td><td>" + teamRow[i].second + "</td><td>" + teamRow[i].third + "</td><td>"
		+ teamRow[i].fourth + "</td><td>" + teamRow[i].fifth + "</td><td>" + teamRow[i].sixth + "</td><td>" + teamRow[i].seventh + "</td><td>" + teamRow[i].eighth + "</td><td>" +
		teamRow[i].ninth + "</td><td>" + teamRow[i].tenth + "</td></tr>");					
	}
	
	function colourizeTable () {
		$("tr").children("td").each(function () {
			if (this.innerText != "") 
			{
				if(this.innerText >= 80) {
					$(this).css("background-color", "#0099cc");
				}
				else if((this.innerText >= 60) && (this.innerText < 80)) {
					$(this).css("background-color", "#33add7");
				}
				else if((this.innerText >= 40) && (this.innerText < 60)) {
					$(this).css("background-color", "#65c1e1");
				}
				else if((this.innerText >= 20) && (this.innerText < 40)) {
					$(this).css("background-color", "#98d5eb");
				}
				else if((this.innerText > 0)) {
					$(this).css("background-color", "#cae9f5");
				}
			}						
		});				
	}


	// Hover-overs
	var holder;
	var rowIndex;
	$("#winrate_table").delegate('td','mouseover mouseleave', function(e) {
		rowIndex = $(this).parent().index();
		if (e.type == 'mouseover') {
			holder = $(this).index();
			$(this).addClass("hover");
			$(this).prevAll("td").addClass("hover_light");
			$(this).parent("tr").prevAll("tr").each(function(){ 
				$(this).children("td").eq(holder).addClass("hover_light");						
			});
			addTieTable(rowIndex);
		}
		else {
			$(this).removeClass("hover");
			$(this).prevAll("td").removeClass("hover_light");
			$(this).parent("tr").prevAll("tr").each(function(){ 
				$(this).children("td").eq(holder).removeClass("hover_light");						
			});
		}
	});
	
	function addTieTable(teamNum) {
		var teamRecord = "";
		var teamName = "";
		
		if($(".tie_history").length > 0) {
			$(".tie_history").remove();
		}						
							
		switch(teamNum) {
			case 1: // TSM
				teamName = "TEAM SOLOMID";
				teamRecord = [{place:"1st",solo:64.06,two:20.31,three:7.81,four:1.56,five:""},{place:"2nd",solo:3.13,two:3.13,three:"",four:"",five:""}];
				break;
			case 2: // CLG
				teamName = "COUNTER LOGIC GAMING";
				teamRecord = [{place:"1st",solo:6.25,two:17.19,three:6.25,four:1.56,five:""},{place:"2nd",solo:29.69,two:12.50,three:6.25,four:4.69,five:""},{place:"3rd",solo:"",two:6.25,three:6.25,four:"",five:""},{place:"4th",solo:1.56,two:1.56,three:"",four:"",five:""}];
				break;
			case 3: // C9
				teamName = "CLOUD 9";
				teamRecord = [{place:"1st",solo:"",two:1.56,three:6.25,four:1.56,five:""},{place:"2nd",solo:1.56,two:9.38,three:3.13,four:4.69,five:""},{place:"3rd",solo:9.38,two:18.75,three:12.50,four:1.17,five:0.39},{place:"4th",solo:4.69,two:2.73,three:6.25,four:1.95,five:""},{place:"5th",solo:3.52,two:8.20,three:2.34,four:"",five:""}];
				break;
			case 4: // TIP
				teamName = "TEAM IMPULSE";
				teamRecord = [{place:"1st",solo:"",two:1.56,three:3.13,four:1.56,five:""},{place:"2nd",solo:7.81,two:9.38,three:6.25,four:4.69,five:""},{place:"3rd",solo:3.13,two:18.75,three:9.38,four:1.17,five:0.39},{place:"4th",solo:7.81,two:7.42,three:7.81,four:1.95,five:""},{place:"5th",solo:3.52,two:3.52,three:0.78,four:"",five:""}];
				break;							
			case 5: // T8
				teamName = "TEAM 8";
				teamRecord = [{place:"2nd",solo:"",two:"",three:1.56,four:3.13,five:""},{place:"3rd",solo:1.56,two:6.25,three:7.81,four:1.17,five:0.39},{place:"4th",solo:1.56,two:5.47,three:8.98,four:2.73,five:""},{place:"5th",solo:7.03,two:17.58,three:5.08,four:"",five:""},{place:"6th",solo:9.77,two:13.67,three:"",four:"",five:""},{place:"7th",solo:6.25,two:"",three:"",four:"",five:""}];
				break;
			case 6: // GV
				teamName = "TEAM GRAVITY";
				teamRecord = [{place:"2nd",solo:"",two:"",three:1.56,four:1.56,five:""},{place:"3rd",solo:3.13,two:9.38,three:6.25,four:1.17,five:0.39},{place:"4th",solo:1.56,two:3.91,three:8.98,four:2.73,five:""},{place:"5th",solo:7.03,two:17.58,three:5.08,four:"",five:""},{place:"6th",solo:9.77,two:13.67,three:"",four:"",five:""},{place:"7th",solo:6.25,two:"",three:"",four:"",five:""}];
				break;
			case 7: // TL
				teamName = "TEAM LIQUID";
				teamRecord = [{place:"3rd",solo:"",two:"",three:"",four:"",five:0.39},{place:"4th",solo:"",two:"",three:1.95,four:3.13,five:""},{place:"5th",solo:"",two:7.03,three:6.64,four:"",five:""},{place:"6th",solo:3.52,two:27.34,three:"",four:"",five:""},{place:"7th",solo:50.00,two:"",three:"",four:"",five:""}];
				break;
			case 8: // DIG
				teamName = "TEAM DIGNITAS";
				teamRecord = [{place:"8th",solo:31.25,two:37.50,three:"",four:"",five:""},{place:"9th",solo:31.25,two:"",three:"",four:"",five:""}];
				break;
			case 9: // WFX
				teamName = "WINTERFOX";
				teamRecord = [{place:"8th",solo:31.25,two:37.50,three:"",four:"",five:""},{place:"9th",solo:31.25,two:"",three:"",four:"",five:""}];
				break;
			case 10: // CST
				teamName = "TEAM COAST";
				teamRecord = [{place:"10th",solo:100,two:"",three:"",four:"",five:""}];
				break;
			default:
		}
		
		$("#team_name").text(teamName);
		
		var j;
		for(j = 0; j < teamRecord.length; j++) {
			$("#ties_table").append("<tr class='tie_history'><td>" + teamRecord[j].place +"</td><td>" + teamRecord[j].solo  +"</td><td>" + teamRecord[j].two +"</td><td>" + teamRecord[j].three +"</td><td>" + teamRecord[j].four +"</td><td>" + teamRecord[j].five +"</td></tr>");
		}
		colourizeTable();
	}
});