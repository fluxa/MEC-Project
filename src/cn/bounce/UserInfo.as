package cn.bounce
{
	public class UserInfo extends Object
	{
		private static var _instance:UserInfo;
		
		public var user_key:String;
		public var matrix_key:String;
		public var matrix_data:String;
		
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