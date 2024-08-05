var index=0;
function generateform(){
    var myContainer = document.getElementById('container');
	var selectedtype = document.getElementById('type').value;
	if(selectedtype == 'text' || selectedtype == 'number' || selectedtype == 'email'){
		myContainer.insertAdjacentHTML('beforeend',`<div class="row mt-1" id="row_`+index+`">
			<div class="col-6">
				<label class="inactive" id="label_`+index+`"></label>
                <input type="text" name="label_field_`+index+`" id="label_field_`+index+`" placeholder="label" >
                <button onclick="setlabel(`+index+`)" id="label_btn_`+index+`">DONE</button>
			</div>
            <div class="col-4">
                <input type="`+selectedtype+`" name="field_`+index+`" id="field_`+index+`" placeholder="`+selectedtype+`">
            </div>
            <div class="col-2"><i class="fa-regular fa-circle-xmark fa-xl delete_icon" id="delete_`+index+`" onclick="removeRow(`+index+`)"></i></div>
        </div>`);
	}else if(selectedtype == 'checkbox'){
		myContainer.insertAdjacentHTML('beforeend',`<div class="row mt-1" id="row_`+index+`">
			<div class="col-6">
				<label class="inactive" id="label_`+index+`"></label>
                <input type="text" name="label_field_`+index+`" id="label_field_`+index+`" placeholder="label" >
                <button onclick="setlabel(`+index+`)" id="label_btn_`+index+`">DONE</button>
			</div>
            <div class="col-4" id="checkbox_div_`+index+`">
                <input type="text" name="checkbox_field_`+index+`" id="checkbox_field_`+index+`" placeholder="Enter Option Here" >
                <button onclick="setcheckbox(`+index+`)" id="checkbox_btn_`+index+`">ADD</button>
                <button onclick="close_checkbox(`+index+`)" id="checkbox_close_`+index+`">DONE</button>
            </div>
            <div class="col-2"><i class="fa-regular fa-circle-xmark fa-xl delete_icon" id="delete_`+index+`" onclick="removeRow(`+index+`)"></i></div>
        </div>`);

	}else if(selectedtype == 'radio'){
		myContainer.insertAdjacentHTML('beforeend',`<div class="row mt-1" id="row_`+index+`">
			<div class="col-6">
				<label class="inactive" id="label_`+index+`"></label>
                <input type="text" name="label_field_`+index+`" id="label_field_`+index+`" placeholder="label" >
                <button onclick="setlabel(`+index+`)" id="label_btn_`+index+`">DONE</button>
			</div>
            <div class="col-4" id="radio_div_`+index+`">
                <input type="text" name="radio_field_`+index+`" id="radio_field_`+index+`" placeholder="Enter Option Here" >
                <button onclick="setradio(`+index+`)" id="radio_btn_`+index+`">ADD</button>
                <button onclick="close_radio(`+index+`)" id="radio_close_`+index+`">DONE</button>
            </div>
            <div class="col-2"><i class="fa-regular fa-circle-xmark fa-xl delete_icon" id="delete_`+index+`" onclick="removeRow(`+index+`)"></i></div>
        </div>`);

	}else if(selectedtype == 'select'){
		myContainer.insertAdjacentHTML('beforeend',`<div class="row mt-1" id="row_`+index+`">
			<div class="col-6">
				<label class="inactive" id="label_`+index+`"></label>
                <input type="text" name="label_field_`+index+`" id="label_field_`+index+`" placeholder="label" >
                <button onclick="setlabel(`+index+`)" id="label_btn_`+index+`">DONE</button>
			</div>
            <div class="col-4">
                <input type="text" name="select_field_`+index+`" id="select_field_`+index+`" placeholder="Enter Option Here" >
                <button onclick="setselect(`+index+`)" id="select_btn_`+index+`">ADD</button>
                <button onclick="close_select(`+index+`)" id="select_close_`+index+`">DONE</button>
                <select name="select_`+index+`" id="select_`+index+`"><option value="" selected disabled>--------------</option></select>
            </div>
            <div class="col-2"><i class="fa-regular fa-circle-xmark fa-xl delete_icon" id="delete_`+index+`" onclick="removeRow(`+index+`)"></i></div>
        </div>`);

	}else if(selectedtype == 'submit'){
		if (confirm('Is your form Complete?')) {
		  myContainer.insertAdjacentHTML('beforeend',`<button class="submitbtn mt-2" onclick="generate_form()" id="submit">SUBMIT</button>`)
		}
	}

	index++;
}

function removeRow(indx){
	document.getElementById("row_"+indx+"").remove();
}

function setlabel(indx){
	var label = document.getElementById("label_field_"+indx).value;
	console.log(label);
	document.getElementById("label_field_"+indx).className = 'inactive';
	document.getElementById("label_"+indx).innerHTML = label+' :';
	document.getElementById("label_"+indx).classList.remove('inactive');
	document.getElementById("label_btn_"+indx).className = 'inactive';
}

