package
{
	import cn.bounce.DataUtils;
	import cn.bounce.NetworkView;
	import cn.bounce.ServiceManager;
	import cn.bounce.TopBar;
	import cn.bounce.UserInfo;
	
	import com.adobe.serialization.json.JSON;
	import com.adobe.serialization.json.JSONDecoder;
	import com.bit101.components.Label;
	import com.millermedeiros.swffit.SWFFit;
	import com.reigndesign.network.BaseResponse;
	import com.reigndesign.network.NetworkService;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.TimerEvent;
	import flash.geom.Matrix;
	import flash.geom.Rectangle;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.utils.Timer;
	
	[SWF(backgroundColor="#ffffff", frameRate="60")]
	public class MECproject extends Sprite
	{
		
		[Embed(source="/assets/data.json.txt", mimeType="application/octet-stream")]
		private var jsonDataClazz:Class;
		
		[Embed(source="/assets/datatest.csv", mimeType="application/octet-stream")]
		private var csvDataClazz:Class;
		
		private var _resizeTimer:Timer;
		private var _nview:NetworkView;
		
		private var margin:Number = 10;
		private var data:Object;
		
		private var topBar:TopBar;
		
		public function MECproject()
		{
			
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.align = StageAlign.TOP_LEFT;
			stage.addEventListener(Event.RESIZE, onStageResize);
			
			//check FlashVars
			if(loaderInfo.parameters.data)
			{
				data = JSON.decode(loaderInfo.parameters.data);
			}
			
			if(data)
			{
				NetworkService.Gateway 	= data.gateway;
				if(data.matrix_key)
				{
					//viewer session
					ServiceManager.instance().getMatrix(data.matrix_key, onGetMatrixComplete, onError);
				}
				if(data.revision_key)
				{
					//viewer session
					ServiceManager.instance().getRevision(data.revision_key, onGetMatrixComplete, onError);
				}
				else if(data.link_key)
				{
					//professor edit session
					ServiceManager.instance().getLink(data.link_key, onGetLinkComplete, onError);
				}
			}
			else
			{
				//debug
				new Label(this, 50, 5, "Debug Session", 20, 0xffffff);
				NetworkService.Gateway = "http://localhost:8087";
				var matrix_key:String = "ag9kZXZ-bWVjcHJveWVjdG9yDAsSBk1hdHJpeBgBDA";
				ServiceManager.instance().getMatrix(matrix_key, onGetMatrixComplete, onError);
			}
			
		}
		
		private function onGetMatrixComplete(response:BaseResponse):void
		{
			UserInfo.instance().data = response.data;
			onStageResize();
		}
		
		private function onGetLinkComplete(response:BaseResponse):void
		{
			UserInfo.instance().data = response.data;
			onStageResize();
		}
		
		public function onError(message:String):void
		{
			trace(message);
		}
		
		private function onStageResize(e:Event=null):void
		{
			if(_resizeTimer)
			{
				_resizeTimer.reset();
				
			}
			else
			{
				_resizeTimer = new Timer(500, 1);
				_resizeTimer.addEventListener(TimerEvent.TIMER, onResizeTimerComplete);
			}
			
			_resizeTimer.start();
		
		}
		
		private function onResizeTimerComplete(e:TimerEvent):void
		{
			_resizeTimer.removeEventListener(TimerEvent.TIMER, onResizeTimerComplete);
			_resizeTimer = null;
			
			if(_nview)
			{
				_nview.destroy();
				removeChild(_nview);
				_nview = null;
			}
			
			if(topBar)
			{
				//removeChild(topBar);
				topBar.destroy();
				topBar = null;
			}
			
			topBar = new TopBar();
			//addChild(topBar);
			
			var data:String = DataUtils.CSVtoJson(UserInfo.instance().data.matrix.data);
			_nview = new NetworkView(data, new Rectangle(margin,topBar.h+margin,stage.stageWidth-margin*2,stage.stageHeight-(topBar.h+margin)),topBar);
			addChild(_nview);
			
		}
	}
}