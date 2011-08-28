package com.reigndesign.network
{
	import com.reigndesign.events.ServiceEvent;
	
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.HTTPStatusEvent;
	import flash.events.IOErrorEvent;
	import flash.events.SecurityErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLRequestMethod;
	import flash.net.URLVariables;
	import flash.utils.Dictionary;

	public class BaseService extends EventDispatcher
	{
		public var uuid:String;
		
		public var gateway:String;
		public var endpoint:String;
		
		public var rawParameters:String;
		public var requestResponse:BaseResponse;
		
		private var parameters:Dictionary;
		private var urlLoader:URLLoader;
		private var urlRequest:URLRequest;
		
		public function BaseService()
		{
			parameters = new Dictionary();
			urlLoader = new URLLoader();
			urlRequest = new URLRequest();
			
			//POST by default
			urlRequest.method = URLRequestMethod.POST;
		}
		
		public function setHTTPMethod(method:String):void
		{
			urlRequest.method = method;
		}
		
		public function addField(name:String, value:String):void
		{
			parameters[name] = value;
		}
		
		public function sendRequest():void
		{
			var urlString:String = gateway+endpoint;
			
			if(urlRequest.method == URLRequestMethod.GET)
			{
				urlRequest.url = getURLWithParameters();
			}
			else
			{
				urlRequest.url = urlString;
				urlRequest.data = getRequestData();
			}
						
			urlLoader.addEventListener(Event.COMPLETE, urlLoaderComplete);
			urlLoader.addEventListener(HTTPStatusEvent.HTTP_STATUS, urlLoaderStatus);
			urlLoader.addEventListener(IOErrorEvent.IO_ERROR, urlLoaderError);
			
			try {
				urlLoader.load(urlRequest);
				trace("Request sent: \nURL: " + urlRequest.url + "\nData: " + urlRequest.data);
				trace("-------------");
				
			}
			catch (error:SecurityError)
			{
				trace("A SecurityError has occurred.");
			}

		}
		
		protected function urlLoaderComplete(e:Event):void
		{
			trace("Loader complete: ");
			parse(urlLoader.data);
			resetLoader();
			
			var se:ServiceEvent = new ServiceEvent(ServiceEvent.REQUEST_COMPLETE);
				se.requestResponse = requestResponse;
			dispatchEvent(se);
		}
		
		protected function urlLoaderStatus(e:HTTPStatusEvent):void
		{
			trace(e);
		}
		
		protected function urlLoaderError(e:IOErrorEvent):void
		{
			trace(e);
			var se:ServiceEvent = new ServiceEvent(ServiceEvent.REQUEST_ERROR);
				se.error = e.text;
			dispatchEvent(se);
		}
		
		private function resetLoader():void
		{
			urlLoader.removeEventListener(Event.COMPLETE, urlLoaderComplete);
			urlLoader.removeEventListener(HTTPStatusEvent.HTTP_STATUS, urlLoaderStatus);
			urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, urlLoaderError);
			
		}
		
		private function getRequestData():Object
		{
			if(rawParameters != null) return rawParameters;
			
			var variables:URLVariables = new URLVariables();
			
			for(var key:String in parameters)
			{
				var val:String = parameters[key];
				variables[key] = val;
			}
			
			return variables;
		}
		
		private function getURLWithParameters():String
		{
			var url:String = gateway+endpoint+"/?";
			
			for(var key:String in parameters)
			{
				var val:String = parameters[key];
				url += key + "=" + val + "&";
			}
			
			return url;
		}
		
		//Implement the parser if you need to parse the response data
		public function parse(data:String):void
		{
			trace("Parsing: ");
			trace(data);
			var response:BaseResponse = new BaseResponse();
			response.rawResponse = data;
			requestResponse = response;
		}
	}
}