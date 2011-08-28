package com.reigndesign.network
{
	import com.reigndesign.events.ServiceEvent;
	import com.reigndesign.utils.GUID;
	
	import flash.utils.Dictionary;

	public class BaseServiceManager
	{
		private var delegateDictionary:Dictionary;
		
		public function BaseServiceManager()
		{
			delegateDictionary = new Dictionary();
		}
		
		public function addAndSendRequest(service:BaseService, completeDelegate:Function=null, errorDelegate:Function=null):void
		{
			var uuid:String = GUID.create(20);
			service.uuid = uuid;
			service.addEventListener(ServiceEvent.REQUEST_COMPLETE, onServiceComplete);
			service.addEventListener(ServiceEvent.REQUEST_ERROR, onServiceError);
			
			delegateDictionary[uuid] = [completeDelegate, errorDelegate];
			
			service.sendRequest();
		}
		
		protected function onServiceComplete(e:ServiceEvent):void
		{
			var service:BaseService = e.target as BaseService;
				service.removeEventListener(ServiceEvent.REQUEST_COMPLETE, onServiceComplete);
				service.removeEventListener(ServiceEvent.REQUEST_ERROR, onServiceError);
			
			var fx:Function = delegateDictionary[service.uuid][0];
			
			if(fx != null) fx(e.requestResponse);
			
			delegateDictionary[service.uuid] = null;
			service = null;
			
		}
		
		protected function onServiceError(e:ServiceEvent):void
		{
			var service:BaseService = e.target as BaseService;
				service.removeEventListener(ServiceEvent.REQUEST_COMPLETE, onServiceComplete);
				service.removeEventListener(ServiceEvent.REQUEST_ERROR, onServiceError);
				
			var fx:Function = delegateDictionary[service.uuid][1];
			
			if(fx != null) fx(e.error);
			
			delegateDictionary[service.uuid] = null;
			service = null;
		}
	}
}