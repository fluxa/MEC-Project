package cn.bounce
{
	import com.bit101.components.Label;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.geom.Matrix;
	import flash.geom.Point;
	
	public class ConnEditWidget extends UIObject
	{
		private var _conn:ConnectorSprite;
		private var _label:Label;
		private var _flipBt:Sprite;
		private var _yesBt:Sprite;
		private var _deleteBt:Sprite;
		private var _onEditDelegate:Function;
		
		[Embed(source="../../assets/icon_flip.png")]
		private var iconFlipClass:Class;
		
		[Embed(source="../../assets/icon_delete.png")]
		private var iconDeleteClass:Class;
		
		private var IconFlipBData:BitmapData;
		private var IconDeleteBData:BitmapData;
		
		public function ConnEditWidget(conn:ConnectorSprite, onEdit:Function)
		{
			super();
			
			if(IconFlipBData == null)
			{
				var iconFlipBmap:Bitmap = new iconFlipClass();
				IconFlipBData = iconFlipBmap.bitmapData;
				iconFlipBmap = null;
			}
			
			if(IconDeleteBData == null)
			{
				var iconDeleteBmap:Bitmap = new iconDeleteClass();
				IconDeleteBData = iconDeleteBmap.bitmapData;
				iconDeleteBmap = null;
			}
			
			_conn = conn;
			_onEditDelegate = onEdit;
			
			//position
			
			var p:Point = null;
			if(conn is ConnectorSprite)
			{
				//midpoint: Cx = (p1X + p2X)/2 --- Cy = (p1Y + p2Y)/2
				var p1:ObjectSprite = conn.data["from"];
				var p2:ObjectSprite = conn.data["to"];
				p = new Point((p1.x+p2.x)/2,(p1.y+p2.y)/2);
			}
			else if(conn is NodeSprite)
			{
				p = new Point(conn.x+10, conn.y);
			}
			
			var pos:Point = localToGlobal(new Point(p.x, p.y));
			
			x = pos.x, y = pos.y;
			
			//ui
			
			var w:Number = 15;
			_flipBt = new Sprite();
			_flipBt.graphics.beginBitmapFill(IconFlipBData, new Matrix(), false, false);
			_flipBt.graphics.drawRect(0,0,w,w);
			addChild(_flipBt);
			
			_deleteBt = new Sprite();
			_deleteBt.x = _flipBt.x+w;
			_deleteBt.graphics.beginBitmapFill(IconDeleteBData, new Matrix(), false, false);
			_deleteBt.graphics.drawRect(0,0,w,w);
			addChild(_deleteBt);
			
			_flipBt.addEventListener(MouseEvent.MOUSE_DOWN, onFlip);
			_deleteBt.addEventListener(MouseEvent.MOUSE_DOWN, onDelete);
		}
		
		public function get conn():ConnectorSprite
		{
			return _conn;
		}
		
		private function onFlip(e:MouseEvent):void
		{
			if(_onEditDelegate != null)
			{
				_onEditDelegate("flip", _conn, e);
			}
		}
		
		private function onDelete(e:MouseEvent):void
		{
			if(_onEditDelegate != null)
			{
				_onEditDelegate("delete", _conn, e);
			}
		}
		
		override public function clear():void
		{
			_flipBt.removeEventListener(MouseEvent.CLICK, onFlip);
			_deleteBt.removeEventListener(MouseEvent.CLICK, onDelete);
			
			_flipBt.graphics.clear();
			_deleteBt.graphics.clear();
			
			removeChild(_flipBt);
			removeChild(_deleteBt);
			
			_conn = null;
			_flipBt = null;
			_deleteBt = null;
			_onEditDelegate = null;
			
			super.clear();
			
			
		}
	}
}