# custom-modeler
 Customized bpmn-js modeler


## to-do list
* Database
	* Users
	* Roles
	* Permissions
* Data service API
	* Provide endpoints for loading allowed data configured in database
	* Provide list of backend service endpoints
* Minimum Viable Modeler
	* Finalize the list of notations to allow
	* Identify the properties for each notation
	* Load allowed properties for available tasks from mapping
		* allow selection (with multiple)
	* Set process properties
		* department
		* role
	* Deploy process to engine
	* User tasks
		* Select from .fcfg files
* Workflow engine deployment
* Web application (use UX concept)
	* Master data management
		* Create master data tables
		* Populate master data tables
		* Tables to load in modeler, exposed through Data service API
		* Mapping of properties to tasks
	* Integrate forms-js (read, render and store .fcfg files)
		* Input types and constraints
		* Pre-populated data from database
		* Date and time fields
		* File upload field
	* Interaction with tasks
	* Create tasks

## to-test list
* 3 workflow samples
	* simple flow
		* leave application
	* conditional flow with routing
		* student grading
	* advanced flow using DMN and timer
		* bonus offer expiry
