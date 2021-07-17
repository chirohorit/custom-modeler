import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
	import utils from 'bpmn-js-properties-panel/lib/Utils';
    import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';

import {
  is, getBusinessObject
} from 'bpmn-js/lib/util/ModelUtil';

import $ from 'jquery';

var departments = [];

async function departmentsList() {
	//if (departments.length == 0) {
		//Custom, after DOM is ready, now also read old values for setting and get new values for changes
		
		try {
			
			
			/* await $.get("http://php-crud-api/api.php/records/departments/", function(response){ */
			await $.get("http://localhost:8080/engine-rest/group?type=WORKFLOW", function(response){
				// First get if any value was selected
				//var previousSelectedValue = $('#camunda-departmentSelector-select').val();
				$('#camunda-departmentSelector-select').empty();
				
				$(response).each(function(index, node){
					departments.push({
						"name" : node.name,
						"value" : node.id
					});
					
					$('#camunda-departmentSelector-select').append(new Option(node.name, node.id)); 
					
				});
				
				/* if (previousSelectedValue !== undefined && previousSelectedValue > 0) {
					$('#camunda-departmentSelector-select').val(previousSelectedValue);
				} */
				/* 
				return departments; */
			});
		  } catch (err) {

			console.error(err);
		  }
		
		
	/* } else {
		return departments;
	} */
	
};

export default async function(group, element, translate) {
	// Only return an entry, if the currently selected
	// element is a start event.
	
	if (is(element, 'bpmn:Process')) {
		group.entries.push(entryFactory.selectBox(translate, {
		  id: 'departmentSelector',
		  label : 'Department',
		  description : 'Select a department',
		  selectOptions: departments,
		  modelProperty: 'department',
		  getProperty: function(element) {
			return getBusinessObject(element).department;
		  },
		  setProperty: function(element, properties) {

			element = element.labelTarget || element;

			return cmdHelper.updateProperties(element, properties);
		  }
		}));
		
		if (departments.length == 0) {		
			try {
				
				const d_list = await departmentsList();
				
			} catch(err) {
				console.log(err);
			}
		}
	}
}

