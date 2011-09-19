package cn.bounce
{
	import com.bit101.components.IndicatorLight;
	import com.bit101.components.Label;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.geom.Matrix;
	
	public class TopBar extends Sprite
	{
		[Embed(source="../../assets/top_bar.png")]
		private var topBarClass:Class;
		
		private var topBarBData:BitmapData;
		private var label:Label;
		private var indicator:IndicatorLight;
		private var indicatorLabel:Label;
		
		public var h:Number = 0;
		
		public function TopBar()
		{
			super();
			
			var topBarBitmap:Bitmap = new topBarClass();
			topBarBData = topBarBitmap.bitmapData;
			topBarBitmap = null;
			
			h = topBarBData.height;
			
			addEventListener(Event.ADDED_TO_STAGE, onAdded);
		}
		
		private function onAdded(e:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE, onAdded);
			
			//topbar
			graphics.beginBitmapFill(topBarBData, new Matrix(), true, false);
			graphics.drawRect(0,0,stage.stageWidth,topBarBData.height);
			
			//title
			var title:String = "Matrix Viewer";
			if(UserInfo.instance().data.professor)
			{
				title = UserInfo.instance().data.professor.name;
			}
			
			label = new Label(this, 50, 5, title, 20, 0xffffff);
			
			indicator = new IndicatorLight(this, stage.stageWidth-100, 20, 0xFF00FF);
			indicatorLabel = new Label(this, stage.stageWidth-90, 10, "", 12, 0xFFFFFF);
		}
		
		public function loading():void
		{
			indicator.flash(100);
			indicatorLabel.text = "saving...";
		}
		
		public function stop():void
		{
			indicator.flash(0);
			indicatorLabel.text = "";
		}
		
		public function destroy():void
		{
			if(label != null)
			{
				removeChild(label);
			}
			
			if(indicator != null)
			{
				removeChild(indicator);
			}
			
			label = null;
			indicator = null;
		}
	}
}