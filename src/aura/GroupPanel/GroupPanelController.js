({
	onRemovePanel : function(component, event, helper) {
        var r = confirm("Do you want to remove this group?");
        if (r == true) {
            console.log('event', event);
        	component.getEvent('onRemoveGroup').setParams({scope:component.get('v.group')}).fire();
        }
	},

	onEditPanelTitle : function(component, event, helper) {
        component.getEvent('onEditGroupName').setParams(event.getParams()).fire();
    },
})