function setradio(indx){
	var radiodiv = document.getElementById("radio_div_"+indx);
	var radio_op = document.getElementById("radio_field_"+indx).value;
	radiodiv.insertAdjacentHTML('beforeend', ` <div>
	    <input type="radio" id="`+radio_op+`" name="radio_`+indx+`" value="`+radio_op+`" />
	    <label for="`+radio_op+`">`+radio_op+`</label>
	</div>`)
	 document.getElementById("radio_field_"+indx).value = '';
}

function close_radio(indx){
	document.getElementById("radio_field_"+indx).remove();
	document.getElementById("radio_close_"+indx).remove();
	document.getElementById("radio_btn_"+indx).remove();
}

function setcheckbox(indx){
	var checkboxdiv = document.getElementById("checkbox_div_"+indx);
	var checkbox_op = document.getElementById("checkbox_field_"+indx).value;
	checkboxdiv.insertAdjacentHTML('beforeend', ` <div>
	    <input type="checkbox" id="`+checkbox_op+`" name="checkbox_`+indx+`" value="`+checkbox_op+`" />
	    <label for="`+checkbox_op+`">`+checkbox_op+`</label>
	</div>`)
	 document.getElementById("checkbox_field_"+indx).value = '';
}

function close_checkbox(indx){
	document.getElementById("checkbox_field_"+indx).remove();
	document.getElementById("checkbox_close_"+indx).remove();
	document.getElementById("checkbox_btn_"+indx).remove();
}

function setselect(indx){
	var selectop = document.getElementById("select_"+indx);
	var select_op = document.getElementById("select_field_"+indx).value;
	selectop.insertAdjacentHTML('beforeend', ` <option value="`+select_op+`">`+select_op+`</option>`)
	 document.getElementById("select_field_"+indx).value = '';
}

function close_select(indx){
	document.getElementById("select_field_"+indx).remove();
	document.getElementById("select_close_"+indx).remove();
	document.getElementById("select_btn_"+indx).remove();
}
	var formcompleted = false;
function generate_form(){
	if(formcompleted == false){
		document.querySelectorAll(".delete_icon").forEach(el => el.remove());
		document.querySelector(".main").style.backgroundColor = 'grey';
		document.querySelector(".main").children[0].innerHTML = 'FILL YOUR DETAILS'
		document.querySelector(".form_craft").className = 'inactive';
		formcompleted = true;
	}else{
		formcompleted = false;
		document.querySelector(".main").style.backgroundColor = '#57576f';
		document.querySelector(".main").children[0].innerHTML = 'DATA SUBMITTED'
	    document.getElementById("submit").remove();
	    document.getElementById("container").className = 'inactive';

		var divElem = document.getElementById("container");
		var inputElements = divElem.querySelectorAll("input, select, checkbox, radio");
		var result = document.getElementById("finaldata");
		var resultHtml = `<div class="row">`;
		var previous='';
		for (const input of inputElements){
			if(input.placeholder=="label"){
				resultHtml += `<div class="col-4"><b>`+input.value+`</b> : </div>`;
			}else if(input.type=='checkbox' || input.type=='radio'){
				if(input.type!=previous){
					var output = '';
					var options = document.getElementsByName(input.name);
	    			for (var j = 0; j < options.length; j++) {
		        		if (options[j].checked) {
		        			if(output!=''){
		            			output += ', ';	
		            		}
		            		output += options[j].value;
		        		}
		    		}
		    		resultHtml += `<div class="col-8">`+output+`</div>`;
				}
			}else{
				resultHtml += `<div class="col-8">`+input.value+`</div>`;
			}
			previous = input.type;	
		}
		resultHtml += `</div>`;
		result.insertAdjacentHTML('beforeend', resultHtml)
	}
}

// set input fields
var myform = document.getElementById('container');
myform.addEventListener("input", function(e) {
	document.getElementById(e.target.id).setAttribute('value',e.target.value);
});
myform.addEventListener("change", function(e) {
	if(e.target.nodeName=='SELECT'){
		document.getElementById(e.target.id).setAttribute('value',e.target.value);
	}else if(e.target.type=='checkbox'){
		if (e.target.checked) {
			document.getElementById(e.target.id).setAttribute('checked', 'checked');
		} else {
			document.getElementById(e.target.id).removeAttribute('checked');
		}	
	}else if(e.target.type=='radio'){
		var radios = document.getElementsByName(e.target.name);
		for (var j = 0; j < radios.length; j++) {
    		if (radios[j].value == e.target.value) {
        		document.getElementById(radios[j].id).setAttribute("checked", "checked");
    		}else{
    			document.getElementById(radios[j].id).removeAttribute('checked');
    		}
		}
	}	
}, false);
