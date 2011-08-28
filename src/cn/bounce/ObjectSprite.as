package cn.bounce
{
	import flash.display.Sprite;
	
	public class ObjectSprite extends Sprite
	{
		private var _data:Object;
		
		protected var dataChanged:Boolean;
		protected var needsUpdate:Boolean;
		
		public function ObjectSprite()
		{
			super();
			
		}
		
		public function set data(value:Object):void
		{
			dataChanged = true;
			_data = value;
			render();
		}
		
		public function update():void
		{
			needsUpdate = true;
			render();
		}
		
		public function get data():Object
		{
			return _data;
		}
		
		public function render():void
		{
			//override
		}
		
		public function clear():void
		{
			graphics.clear();
		}
	}
}