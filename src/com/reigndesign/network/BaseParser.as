package com.reigndesign.network
{
	import com.adobe.serialization.json.JSON;

	public class BaseParser
	{
		public function BaseParser()
		{
		}
		
		public static function Parse(data:String):BaseResponse
		{
			trace("response: " + data);
			var requestResponse:BaseResponse = new BaseResponse();
			var obj:Object = JSON.decode(data as String);
			requestResponse.success = obj.success;
			requestResponse.message = obj.message;
			requestResponse.data = obj.data;
			return requestResponse;
		}
	}
}