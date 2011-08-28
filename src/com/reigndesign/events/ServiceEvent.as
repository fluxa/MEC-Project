package com.reigndesign.events
{
	import com.reigndesign.network.BaseResponse;
	
	import flash.events.Event;
	
	public class ServiceEvent extends Event
	{
		public static const REQUEST_COMPLETE:String = "serviceEventComplete";
		public static const REQUEST_ERROR:String = "serviceEventError";
		
		public var requestResponse:BaseResponse;
		public var error:String;
		
		public function ServiceEvent(type:String, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
		}
	}
}