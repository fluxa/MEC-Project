package cn.bounce
{
	
	import com.adobe.serialization.json.JSON;
	import com.bit101.components.ProgressBar;
	import com.bit101.components.Text;
	import com.bit101.components.TextArea;
	import com.reigndesign.network.BaseResponse;
	
	import flash.display.DisplayObject;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.TimerEvent;
	import flash.geom.Rectangle;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.sensors.Accelerometer;
	import flash.text.TextFormat;
	import flash.utils.Timer;
	
	import org.osmf.events.TimeEvent;

	public class NetworkView extends Sprite
	{
		private var _data:Array;
		private var _jsonStr:String;
		private var _conns:Array;
		private var _connAtoN:Object;
		private var _connNtoA:Object;
		private var _nodeDict:Object;
		private var _connEditWidget:Array;
		private var _bounds:Rectangle;
		
		private var _nodeLayer:Sprite;
		private var _connLayer:Sprite;
		private var _uiLayer:Sprite;
		
		private var _showingUI:Boolean;
		private var _selectedNode:String;
		
		private var _nodeStartDragging:Boolean;
		private var _nodeDidDrag:Boolean;
		
		private var _topBar:TopBar;
		private var _saveTimer:Timer;
		private var _willSave:Boolean;
		
		public function NetworkView(jsonStr:String, bounds:Rectangle, topBar:TopBar)
		{
			super();
			
			
			_jsonStr = jsonStr;
			_bounds = bounds;
			_topBar = topBar;
			_connEditWidget = [];
			_conns = [];
			_connAtoN = {};
			_connNtoA = {};
			_nodeDict = {};
			
			
			_nodeLayer = new Sprite();
			_connLayer = new Sprite();
			_uiLayer = new Sprite();
			
			
			init();
			
		}
		
		
		public function destroy():void
		{
			destroyAllObjects();
			
			_jsonStr = null;
			_connEditWidget = null;
			_conns = null;
			_connAtoN = null;
			_connNtoA = null;
			_nodeDict = null;
			
			removeChild(_nodeLayer);
			removeChild(_connLayer);
			removeChild(_uiLayer);
			
			_nodeLayer = null;
			_connLayer = null;
			_uiLayer = null;
		}
		
		private function destroyAllObjects():void
		{
			var all:Array = allObjects();
			
			for each(var obj:Object in all)
			{
				if(obj is NodeSprite)
				{
					obj.destroy();
					obj.parent.removeChild(obj as DisplayObject);
				}
				else
				{
					obj.clear();
				}
				obj = null;
			}
		}
		
		private function reBuild():void
		{
			destroyAllObjects();
			
		}
		
		private function init():void
		{
			_data = JSON.decode(_jsonStr as String) as Array;
			
			trace(DataUtils.JsonToCSV(_data));
			
			//layers
			addChild(_connLayer);
			addChild(_nodeLayer);
			addChild(_uiLayer);
			
			render();
	
		}
		
		private function render():void
		{
			
			var obj:Object, a:String;
			var from:NodeSprite, to:NodeSprite, rels:Array;
			var conn:ConnectorSprite;
			
			// build data set and tree edges
			_data.sortOn("name");
			
			for each (obj in _data) 
			{
				var name:String = obj["name"];
				
				if(!_nodeDict[name])
				{
					var nsprite:NodeSprite = new NodeSprite(obj, onNodeOver, onNodeOut, onNodeDown, onNodeClick);
					nsprite.x = _bounds.x + Math.random() * (_bounds.width - _bounds.x * 2);
					nsprite.y = _bounds.y + Math.random() * (_bounds.height - _bounds.y * 2);
					
					_nodeDict[name] = _nodeLayer.addChild(nsprite);
				}
				
			}
			
			//create connectors
			for (a in _nodeDict) 
			{
				from = _nodeDict[a];
				var eat:Array = from.data["eat"];
				rels = [];
				
				for each(var b:String in eat)
				{
					//legend.text += a + " se come a " + b + "\r";
					to = _nodeDict[b];
					conn = new ConnectorSprite({"from":from, "to":to});
					rels.push(_connLayer.addChild(conn));
					_conns.push(conn);
				}
				
				_connAtoN[a] = rels;
				rels = null;
			}
			
			//find N to A relation
			buildRelationDict();
			
		}
		
		private function buildRelationDict():void
		{
			var a:String, to:NodeSprite, rels:Array, conn:ConnectorSprite;
			_connNtoA = {};
			
			for (a in _nodeDict)
			{
				to = _nodeDict[a];
				rels = [];
				for each(conn in _conns)
				{
					if(conn.data["to"] == to)
					{
						rels.push(conn);
					}
				}
				_connNtoA[a] = rels;
				
				unselConnectors(a);
			}
		}
		
		private function update():void
		{
			var all:Array = allConnectorsFor(_selectedNode);
			
			for each(var n:ObjectSprite in all)
			{
				n.update();
			}
			
			all = null;
		}
		
		private function allConnectorsFor(name:String):Array
		{
			var a:Array = _connAtoN[name];
			a = a.concat(_connNtoA[name]);
			return a;
		}
		
		private function allObjects():Array
		{
			var all:Array = [];
			var n:Object;
			var a:Array;
			
			for each(n in _nodeDict)
			{
				all.push(n);
			}
			
			for each(a in _connNtoA)
			{
				for each(n in a)
				{
					all.push(n);
				}
			}
			
			for each(a in _connAtoN)
			{
				for each(n in a)
				{
					all.push(n);
				}
			}
			
			
			return all;
		}
		
		private function cleanUI():void
		{
			//remove conn edit widgets
			while(_connEditWidget.length>0)
			{
				var d:UIObject = _connEditWidget.shift();
				_uiLayer.removeChild(d);
				d.clear();
				d = null;
			}
			_connEditWidget = [];
		}
		
		
		/**
		 * EVENTS
		 **/
		
		private function onStageMouseDown(e:MouseEvent):void
		{
			hideConnectorControls();
		}
		
		private function onStageMouseMove(e:MouseEvent):void
		{
			_nodeDidDrag = true;
			update();
		}
		
		private function onStageMouseUp(e:MouseEvent):void
		{
			_nodeStartDragging = false;
			
			var n:NodeSprite = _nodeDict[_selectedNode];
			n.stopDrag();
			
			if(_nodeDidDrag)
			{
				e.stopImmediatePropagation();
				update();
				hideConnectorControls();
			}
			
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, onStageMouseMove);
			stage.removeEventListener(MouseEvent.MOUSE_UP, onStageMouseUp);
			
		}
		
		private function onNodeOver(n:NodeSprite):void
		{
			if(!_showingUI)
			{
				var nname:String = n.data["name"];
				n.alpha = 0.7;
				selectConnectors(nname);
			}
			
		}
		
		private function onNodeOut(n:NodeSprite):void
		{
			if(!_showingUI)
			{
				var nname:String = n.data["name"];
				n.alpha = 1;
				unselConnectors(nname);
			}
		}
		
		private function onNodeDown(n:NodeSprite, e:MouseEvent):void
		{
			if(_selectedNode == "" || _selectedNode == null)
			{
				_nodeStartDragging = true;
				_selectedNode = n.data["name"];
				
				if(!stage.hasEventListener(MouseEvent.MOUSE_MOVE))
				{
					stage.addEventListener(MouseEvent.MOUSE_MOVE, onStageMouseMove, false, 0, true);
				}
				
				if(!stage.hasEventListener(MouseEvent.MOUSE_UP))
				{
					stage.addEventListener(MouseEvent.MOUSE_UP, onStageMouseUp, false, 0, true);
				}
				
				n.startDrag();
			}
		}
		
		private function onNodeClick(n:NodeSprite, e:MouseEvent):void
		{
			if(!_nodeDidDrag)
			{
				_showingUI = true;
				
				//normal state
				if(_selectedNode != null && _selectedNode != "")
				{
					var sn:NodeSprite = _nodeDict[_selectedNode];
					sn.alpha = 1;
					unselConnectors(_selectedNode);
				}
				
				e.stopImmediatePropagation();
				cleanUI();
				_selectedNode = n.data["name"];
				selectConnectors(_selectedNode);
				showConnectorControlsFor(_selectedNode);
				selNode(n);
			}
			
			_nodeDidDrag = false;
		}
		
		private function selNode(n:NodeSprite):void
		{
			//_tempUI.push(_uiLayer.addChild(new ConnEditWidget(n, onEdit)));
		}
		
		private function selectConnectors(name:String):void
		{
			if(name != "" && name != null)
			{
				var a:Array = allConnectorsFor(name);
				for each(var conn:ConnectorSprite in a)
				{
					conn.alpha = 1;
				}
			}
			
		}
		
		private function unselConnectors(name:String):void
		{
			if(name != "" && name != null)
			{
				var a:Array = allConnectorsFor(name);
				for each(var conn:ConnectorSprite in a)
				{
					conn.alpha = 0.1;
				}
			}
			
		}
		
		private function showConnectorControlsFor(name:String):void
		{
			var a:Array = allConnectorsFor(name);
			for each(var conn:ConnectorSprite in a)
			{
				_connEditWidget.push(_uiLayer.addChild(new ConnEditWidget(conn, onConnEdit)));
			}
			
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onStageMouseDown, false, 0, true);
		}
		
		private function hideConnectorControls():void
		{
			_showingUI = false;
			var n:NodeSprite = _nodeDict[_selectedNode];
			onNodeOut(n);
			_selectedNode = "";
			stage.removeEventListener(MouseEvent.MOUSE_DOWN, onStageMouseDown);
			cleanUI();
		}
		
		private function removeConnectorControl(conn:ConnectorSprite):void
		{
			for each(var w:ConnEditWidget in _connEditWidget)
			{
				if(w.conn == conn)
				{
					w.clear();
					_connEditWidget.splice(_connEditWidget.indexOf(w),1);
					_uiLayer.removeChild(w);
					w=null;
					break;
				}
			}
		}
		
		private function onConnEdit(action:String, obj:ConnectorSprite, e:MouseEvent):void
		{
			var from:Object = obj.data.from;
			var fromEat:Array = from.data.eat;
			var fromK:String = from.data.name;
			
			var to:Object = obj.data.to;
			var toEat:Array = to.data.eat;
			var toK:String = to.data.name;
			
			switch(action)
			{
				case "flip":
					
					//change data
					fromEat.splice(fromEat.indexOf(toK),1);
					toEat.push(fromK);
					
					//change connector's data
					var neo_data:Object = {"from":to,"to":from};
					obj.data = neo_data;						
					obj.update();
					
					break;
				
				case "delete":
					
					//change data
					fromEat.splice(fromEat.indexOf(toK),1);
					
					//remove connector forever!
					obj.clear();
					_connLayer.removeChild(obj as DisplayObject);
					_connAtoN[fromK].splice(_connAtoN[fromK].indexOf(obj),1);
					_connNtoA[toK].splice(_connNtoA[toK].indexOf(obj),1);
					_conns.splice(_conns.indexOf(obj),1);
					
					removeConnectorControl(obj);
					obj = null;
					
					break;
			}
			
			//avoid unselect node
			//e.stopImmediatePropagation();
			//hideConnectorControls();
			//showConnectorControlsFor(fromK);
			
			//save progress
			if(UserInfo.instance().data)
			{
				if(_saveTimer)
				{
					_saveTimer.reset();
				}
				else
				{
					_saveTimer = new Timer(1000, 1);
					_saveTimer.addEventListener(TimerEvent.TIMER, onSaveTimerComplete);
				}
				
				_saveTimer.start();
				_willSave = true;
			}
		}
		
		private function onSaveTimerComplete(e:TimerEvent):void
		{
			_saveTimer.removeEventListener(TimerEvent.TIMER, onSaveTimerComplete);
			_saveTimer = null;
			_willSave = false;
			
			var revision:String = DataUtils.JsonToCSV(_data);
			ServiceManager.instance().saveRevision(revision, onSaveRevisionComplete, onSaveRevisionError);
			_topBar.loading();
		}
		
		private function onSaveRevisionComplete(response:BaseResponse):void
		{
			_topBar.stop();
		}
		
		private function onSaveRevisionError(message:String):void
		{
			_topBar.stop();
			trace(message);
		}
		
	}
}