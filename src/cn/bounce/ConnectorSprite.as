package cn.bounce
{
	import com.dncompute.graphics.ArrowStyle;
	import com.dncompute.graphics.GraphicsUtil;
	
	import flash.geom.Point;

	public class ConnectorSprite extends ObjectSprite
	{
		
		/**
		 * data = {"from":objA, "to":objB}
		 **/
		public function ConnectorSprite(data:Object)
		{
			super();
			this.data = data;
			render();
		}
		
		override public function render():void
		{
			if(dataChanged)
			{
				dataChanged = true;
				
				var oFrom:ObjectSprite = data["from"];
				var oTo:ObjectSprite = data["to"];
				
				var pFrom:Point = new Point(oFrom.x, oFrom.y);
				var pTo:Point = globalToLocal(new Point(oTo.x, oTo.y));
				
				x = pFrom.x, y = pFrom.y;
				
				needsUpdate = true;
				
			}
			
			if(needsUpdate)
			{
				needsUpdate = false;
				
				//draw arrow
				graphics.clear();
				graphics.lineStyle(1, 0xff00ff, 1);
				graphics.moveTo(0,0);
				//graphics.lineTo(pTo.x, pTo.y);
				
				var style:ArrowStyle = new ArrowStyle();
				style.headLength = 20;
				style.headWidth = 8;
				style.shaftPosition = 0.10;
				style.shaftThickness = 0.5;
				style.edgeControlPosition = 0.5;
				style.edgeControlSize = 0.5;
				
				GraphicsUtil.drawArrow(graphics, pTo, new Point(0,0), style);
			}

		}
		
	}
}