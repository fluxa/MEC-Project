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
			var service:NetworkService = new NetworkService("/app/getmatrix/");
				service.addField("key", key);
				addAndSendRequest(service, completeDelegate, errorDelegate);
		}
		
		public function getRevision(key:String, completeDelegate:Function, errorDelegate:Function):void
		{
			var service:NetworkService = new NetworkService("/app/getrevision/");
			service.addField("key", key);
			addAndSendRequest(service, completeDelegate, errorDelegate);
		}
		
		public function getLink(key:String, completeDelegate:Function, errorDelegate:Function):void
		{
			var service:NetworkService = new NetworkService("/app/getlink/");
				service.addField("key", key);
				addAndSendRequest(service, completeDelegate, errorDelegate);
		}
		
		public function saveRevision(data:String, completeDelegate:Function, errorDelegate:Function):void
		{
			var service:NetworkService = new NetworkService("/app/saverevision/");
			service.addField("key", UserInfo.instance().data.link.key);
			service.addField("data", data);
			addAndSendRequest(service, completeDelegate, errorDelegate);
		}
	}
}