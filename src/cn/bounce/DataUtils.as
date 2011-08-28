package cn.bounce
{
	import com.adobe.serialization.json.JSON;
	import com.shortybmc.data.parser.CSV;
	
	import flash.utils.Dictionary;

	public class DataUtils
	{
		public function DataUtils()
		{
		}
		
		public static function CSVtoJson(csvData:String):String
		{
			var reg:RegExp = new RegExp('\n|\r|(\r\n)' ,'ig');
			csvData = csvData.replace(reg, "#")
			var linesStr:Array = csvData.split("#");
			var lines:Array = [];
			for each(var lineStr:String in linesStr)
			{
				lines.push(lineStr.split(";"));
			}
			
			var jsonStr:String = "[";
			
			var header:Array = lines[0];
			var len:int = header.length;
			
			for(var i:int=1;i<len;i++)
			{
				var n:String = header[i];
				jsonStr += '{"name":'+n+',';
				
				jsonStr += '"eat":[';
				for(var j:int=1;j<len;j++)
				{
					if(i != j)
					{
						var line:Array = lines[j];
						var val:int = int(line[i]);
						if(val == 1)
						{
							jsonStr += line[0]+','
						}
					}
				}
				
				if(jsonStr.substr(-1,1) == ",")	
				{
					jsonStr = jsonStr.substr(0, jsonStr.length-1);
				}
					
				jsonStr += ']';
				jsonStr += '},';
			}
			if(jsonStr.substr(-1,1) == ",")	
			{
				jsonStr = jsonStr.substr(0, jsonStr.length-1);
			}
			jsonStr += "]";
			
			return jsonStr;
		}
		
		public static function JsonToCSV(jsonObj:Object):String
		{
			var headers:Dictionary = new Dictionary();
			var headersR:Dictionary = new Dictionary();
			var len:int = 0;
			var o:Object;
			var b:Object;
			var i:int = 0;
			var j:int = 0;
			var z:int = 0;
			
			//get categories dict
			for each(o in jsonObj)
			{
				headers[o["name"]] = len;
				headersR[len]=o["name"];
				len++;
			}
			
			//create multi-array
			var a:Array = new Array(len);
			for(i=0;i<len;i++)
			{
				a[i] = new Array(len);
				for(j=0;j<len;j++)
				{
					a[i][j]=0;
				}
			}
			
			//fill array
			for each(o in jsonObj)
			{
				j = headers[o["name"]];
				for each(b in o["eat"])
				{
					i = headers[b];
					a[i][j]=1;
				}
			}
			
			//dump to csv format
			var csvData:String = "\"\";";
			for(i=0;i<len;i++)
			{
				if(i==0)
				{
					for(z=0;z<len;z++)
					{
						csvData += "\""+headersR[z]+"\";";
					}
					csvData = csvData.substring(0,csvData.length-1);
					csvData += "\n";
				}
				
				csvData += "\""+headersR[i]+"\";";
				for(j=0;j<len;j++)
				{
					csvData += a[i][j] + ";";
				}
				csvData = csvData.substring(0,csvData.length-1);
				csvData += "\n";
			}
			
			headers = null;
			headersR = null
			o = null;
			b = null;
			
			return csvData;
		}
	}
}