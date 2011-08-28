package com.reigndesign.utils
{
	public class Numbers
	{
		public static function getRandom(from:int, to:int):int
		{
			return Math.floor(Math.random()*(1+to-from))+from;
		}
		
		public static function getProb():Number
		{
			return Math.random();	
		}
		public static function rad2deg(rad:Number):Number {
			return rad*180/Math.PI;
		}
	}
}