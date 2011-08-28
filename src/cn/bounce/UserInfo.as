package cn.bounce
{
	public class UserInfo extends Object
	{
		private static var _instance:UserInfo;
		
		public var data:Object;
		
		
		public function UserInfo()
		{
			super();
		}
		
		public static function instance():UserInfo
		{
			if(_instance==null)
			{
				_instance = new UserInfo();
			}
			return _instance;
		}
	}
}