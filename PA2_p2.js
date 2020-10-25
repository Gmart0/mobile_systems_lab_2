//Programming assignment 2. Part 2
"use strict";
class CoordinateES{
	degrees=0; minutes=0; seconds=0; direction='N'; 
	axis=true;
	constructor(degrees, minutes, seconds, axis){
		//axis: true-вертикальна координата - широта, false - гориронтальна - довгота
	const warningMsg = 'WARNING: invalid input values';
	if(arguments.length===4){
		if(axis){
			if(degrees<-90 || degrees>90) console.log(warningMsg);
			if (degrees<0) direction='S';
				else  this.direction='N';		
		}	
		else{
			if(degrees<-180 || degrees>180) console.log(warningMsg);
			if (degrees<0) direction='W';
				else  this.direction='E';		
		}
		if(minutes<0 || minutes>59 || seconds<0 || seconds>59)
			console.log(warningMsg);	
		}
		this.degrees=degrees; this.minutes=minutes; this.seconds=seconds;
		this.axis=axis;
	}
	toString(){
		return this.degrees+'°'+this.minutes+"'"+this.seconds+"''"+' '+this.direction;
	}
	toStringDecimal(){
	return (this.degrees+this.minutes/60+this.seconds/3600) + ' '+ this.direction;	
	}
	average(coord){
		if (this.axis!=coord.axis) return null;
		let degrees = Math.round((this.degrees+coord.degrees)/2);
		let minutes = Math.round((this.minutes+coord.minutes)/2);
		let seconds = Math.round((this.seconds+coord.seconds)/2);
		return new CoordinateES(degrees, minutes, seconds, this.axis);
		
	}
	
	static average2(coord1, coord2){
		if (coord1.axis!=coord2.axis) return null;
		let degrees = Math.round((coord1.degrees+coord2.degrees)/2);
		let minutes = Math.round((coord1.minutes+coord2.minutes)/2);
		let seconds = Math.round((coord1.seconds+coord2.seconds)/2);
		return new CoordinateES(degrees, minutes, seconds, this.axis);
	}
	
}

let cc1 = new CoordinateES(10,20,59,true);
console.log(cc1.toString());
console.log(cc1.toStringDecimal());

let cc3 = cc1.average(new CoordinateES(30,0,0,true));
console.log(cc3.toString());

let cc4 = CoordinateES.average2(new CoordinateES(10,10,10, false), new CoordinateES(20,20,20, false));
console.log(cc4.toString());