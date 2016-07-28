var core = {
	modules: {},
	activeModules: [],
	
	handleCall: function() {
		if(core.activeModules.length){
			for(var i = 0; i < core.activeModules.length; i++){
				if(core.activeModules[i]) core.activeModules[i].destruct.call(core.activeModules[i]);
			}
			core.activeModules = [];
		}
		
		$(document).find('[data-module]').each(function(){
			var moduleName = $(this).data('module');

			if(moduleName){
				core.loadModule(moduleName, $(this));
			}
		});
	},
	
	loadModule: function(module, div) {
		var modules = module.split('/'),
		    name = '';

		for(var i = 0; i < modules.length; i++){
			if(name.length) name += '/';
			name += modules[i];

			if(core.modules[name]){
				core.activeModules.push(core.modules[name]);
				core.activeModules[core.activeModules.length - 1].construct.call(core.activeModules[core.activeModules.length - 1], div || $());
			}
		}

		return core.activeModules.length - 1;
	},
	
	unloadModule: function(module) {
		if(core.activeModules[module]){
			core.activeModules[module].destruct.call(core.activeModules[module]);
			core.activeModules[module] = false;
		}
	}
}	

$(function() {
	setTimeout(core.handleCall);
});