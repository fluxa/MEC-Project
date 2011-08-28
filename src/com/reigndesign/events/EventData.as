package com.reigndesign.events
{
	import flash.events.Event;
	
	public class EventData extends Event
	{
		public var data:Object;
		public function EventData(type:String, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
		}
	}
}