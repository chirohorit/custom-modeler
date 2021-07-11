# custom-modeler
 Customized bpmn-js modeler


## to-do list
* Database (MySQL)
	* Users
	* Roles
	* Permissions
* Data service API (PHP-CRUD-API/db-to-api)
	* Provide endpoints for loading allowed data configured in database
	* Provide list of backend service endpoints
* Web application
	* Master data management (Adminer/PHP-CRUD-ADMIN and PHP-CRUD-UI)
		* Create master data tables
		* Populate master data tables
		* Tables to load in modeler, exposed through Data service API
		* Enable/Disable data for data service API
		* Mapping of properties to tasks
	* Integrate Forms (read, render and store .fcfg files) (forms-js)
		* Input types and constraints
		* Pre-populated data from database
		* Date and time fields
		* File upload field
	* User panel (UX concept)
		* Interaction with tasks
		* Create tasks
* Minimum Viable Modeler (bpmn.io modeler)
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
* Workflow engine deployment (Camunda BPMN Engine)

## to-test list
* 3 workflow samples
	* simple flow
		* leave application
	* conditional flow with routing
		* student grading
	* advanced flow using DMN and timer
		* bonus offer expiry
