package cn.bounce
{
	import com.reigndesign.network.BaseServiceManager;
	import com.reigndesign.network.NetworkService;
	
	public class ServiceManager extends BaseServiceManager
	{
		private static var _instance:ServiceManager;
		
		public static function instance():ServiceManager
		{
			if(_instance == null)
			{
				_instance = new ServiceManager();
			}
			return _instance;
		}
		
		public function ServiceManager()
		{
			super();
		}
		
		public function getMatrix(key:String, completeDelegate:Function, errorDelegate:Function):void
		{
			var service:NetworkService = new NetworkService("app/getmatrix/");
				service.addField("key", key);
				addAndSendRequest(service, completeDelegate, errorDelegate);
		}
		
		public function getLink(key:String, completeDelegate:Function, errorDelegate:Function):void
		{
			var service:NetworkService = new NetworkService("app/getlink/");
				service.addField("key", key);
				addAndSendRequest(service, completeDelegate, errorDelegate);
		}
	}
}