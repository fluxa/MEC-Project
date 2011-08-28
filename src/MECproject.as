package
{
	import cn.bounce.DataUtils;
	import cn.bounce.NetworkView;
	import cn.bounce.ServiceManager;
	import cn.bounce.UserInfo;
	
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
		
		[Embed(source="assets/top_bar.png")]
		private var topBarClass:Class;
		
		private var topBarBData:BitmapData;
		
		private var _resizeTimer:Timer;
		private var _nview:NetworkView;
		
		private var margin:Number = 10;
		
		public function MECproject()
		{
			
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.align = StageAlign.TOP_LEFT;
			stage.addEventListener(Event.RESIZE, onStageResize);
			
			var topBarBitmap:Bitmap = new topBarClass();
			topBarBData = topBarBitmap.bitmapData;
			topBarBitmap = null;
			
			//check FlashVars
			NetworkService.Gateway 			= loaderInfo.parameters.gateway 	? loaderInfo.parameters.gateway 	: "http://localhost:8087/";
			UserInfo.instance().user_key 	= loaderInfo.parameters.user_key	? loaderInfo.parameters.user_key 	: "";
			UserInfo.instance().matrix_key	= loaderInfo.parameters.matrix_key	? loaderInfo.parameters.matrix_key	: "ag9kZXZ-bWVjcHJveWVjdG9yDAsSBk1hdHJpeBgEDA";
			
			ServiceManager.instance().getMatrix(UserInfo.instance().matrix_key, onGetMatrixComplete, onError);
			
			
		}
		
		private function onGetMatrixComplete(response:BaseResponse):void
		{
			UserInfo.instance().matrix_data = DataUtils.CSVtoJson(String(response.data));
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
			//SWFFit.fit("flashContent", stage.stageWidth, stage.stageHeight);
			if(_nview)
			{
				_nview.destroy();
				removeChild(_nview);
				_nview = null;
				
			}
			
			//topbar
			graphics.beginBitmapFill(topBarBData, new Matrix(), true, false);
			graphics.drawRect(0,0,stage.stageWidth,topBarBData.height);
			
			_nview = new NetworkView(UserInfo.instance().matrix_data, new Rectangle(margin,topBarBData.height+margin,stage.stageWidth-margin*2,stage.stageHeight-(topBarBData.height+margin)));
			addChild(_nview);
			
			trace("resized " + stage.stageWidth + " - " + stage.stageHeight);
		}
	}
}