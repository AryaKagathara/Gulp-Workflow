//===Any global variables whose scope will need to be across the entire file...
var currentId;

//===Actually, I am kind of a big fan of defining a Global object, or something
//	 similar to store all of my page-level variables to. Something like:
var Global = {
	currentId: undefined,
	action: 'create',
	user: {
		userName: 'Bob',
		email: 'bgibilaro@valexander.com',
		extension: '2470'
	}
};

// this allows me to get those values anywhere in the page with
// something like Global.currentId or Global.user.userName. I can also set it by saying
// Global.currentId = 2. I can even add to it on-the-fly by saying
// Global.newVariable = 'something' which is now available over the
// entirety of that page....

//===My document.ready() handler...
$(document).ready(function(){

	//=== do some code stuff...

	//===finally, bind my events...
	bindEvents();
});

//===This function handles event binding for anything on the page....
function bindEvents(){
	// So, something simply like binding to a static anchor tag...
	$('#aSomeLink').on('click', function(event){

		// do some cool code stuff...
		// Mr. Wizard Time: try putting a break point someplace in here and
		//	then investigate the event argument. All sorts of cool stuff can
		//	come from there. In fact, what if I wanted to assign the link that
		//	was clicked to a local variable?

		// I could do this...
		$a = $(this);	// note, prefixing the variable with bling ($) is just a 
						// nice way for us to know that it is a jQuery object...

		// Or, I could do this...
		$a = $(event.target);

		// I could also get the id of the link like so:
		var id = event.target.id;

		// not a big difference, but it is nice to use native JavaScript when you can. 
	});

	// Hey, but I can also do something cooler with the on method. What if I have a table
	//	full of documents on the page with the option to edit, delete, etc. each of the table
	//	rows. I can handle this in one nice bind using on. for the sake of this example, let's
	//	assume I gave the "delete" link an attribute of rel="delete" and the "edit" link an 
	//	attribute of rel="edit", I could do the following:
	$('#myTable').on('click', 'a[rel=delete],a[rel=edit]', function(event){
		$a = $(event.target);

		switch($a.attr('rel')){
			case 'edit':

				// do some stuff or call a function...
				
				break;
			case 'delete':
				// do some stuff or call a function...

				break;
		}
	});

	// the above allows you to setup your bindings one time, when the page loads and then forget about
	//	it. It will apply those bindings any time a new row is added to #myTable, automagically...
}

//===Then everything below this is all of the other declared functions for my page...