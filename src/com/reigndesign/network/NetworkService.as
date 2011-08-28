package com.reigndesign.network
{

	public class NetworkService extends BaseService
	{
		public static var Gateway:String;
		
		public function NetworkService(endpoint:String)
		{
			this.gateway = Gateway;
			this.endpoint = endpoint;
			
			super();
		}
		
		public override function parse(data:String):void
		{
			requestResponse = BaseParser.Parse(data);
		}
	}
}