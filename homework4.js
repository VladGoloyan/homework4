b=""
c=""
bool=true
checkerboard = function(a){
	if(a===1){
		return;
	}
	if(bool){
		f1 = function(a){
			if(a===0){
				return b;
				b="";
			}
			b+="* ";
			f1(a-1);
		}
		f2 = function(a){
			if(a===0){
				return c;
				c="";
			}
			c+=" *";
			f2(a-1);
		}
		f1(a-1);
		f2(a-1);
		bool=false
	}
	console.log(b)
	console.log(c)
	checkerboard(a-1)
}
reverse = function(a){
	i=a.length-1;
	action=function(i){
		if(i===-1){
			return"";
		}
		return a[i] + action(i-1)
	}
	console.log(action(i))
}

pow = function(a,b){
	if(b===0){
		return 1;
	}
	return a * pow(a,b-1)
}
line="",i=0,s=0;
triangleStars = function(a){
	if(a===0){
		return;
	}
	if(i===2*a-1){
		i=0;
		console.log(line)
		line=""
		triangleStars(a-1)
	}
	else{
		line+="*"
		i++;
		triangleStars(a)
	}
}
