/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_void")//Registers script "overworld_void" to be used for generating dimension "overworld"
.registerDimension("the_nether", "examples/dimensions/nether_void")//Registers script "nether_void" to be used for generating dimension "nether"
.registerDimension("the_end", "examples/dimensions/end_void")//Registers script "end_void" to be used for generating dimension "end"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.clearFeatures(event);//Clears all feature generators
		FeatureHelper.clearStructures(event);//Clears all structure generators
	}
}).class);
	
registerPreset("skylands", "Skylands", "examples/images/Basic_Tree", "Overworld with skylands generation")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_skylands")//Registers script "overworld_skylands" to be used for generating dimension "overworld"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.removeStructure(event, "mineshaft");//Removes mineshafts. They don't generate very well
		FeatureHelper.removeFeature(event, "void_start_platform");//Removes a strange void biome feature
	}
}).class);