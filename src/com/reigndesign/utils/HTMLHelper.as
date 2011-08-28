package com.reigndesign.utils
{
	import com.reigndesign.managers.Config;

	public class HTMLHelper
	{
		public function HTMLHelper()
		{
		}
		
		public static function colored(text:*, color:*):String
		{
			var thecolor:String="000000";
			
			if(color is uint) thecolor = color.toString(16);
			if(color is String) thecolor = color;
			
			return "<font color='#"+ thecolor +"'>" + text.toString()+ "</font>";
		}
		
		public static function fromInt(number:int, withSign:Boolean=true):String
		{
			var text:String = number.toString();
			var color:uint=0x000000;
			if(number > 0)
			{
				if(withSign)
				{
					text = "+"+number.toString();
					color = Config.GREEN;
				}
			}
			else if(number < 0)
			{
				color = Config.RED;
			}
			
			return colored(text, color);
		}
	}
}