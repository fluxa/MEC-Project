package com.reigndesign.components
{
	import flash.display.DisplayObject;
	import flash.utils.getDefinitionByName;

	public class AppPreloader extends Preloader
	{
		public function AppPreloader()
		{
			super();
		}
		
		override public function init() : void
		{
			var mainClass:Class = Class(getDefinitionByName("got2bAppMain"));
			if(mainClass)
			{
				var app:Object = new mainClass();
				addChild(app as DisplayObject);
			}
		}
	}
}