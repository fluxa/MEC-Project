package cn.bounce
{
	import com.bit101.components.Label;
	
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	
	public class NodeSprite extends ObjectSprite
	{
		private var _data:Object;
		private var _label:Label;
		
		private var _radius:int = 6;
		
		private var _onMouseOver:Function;
		private var _onMouseOut:Function;
		private var _onMouseDown:Function;
		private var _onMouseClick:Function;
		
		public function NodeSprite(data:Object, mouseOver:Function, mouseOut:Function, mouseDown:Function, mouseClick:Function)
		{
			super();
			this.mouseEnabled = true;
			this.mouseChildren = false;
			this.data = data;
			this._onMouseOver = mouseOver;
			this._onMouseOut = mouseOut;
			this._onMouseDown = mouseDown;
			this._onMouseClick = mouseClick;
			this.addEventListener(MouseEvent.MOUSE_OVER, onMouseOver, false, 0, true);
			this.addEventListener(MouseEvent.MOUSE_OUT, onMouseOut, false, 0, true);
			this.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown, false, 0, true);
			this.addEventListener(MouseEvent.CLICK, onMouseClick, false, 0, true);
			render();
		}
		
		override public function render():void
		{
			if(dataChanged)
			{
				dataChanged = false;
				
				needsUpdate = true;
			}
			
			if(needsUpdate)
			{
				needsUpdate = false;
				
				//draw circle
				graphics.clear();
				graphics.beginFill(0x000000, 1);
				graphics.drawCircle(0,0,_radius);
				graphics.endFill();
				
				_label = new Label(this, 0, 0, data["name"]);
			}
			
		}
		
		private function onMouseOver(e:MouseEvent):void
		{
			if(_onMouseOver != null)
			{
				_onMouseOver(this);
			}
		}
		
		private function onMouseOut(e:MouseEvent):void
		{
			if(_onMouseOut != null)
			{
				_onMouseOut(this);
			}
		}
		
		private function onMouseDown(e:MouseEvent):void
		{
			if(_onMouseDown != null)
			{
				_onMouseDown(this, e);
			}
		}
		
		private function onMouseClick(e:MouseEvent):void
		{
			if(_onMouseClick != null)
			{
				_onMouseClick(this, e);
			}
		}
		
		public function destroy():void
		{
			removeEventListener(MouseEvent.MOUSE_OVER, onMouseOver)
			removeEventListener(MouseEvent.MOUSE_OUT, onMouseOut);
			removeEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
			removeEventListener(MouseEvent.CLICK, onMouseClick);
			_label.parent.removeChild(_label);
			_label = null;
			clear();
		}
		
	}
}