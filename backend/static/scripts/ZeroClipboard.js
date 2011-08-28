



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "6e1e2218b6f7ff04eb0cf14d7f837fce";
 
 
 var CS_env = {"assetHostPath":"http://www.gstatic.com/codesite/ph","projectName":"zeroclipboard","projectHomeUrl":"/p/zeroclipboard","urlPrefix":"p","domainName":null,"relativeBaseUrl":"","profileUrl":["/u/@VRFeRlNSARNAWwJ0/"],"token":"6e1e2218b6f7ff04eb0cf14d7f837fce","assetVersionPath":"http://www.gstatic.com/codesite/ph/7727387916593379202","absoluteBaseUrl":"http://code.google.com","loggedInUserEmail":"jmfluxa@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-8248756-1'],
 ['projectTracker._trackPageview']);
 
 
 </script>
 
 
 <title>ZeroClipboard.js - 
 zeroclipboard -
 
 
 Provides &quot;Copy to Clipboard&quot; functionality for your web site using JavaScript and Flash - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7727387916593379202/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7727387916593379202/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7727387916593379202/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/7727387916593379202/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <b>jmfluxa@gmail.com</b>
 
 
 | <a href="/u/@VRFeRlNSARNAWwJ0/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/@VRFeRlNSARNAWwJ0/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fzeroclipboard%2Fsource%2Fbrowse%2Ftrunk%2FZeroClipboard.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <a href="/p/zeroclipboard/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/zeroclipboard/">zeroclipboard</a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link" href="/p/zeroclipboard/" >Provides &quot;Copy to Clipboard&quot; functionality for your web site using JavaScript and Flash</a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/zeroclipboard/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/zeroclipboard/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/zeroclipboard/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/zeroclipboard/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/zeroclipboard/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/zeroclipboard/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/zeroclipboard/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/zeroclipboard/source/list">Changes</a></span> &nbsp;
 
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://zeroclipboard\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/zeroclipboard/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/zeroclipboard/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span>ZeroClipboard.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/zeroclipboard/source/browse/trunk/ZeroClipboard.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/zeroclipboard/source/browse/trunk/ZeroClipboard.js?r=13" title="Previous">&lsaquo;r13</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r16</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn16_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn16_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn16_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn16_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn16_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn16_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn16_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn16_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn16_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn16_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn16_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn16_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn16_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn16_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn16_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn16_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn16_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn16_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn16_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn16_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn16_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn16_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn16_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn16_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn16_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn16_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn16_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn16_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn16_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn16_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn16_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn16_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn16_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn16_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn16_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn16_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn16_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn16_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn16_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn16_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn16_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn16_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn16_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn16_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn16_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn16_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn16_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn16_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn16_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn16_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn16_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn16_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn16_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn16_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn16_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn16_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn16_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn16_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn16_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn16_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn16_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn16_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn16_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn16_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn16_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn16_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn16_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn16_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn16_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn16_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn16_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn16_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn16_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn16_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn16_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn16_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn16_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn16_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn16_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn16_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn16_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn16_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn16_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn16_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn16_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn16_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn16_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn16_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn16_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn16_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn16_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn16_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn16_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn16_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn16_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn16_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn16_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn16_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn16_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn16_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn16_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn16_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn16_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn16_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn16_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn16_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn16_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn16_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn16_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn16_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn16_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn16_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn16_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn16_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn16_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn16_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn16_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn16_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn16_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn16_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn16_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn16_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn16_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn16_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn16_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn16_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn16_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn16_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn16_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn16_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn16_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn16_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn16_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn16_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn16_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn16_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn16_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn16_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn16_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn16_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn16_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn16_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn16_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn16_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn16_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn16_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn16_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn16_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn16_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn16_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn16_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn16_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn16_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn16_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn16_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn16_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn16_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn16_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn16_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn16_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn16_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn16_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn16_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn16_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn16_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn16_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn16_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn16_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn16_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn16_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn16_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn16_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn16_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn16_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn16_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn16_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn16_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn16_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn16_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn16_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn16_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn16_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn16_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn16_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn16_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn16_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn16_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn16_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn16_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn16_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn16_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn16_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn16_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn16_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn16_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn16_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn16_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn16_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn16_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn16_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn16_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn16_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn16_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn16_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn16_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn16_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn16_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn16_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn16_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn16_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn16_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn16_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn16_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn16_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn16_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn16_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn16_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn16_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn16_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn16_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn16_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn16_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn16_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn16_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn16_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn16_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn16_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn16_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn16_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn16_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn16_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn16_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn16_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn16_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn16_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn16_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn16_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn16_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn16_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn16_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn16_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn16_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn16_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn16_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn16_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn16_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn16_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn16_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn16_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn16_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn16_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn16_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn16_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn16_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn16_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn16_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn16_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn16_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn16_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn16_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn16_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn16_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn16_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn16_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn16_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn16_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn16_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn16_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn16_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn16_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn16_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn16_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn16_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn16_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn16_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn16_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn16_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn16_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn16_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn16_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn16_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn16_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn16_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn16_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn16_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn16_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn16_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn16_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn16_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn16_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn16_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn16_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn16_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn16_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn16_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn16_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn16_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn16_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn16_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn16_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn16_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn16_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn16_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn16_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn16_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn16_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn16_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn16_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn16_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn16_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn16_311"

><td id="311"><a href="#311">311</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn16_1

><td class="source">// Simple Set Clipboard System<br></td></tr
><tr
id=sl_svn16_2

><td class="source">// Author: Joseph Huckaby<br></td></tr
><tr
id=sl_svn16_3

><td class="source"><br></td></tr
><tr
id=sl_svn16_4

><td class="source">var ZeroClipboard = {<br></td></tr
><tr
id=sl_svn16_5

><td class="source">	<br></td></tr
><tr
id=sl_svn16_6

><td class="source">	version: &quot;1.0.7&quot;,<br></td></tr
><tr
id=sl_svn16_7

><td class="source">	clients: {}, // registered upload clients on page, indexed by id<br></td></tr
><tr
id=sl_svn16_8

><td class="source">	moviePath: &#39;ZeroClipboard.swf&#39;, // URL to movie<br></td></tr
><tr
id=sl_svn16_9

><td class="source">	nextId: 1, // ID of next movie<br></td></tr
><tr
id=sl_svn16_10

><td class="source">	<br></td></tr
><tr
id=sl_svn16_11

><td class="source">	$: function(thingy) {<br></td></tr
><tr
id=sl_svn16_12

><td class="source">		// simple DOM lookup utility function<br></td></tr
><tr
id=sl_svn16_13

><td class="source">		if (typeof(thingy) == &#39;string&#39;) thingy = document.getElementById(thingy);<br></td></tr
><tr
id=sl_svn16_14

><td class="source">		if (!thingy.addClass) {<br></td></tr
><tr
id=sl_svn16_15

><td class="source">			// extend element with a few useful methods<br></td></tr
><tr
id=sl_svn16_16

><td class="source">			thingy.hide = function() { this.style.display = &#39;none&#39;; };<br></td></tr
><tr
id=sl_svn16_17

><td class="source">			thingy.show = function() { this.style.display = &#39;&#39;; };<br></td></tr
><tr
id=sl_svn16_18

><td class="source">			thingy.addClass = function(name) { this.removeClass(name); this.className += &#39; &#39; + name; };<br></td></tr
><tr
id=sl_svn16_19

><td class="source">			thingy.removeClass = function(name) {<br></td></tr
><tr
id=sl_svn16_20

><td class="source">				var classes = this.className.split(/\s+/);<br></td></tr
><tr
id=sl_svn16_21

><td class="source">				var idx = -1;<br></td></tr
><tr
id=sl_svn16_22

><td class="source">				for (var k = 0; k &lt; classes.length; k++) {<br></td></tr
><tr
id=sl_svn16_23

><td class="source">					if (classes[k] == name) { idx = k; k = classes.length; }<br></td></tr
><tr
id=sl_svn16_24

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_25

><td class="source">				if (idx &gt; -1) {<br></td></tr
><tr
id=sl_svn16_26

><td class="source">					classes.splice( idx, 1 );<br></td></tr
><tr
id=sl_svn16_27

><td class="source">					this.className = classes.join(&#39; &#39;);<br></td></tr
><tr
id=sl_svn16_28

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_29

><td class="source">				return this;<br></td></tr
><tr
id=sl_svn16_30

><td class="source">			};<br></td></tr
><tr
id=sl_svn16_31

><td class="source">			thingy.hasClass = function(name) {<br></td></tr
><tr
id=sl_svn16_32

><td class="source">				return !!this.className.match( new RegExp(&quot;\\s*&quot; + name + &quot;\\s*&quot;) );<br></td></tr
><tr
id=sl_svn16_33

><td class="source">			};<br></td></tr
><tr
id=sl_svn16_34

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_35

><td class="source">		return thingy;<br></td></tr
><tr
id=sl_svn16_36

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_37

><td class="source">	<br></td></tr
><tr
id=sl_svn16_38

><td class="source">	setMoviePath: function(path) {<br></td></tr
><tr
id=sl_svn16_39

><td class="source">		// set path to ZeroClipboard.swf<br></td></tr
><tr
id=sl_svn16_40

><td class="source">		this.moviePath = path;<br></td></tr
><tr
id=sl_svn16_41

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_42

><td class="source">	<br></td></tr
><tr
id=sl_svn16_43

><td class="source">	dispatch: function(id, eventName, args) {<br></td></tr
><tr
id=sl_svn16_44

><td class="source">		// receive event from flash movie, send to client		<br></td></tr
><tr
id=sl_svn16_45

><td class="source">		var client = this.clients[id];<br></td></tr
><tr
id=sl_svn16_46

><td class="source">		if (client) {<br></td></tr
><tr
id=sl_svn16_47

><td class="source">			client.receiveEvent(eventName, args);<br></td></tr
><tr
id=sl_svn16_48

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_49

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_50

><td class="source">	<br></td></tr
><tr
id=sl_svn16_51

><td class="source">	register: function(id, client) {<br></td></tr
><tr
id=sl_svn16_52

><td class="source">		// register new client to receive events<br></td></tr
><tr
id=sl_svn16_53

><td class="source">		this.clients[id] = client;<br></td></tr
><tr
id=sl_svn16_54

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_55

><td class="source">	<br></td></tr
><tr
id=sl_svn16_56

><td class="source">	getDOMObjectPosition: function(obj, stopObj) {<br></td></tr
><tr
id=sl_svn16_57

><td class="source">		// get absolute coordinates for dom element<br></td></tr
><tr
id=sl_svn16_58

><td class="source">		var info = {<br></td></tr
><tr
id=sl_svn16_59

><td class="source">			left: 0, <br></td></tr
><tr
id=sl_svn16_60

><td class="source">			top: 0, <br></td></tr
><tr
id=sl_svn16_61

><td class="source">			width: obj.width ? obj.width : obj.offsetWidth, <br></td></tr
><tr
id=sl_svn16_62

><td class="source">			height: obj.height ? obj.height : obj.offsetHeight<br></td></tr
><tr
id=sl_svn16_63

><td class="source">		};<br></td></tr
><tr
id=sl_svn16_64

><td class="source"><br></td></tr
><tr
id=sl_svn16_65

><td class="source">		while (obj &amp;&amp; (obj != stopObj)) {<br></td></tr
><tr
id=sl_svn16_66

><td class="source">			info.left += obj.offsetLeft;<br></td></tr
><tr
id=sl_svn16_67

><td class="source">			info.top += obj.offsetTop;<br></td></tr
><tr
id=sl_svn16_68

><td class="source">			obj = obj.offsetParent;<br></td></tr
><tr
id=sl_svn16_69

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_70

><td class="source"><br></td></tr
><tr
id=sl_svn16_71

><td class="source">		return info;<br></td></tr
><tr
id=sl_svn16_72

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_73

><td class="source">	<br></td></tr
><tr
id=sl_svn16_74

><td class="source">	Client: function(elem) {<br></td></tr
><tr
id=sl_svn16_75

><td class="source">		// constructor for new simple upload client<br></td></tr
><tr
id=sl_svn16_76

><td class="source">		this.handlers = {};<br></td></tr
><tr
id=sl_svn16_77

><td class="source">		<br></td></tr
><tr
id=sl_svn16_78

><td class="source">		// unique ID<br></td></tr
><tr
id=sl_svn16_79

><td class="source">		this.id = ZeroClipboard.nextId++;<br></td></tr
><tr
id=sl_svn16_80

><td class="source">		this.movieId = &#39;ZeroClipboardMovie_&#39; + this.id;<br></td></tr
><tr
id=sl_svn16_81

><td class="source">		<br></td></tr
><tr
id=sl_svn16_82

><td class="source">		// register client with singleton to receive flash events<br></td></tr
><tr
id=sl_svn16_83

><td class="source">		ZeroClipboard.register(this.id, this);<br></td></tr
><tr
id=sl_svn16_84

><td class="source">		<br></td></tr
><tr
id=sl_svn16_85

><td class="source">		// create movie<br></td></tr
><tr
id=sl_svn16_86

><td class="source">		if (elem) this.glue(elem);<br></td></tr
><tr
id=sl_svn16_87

><td class="source">	}<br></td></tr
><tr
id=sl_svn16_88

><td class="source">};<br></td></tr
><tr
id=sl_svn16_89

><td class="source"><br></td></tr
><tr
id=sl_svn16_90

><td class="source">ZeroClipboard.Client.prototype = {<br></td></tr
><tr
id=sl_svn16_91

><td class="source">	<br></td></tr
><tr
id=sl_svn16_92

><td class="source">	id: 0, // unique ID for us<br></td></tr
><tr
id=sl_svn16_93

><td class="source">	ready: false, // whether movie is ready to receive events or not<br></td></tr
><tr
id=sl_svn16_94

><td class="source">	movie: null, // reference to movie object<br></td></tr
><tr
id=sl_svn16_95

><td class="source">	clipText: &#39;&#39;, // text to copy to clipboard<br></td></tr
><tr
id=sl_svn16_96

><td class="source">	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor<br></td></tr
><tr
id=sl_svn16_97

><td class="source">	cssEffects: true, // enable CSS mouse effects on dom container<br></td></tr
><tr
id=sl_svn16_98

><td class="source">	handlers: null, // user event handlers<br></td></tr
><tr
id=sl_svn16_99

><td class="source">	<br></td></tr
><tr
id=sl_svn16_100

><td class="source">	glue: function(elem, appendElem, stylesToAdd) {<br></td></tr
><tr
id=sl_svn16_101

><td class="source">		// glue to DOM element<br></td></tr
><tr
id=sl_svn16_102

><td class="source">		// elem can be ID or actual DOM element object<br></td></tr
><tr
id=sl_svn16_103

><td class="source">		this.domElement = ZeroClipboard.$(elem);<br></td></tr
><tr
id=sl_svn16_104

><td class="source">		<br></td></tr
><tr
id=sl_svn16_105

><td class="source">		// float just above object, or zIndex 99 if dom element isn&#39;t set<br></td></tr
><tr
id=sl_svn16_106

><td class="source">		var zIndex = 99;<br></td></tr
><tr
id=sl_svn16_107

><td class="source">		if (this.domElement.style.zIndex) {<br></td></tr
><tr
id=sl_svn16_108

><td class="source">			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;<br></td></tr
><tr
id=sl_svn16_109

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_110

><td class="source">		<br></td></tr
><tr
id=sl_svn16_111

><td class="source">		if (typeof(appendElem) == &#39;string&#39;) {<br></td></tr
><tr
id=sl_svn16_112

><td class="source">			appendElem = ZeroClipboard.$(appendElem);<br></td></tr
><tr
id=sl_svn16_113

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_114

><td class="source">		else if (typeof(appendElem) == &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn16_115

><td class="source">			appendElem = document.getElementsByTagName(&#39;body&#39;)[0];<br></td></tr
><tr
id=sl_svn16_116

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_117

><td class="source">		<br></td></tr
><tr
id=sl_svn16_118

><td class="source">		// find X/Y position of domElement<br></td></tr
><tr
id=sl_svn16_119

><td class="source">		var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);<br></td></tr
><tr
id=sl_svn16_120

><td class="source">		<br></td></tr
><tr
id=sl_svn16_121

><td class="source">		// create floating DIV above element<br></td></tr
><tr
id=sl_svn16_122

><td class="source">		this.div = document.createElement(&#39;div&#39;);<br></td></tr
><tr
id=sl_svn16_123

><td class="source">		var style = this.div.style;<br></td></tr
><tr
id=sl_svn16_124

><td class="source">		style.position = &#39;absolute&#39;;<br></td></tr
><tr
id=sl_svn16_125

><td class="source">		style.left = &#39;&#39; + box.left + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_126

><td class="source">		style.top = &#39;&#39; + box.top + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_127

><td class="source">		style.width = &#39;&#39; + box.width + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_128

><td class="source">		style.height = &#39;&#39; + box.height + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_129

><td class="source">		style.zIndex = zIndex;<br></td></tr
><tr
id=sl_svn16_130

><td class="source">		<br></td></tr
><tr
id=sl_svn16_131

><td class="source">		if (typeof(stylesToAdd) == &#39;object&#39;) {<br></td></tr
><tr
id=sl_svn16_132

><td class="source">			for (addedStyle in stylesToAdd) {<br></td></tr
><tr
id=sl_svn16_133

><td class="source">				style[addedStyle] = stylesToAdd[addedStyle];<br></td></tr
><tr
id=sl_svn16_134

><td class="source">			}<br></td></tr
><tr
id=sl_svn16_135

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_136

><td class="source">		<br></td></tr
><tr
id=sl_svn16_137

><td class="source">		// style.backgroundColor = &#39;#f00&#39;; // debug<br></td></tr
><tr
id=sl_svn16_138

><td class="source">		<br></td></tr
><tr
id=sl_svn16_139

><td class="source">		appendElem.appendChild(this.div);<br></td></tr
><tr
id=sl_svn16_140

><td class="source">		<br></td></tr
><tr
id=sl_svn16_141

><td class="source">		this.div.innerHTML = this.getHTML( box.width, box.height );<br></td></tr
><tr
id=sl_svn16_142

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_143

><td class="source">	<br></td></tr
><tr
id=sl_svn16_144

><td class="source">	getHTML: function(width, height) {<br></td></tr
><tr
id=sl_svn16_145

><td class="source">		// return HTML for movie<br></td></tr
><tr
id=sl_svn16_146

><td class="source">		var html = &#39;&#39;;<br></td></tr
><tr
id=sl_svn16_147

><td class="source">		var flashvars = &#39;id=&#39; + this.id + <br></td></tr
><tr
id=sl_svn16_148

><td class="source">			&#39;&amp;width=&#39; + width + <br></td></tr
><tr
id=sl_svn16_149

><td class="source">			&#39;&amp;height=&#39; + height;<br></td></tr
><tr
id=sl_svn16_150

><td class="source">			<br></td></tr
><tr
id=sl_svn16_151

><td class="source">		if (navigator.userAgent.match(/MSIE/)) {<br></td></tr
><tr
id=sl_svn16_152

><td class="source">			// IE gets an OBJECT tag<br></td></tr
><tr
id=sl_svn16_153

><td class="source">			var protocol = location.href.match(/^https/i) ? &#39;https://&#39; : &#39;http://&#39;;<br></td></tr
><tr
id=sl_svn16_154

><td class="source">			html += &#39;&lt;object classid=&quot;clsid:d27cdb6e-ae6d-11cf-96b8-444553540000&quot; codebase=&quot;&#39;+protocol+&#39;download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0&quot; width=&quot;&#39;+width+&#39;&quot; height=&quot;&#39;+height+&#39;&quot; id=&quot;&#39;+this.movieId+&#39;&quot; align=&quot;middle&quot;&gt;&lt;param name=&quot;allowScriptAccess&quot; value=&quot;always&quot; /&gt;&lt;param name=&quot;allowFullScreen&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;movie&quot; value=&quot;&#39;+ZeroClipboard.moviePath+&#39;&quot; /&gt;&lt;param name=&quot;loop&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;menu&quot; value=&quot;false&quot; /&gt;&lt;param name=&quot;quality&quot; value=&quot;best&quot; /&gt;&lt;param name=&quot;bgcolor&quot; value=&quot;#ffffff&quot; /&gt;&lt;param name=&quot;flashvars&quot; value=&quot;&#39;+flashvars+&#39;&quot;/&gt;&lt;param name=&quot;wmode&quot; value=&quot;transparent&quot;/&gt;&lt;/object&gt;&#39;;<br></td></tr
><tr
id=sl_svn16_155

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_156

><td class="source">		else {<br></td></tr
><tr
id=sl_svn16_157

><td class="source">			// all other browsers get an EMBED tag<br></td></tr
><tr
id=sl_svn16_158

><td class="source">			html += &#39;&lt;embed id=&quot;&#39;+this.movieId+&#39;&quot; src=&quot;&#39;+ZeroClipboard.moviePath+&#39;&quot; loop=&quot;false&quot; menu=&quot;false&quot; quality=&quot;best&quot; bgcolor=&quot;#ffffff&quot; width=&quot;&#39;+width+&#39;&quot; height=&quot;&#39;+height+&#39;&quot; name=&quot;&#39;+this.movieId+&#39;&quot; align=&quot;middle&quot; allowScriptAccess=&quot;always&quot; allowFullScreen=&quot;false&quot; type=&quot;application/x-shockwave-flash&quot; pluginspage=&quot;http://www.macromedia.com/go/getflashplayer&quot; flashvars=&quot;&#39;+flashvars+&#39;&quot; wmode=&quot;transparent&quot; /&gt;&#39;;<br></td></tr
><tr
id=sl_svn16_159

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_160

><td class="source">		return html;<br></td></tr
><tr
id=sl_svn16_161

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_162

><td class="source">	<br></td></tr
><tr
id=sl_svn16_163

><td class="source">	hide: function() {<br></td></tr
><tr
id=sl_svn16_164

><td class="source">		// temporarily hide floater offscreen<br></td></tr
><tr
id=sl_svn16_165

><td class="source">		if (this.div) {<br></td></tr
><tr
id=sl_svn16_166

><td class="source">			this.div.style.left = &#39;-2000px&#39;;<br></td></tr
><tr
id=sl_svn16_167

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_168

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_169

><td class="source">	<br></td></tr
><tr
id=sl_svn16_170

><td class="source">	show: function() {<br></td></tr
><tr
id=sl_svn16_171

><td class="source">		// show ourselves after a call to hide()<br></td></tr
><tr
id=sl_svn16_172

><td class="source">		this.reposition();<br></td></tr
><tr
id=sl_svn16_173

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_174

><td class="source">	<br></td></tr
><tr
id=sl_svn16_175

><td class="source">	destroy: function() {<br></td></tr
><tr
id=sl_svn16_176

><td class="source">		// destroy control and floater<br></td></tr
><tr
id=sl_svn16_177

><td class="source">		if (this.domElement &amp;&amp; this.div) {<br></td></tr
><tr
id=sl_svn16_178

><td class="source">			this.hide();<br></td></tr
><tr
id=sl_svn16_179

><td class="source">			this.div.innerHTML = &#39;&#39;;<br></td></tr
><tr
id=sl_svn16_180

><td class="source">			<br></td></tr
><tr
id=sl_svn16_181

><td class="source">			var body = document.getElementsByTagName(&#39;body&#39;)[0];<br></td></tr
><tr
id=sl_svn16_182

><td class="source">			try { body.removeChild( this.div ); } catch(e) {;}<br></td></tr
><tr
id=sl_svn16_183

><td class="source">			<br></td></tr
><tr
id=sl_svn16_184

><td class="source">			this.domElement = null;<br></td></tr
><tr
id=sl_svn16_185

><td class="source">			this.div = null;<br></td></tr
><tr
id=sl_svn16_186

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_187

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_188

><td class="source">	<br></td></tr
><tr
id=sl_svn16_189

><td class="source">	reposition: function(elem) {<br></td></tr
><tr
id=sl_svn16_190

><td class="source">		// reposition our floating div, optionally to new container<br></td></tr
><tr
id=sl_svn16_191

><td class="source">		// warning: container CANNOT change size, only position<br></td></tr
><tr
id=sl_svn16_192

><td class="source">		if (elem) {<br></td></tr
><tr
id=sl_svn16_193

><td class="source">			this.domElement = ZeroClipboard.$(elem);<br></td></tr
><tr
id=sl_svn16_194

><td class="source">			if (!this.domElement) this.hide();<br></td></tr
><tr
id=sl_svn16_195

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_196

><td class="source">		<br></td></tr
><tr
id=sl_svn16_197

><td class="source">		if (this.domElement &amp;&amp; this.div) {<br></td></tr
><tr
id=sl_svn16_198

><td class="source">			var box = ZeroClipboard.getDOMObjectPosition(this.domElement);<br></td></tr
><tr
id=sl_svn16_199

><td class="source">			var style = this.div.style;<br></td></tr
><tr
id=sl_svn16_200

><td class="source">			style.left = &#39;&#39; + box.left + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_201

><td class="source">			style.top = &#39;&#39; + box.top + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn16_202

><td class="source">		}<br></td></tr
><tr
id=sl_svn16_203

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_204

><td class="source">	<br></td></tr
><tr
id=sl_svn16_205

><td class="source">	setText: function(newText) {<br></td></tr
><tr
id=sl_svn16_206

><td class="source">		// set text to be copied to clipboard<br></td></tr
><tr
id=sl_svn16_207

><td class="source">		this.clipText = newText;<br></td></tr
><tr
id=sl_svn16_208

><td class="source">		if (this.ready) this.movie.setText(newText);<br></td></tr
><tr
id=sl_svn16_209

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_210

><td class="source">	<br></td></tr
><tr
id=sl_svn16_211

><td class="source">	addEventListener: function(eventName, func) {<br></td></tr
><tr
id=sl_svn16_212

><td class="source">		// add user event listener for event<br></td></tr
><tr
id=sl_svn16_213

><td class="source">		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel<br></td></tr
><tr
id=sl_svn16_214

><td class="source">		eventName = eventName.toString().toLowerCase().replace(/^on/, &#39;&#39;);<br></td></tr
><tr
id=sl_svn16_215

><td class="source">		if (!this.handlers[eventName]) this.handlers[eventName] = [];<br></td></tr
><tr
id=sl_svn16_216

><td class="source">		this.handlers[eventName].push(func);<br></td></tr
><tr
id=sl_svn16_217

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_218

><td class="source">	<br></td></tr
><tr
id=sl_svn16_219

><td class="source">	setHandCursor: function(enabled) {<br></td></tr
><tr
id=sl_svn16_220

><td class="source">		// enable hand cursor (true), or default arrow cursor (false)<br></td></tr
><tr
id=sl_svn16_221

><td class="source">		this.handCursorEnabled = enabled;<br></td></tr
><tr
id=sl_svn16_222

><td class="source">		if (this.ready) this.movie.setHandCursor(enabled);<br></td></tr
><tr
id=sl_svn16_223

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_224

><td class="source">	<br></td></tr
><tr
id=sl_svn16_225

><td class="source">	setCSSEffects: function(enabled) {<br></td></tr
><tr
id=sl_svn16_226

><td class="source">		// enable or disable CSS effects on DOM container<br></td></tr
><tr
id=sl_svn16_227

><td class="source">		this.cssEffects = !!enabled;<br></td></tr
><tr
id=sl_svn16_228

><td class="source">	},<br></td></tr
><tr
id=sl_svn16_229

><td class="source">	<br></td></tr
><tr
id=sl_svn16_230

><td class="source">	receiveEvent: function(eventName, args) {<br></td></tr
><tr
id=sl_svn16_231

><td class="source">		// receive event from flash<br></td></tr
><tr
id=sl_svn16_232

><td class="source">		eventName = eventName.toString().toLowerCase().replace(/^on/, &#39;&#39;);<br></td></tr
><tr
id=sl_svn16_233

><td class="source">				<br></td></tr
><tr
id=sl_svn16_234

><td class="source">		// special behavior for certain events<br></td></tr
><tr
id=sl_svn16_235

><td class="source">		switch (eventName) {<br></td></tr
><tr
id=sl_svn16_236

><td class="source">			case &#39;load&#39;:<br></td></tr
><tr
id=sl_svn16_237

><td class="source">				// movie claims it is ready, but in IE this isn&#39;t always the case...<br></td></tr
><tr
id=sl_svn16_238

><td class="source">				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function<br></td></tr
><tr
id=sl_svn16_239

><td class="source">				this.movie = document.getElementById(this.movieId);<br></td></tr
><tr
id=sl_svn16_240

><td class="source">				if (!this.movie) {<br></td></tr
><tr
id=sl_svn16_241

><td class="source">					var self = this;<br></td></tr
><tr
id=sl_svn16_242

><td class="source">					setTimeout( function() { self.receiveEvent(&#39;load&#39;, null); }, 1 );<br></td></tr
><tr
id=sl_svn16_243

><td class="source">					return;<br></td></tr
><tr
id=sl_svn16_244

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_245

><td class="source">				<br></td></tr
><tr
id=sl_svn16_246

><td class="source">				// firefox on pc needs a &quot;kick&quot; in order to set these in certain cases<br></td></tr
><tr
id=sl_svn16_247

><td class="source">				if (!this.ready &amp;&amp; navigator.userAgent.match(/Firefox/) &amp;&amp; navigator.userAgent.match(/Windows/)) {<br></td></tr
><tr
id=sl_svn16_248

><td class="source">					var self = this;<br></td></tr
><tr
id=sl_svn16_249

><td class="source">					setTimeout( function() { self.receiveEvent(&#39;load&#39;, null); }, 100 );<br></td></tr
><tr
id=sl_svn16_250

><td class="source">					this.ready = true;<br></td></tr
><tr
id=sl_svn16_251

><td class="source">					return;<br></td></tr
><tr
id=sl_svn16_252

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_253

><td class="source">				<br></td></tr
><tr
id=sl_svn16_254

><td class="source">				this.ready = true;<br></td></tr
><tr
id=sl_svn16_255

><td class="source">				this.movie.setText( this.clipText );<br></td></tr
><tr
id=sl_svn16_256

><td class="source">				this.movie.setHandCursor( this.handCursorEnabled );<br></td></tr
><tr
id=sl_svn16_257

><td class="source">				break;<br></td></tr
><tr
id=sl_svn16_258

><td class="source">			<br></td></tr
><tr
id=sl_svn16_259

><td class="source">			case &#39;mouseover&#39;:<br></td></tr
><tr
id=sl_svn16_260

><td class="source">				if (this.domElement &amp;&amp; this.cssEffects) {<br></td></tr
><tr
id=sl_svn16_261

><td class="source">					this.domElement.addClass(&#39;hover&#39;);<br></td></tr
><tr
id=sl_svn16_262

><td class="source">					if (this.recoverActive) this.domElement.addClass(&#39;active&#39;);<br></td></tr
><tr
id=sl_svn16_263

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_264

><td class="source">				break;<br></td></tr
><tr
id=sl_svn16_265

><td class="source">			<br></td></tr
><tr
id=sl_svn16_266

><td class="source">			case &#39;mouseout&#39;:<br></td></tr
><tr
id=sl_svn16_267

><td class="source">				if (this.domElement &amp;&amp; this.cssEffects) {<br></td></tr
><tr
id=sl_svn16_268

><td class="source">					this.recoverActive = false;<br></td></tr
><tr
id=sl_svn16_269

><td class="source">					if (this.domElement.hasClass(&#39;active&#39;)) {<br></td></tr
><tr
id=sl_svn16_270

><td class="source">						this.domElement.removeClass(&#39;active&#39;);<br></td></tr
><tr
id=sl_svn16_271

><td class="source">						this.recoverActive = true;<br></td></tr
><tr
id=sl_svn16_272

><td class="source">					}<br></td></tr
><tr
id=sl_svn16_273

><td class="source">					this.domElement.removeClass(&#39;hover&#39;);<br></td></tr
><tr
id=sl_svn16_274

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_275

><td class="source">				break;<br></td></tr
><tr
id=sl_svn16_276

><td class="source">			<br></td></tr
><tr
id=sl_svn16_277

><td class="source">			case &#39;mousedown&#39;:<br></td></tr
><tr
id=sl_svn16_278

><td class="source">				if (this.domElement &amp;&amp; this.cssEffects) {<br></td></tr
><tr
id=sl_svn16_279

><td class="source">					this.domElement.addClass(&#39;active&#39;);<br></td></tr
><tr
id=sl_svn16_280

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_281

><td class="source">				break;<br></td></tr
><tr
id=sl_svn16_282

><td class="source">			<br></td></tr
><tr
id=sl_svn16_283

><td class="source">			case &#39;mouseup&#39;:<br></td></tr
><tr
id=sl_svn16_284

><td class="source">				if (this.domElement &amp;&amp; this.cssEffects) {<br></td></tr
><tr
id=sl_svn16_285

><td class="source">					this.domElement.removeClass(&#39;active&#39;);<br></td></tr
><tr
id=sl_svn16_286

><td class="source">					this.recoverActive = false;<br></td></tr
><tr
id=sl_svn16_287

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_288

><td class="source">				break;<br></td></tr
><tr
id=sl_svn16_289

><td class="source">		} // switch eventName<br></td></tr
><tr
id=sl_svn16_290

><td class="source">		<br></td></tr
><tr
id=sl_svn16_291

><td class="source">		if (this.handlers[eventName]) {<br></td></tr
><tr
id=sl_svn16_292

><td class="source">			for (var idx = 0, len = this.handlers[eventName].length; idx &lt; len; idx++) {<br></td></tr
><tr
id=sl_svn16_293

><td class="source">				var func = this.handlers[eventName][idx];<br></td></tr
><tr
id=sl_svn16_294

><td class="source">			<br></td></tr
><tr
id=sl_svn16_295

><td class="source">				if (typeof(func) == &#39;function&#39;) {<br></td></tr
><tr
id=sl_svn16_296

><td class="source">					// actual function reference<br></td></tr
><tr
id=sl_svn16_297

><td class="source">					func(this, args);<br></td></tr
><tr
id=sl_svn16_298

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_299

><td class="source">				else if ((typeof(func) == &#39;object&#39;) &amp;&amp; (func.length == 2)) {<br></td></tr
><tr
id=sl_svn16_300

><td class="source">					// PHP style object + method, i.e. [myObject, &#39;myMethod&#39;]<br></td></tr
><tr
id=sl_svn16_301

><td class="source">					func[0][ func[1] ](this, args);<br></td></tr
><tr
id=sl_svn16_302

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_303

><td class="source">				else if (typeof(func) == &#39;string&#39;) {<br></td></tr
><tr
id=sl_svn16_304

><td class="source">					// name of function<br></td></tr
><tr
id=sl_svn16_305

><td class="source">					window[func](this, args);<br></td></tr
><tr
id=sl_svn16_306

><td class="source">				}<br></td></tr
><tr
id=sl_svn16_307

><td class="source">			} // foreach event handler defined<br></td></tr
><tr
id=sl_svn16_308

><td class="source">		} // user defined handler for event<br></td></tr
><tr
id=sl_svn16_309

><td class="source">	}<br></td></tr
><tr
id=sl_svn16_310

><td class="source">	<br></td></tr
><tr
id=sl_svn16_311

><td class="source">};<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn16_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn16_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta('', 'p', 'zeroclipboard', this)">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta('', 'p', 'zeroclipboard', this)">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/zeroclipboard/source/detail?spec=svn16&amp;r=15">r15</a>
 by jhuckaby
 on Mar 14, 2010
 &nbsp; <a href="/p/zeroclipboard/source/diff?spec=svn16&r=15&amp;format=side&amp;path=/trunk/ZeroClipboard.js&amp;old_path=/trunk/ZeroClipboard.js&amp;old=13">Diff</a>
 </div>
 <pre>version 1.0.7, with support for rich html
copy in fp10 only</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/zeroclipboard/source/detail?r=15&spec=svn16';
 var publish_url = '/p/zeroclipboard/source/detail?r=15&spec=svn16#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/ZeroClipboard.js');
 changed_urls.push('/p/zeroclipboard/source/browse/trunk/ZeroClipboard.js?r\x3d15\x26spec\x3dsvn16');
 
 var selected_path = '/trunk/ZeroClipboard.js';
 
 
 changed_paths.push('/trunk/ZeroClipboard10.as');
 changed_urls.push('/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.as?r\x3d15\x26spec\x3dsvn16');
 
 
 changed_paths.push('/trunk/ZeroClipboard10.fla');
 changed_urls.push('/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.fla?r\x3d15\x26spec\x3dsvn16');
 
 
 changed_paths.push('/trunk/ZeroClipboard10.swf');
 changed_urls.push('/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.swf?r\x3d15\x26spec\x3dsvn16');
 
 
 changed_paths.push('/trunk/test.html');
 changed_urls.push('/p/zeroclipboard/source/browse/trunk/test.html?r\x3d15\x26spec\x3dsvn16');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/zeroclipboard/source/browse/trunk/ZeroClipboard.js?r=15&amp;spec=svn16"
 selected="selected"
 >/trunk/ZeroClipboard.js</option>
 
 <option value="/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.as?r=15&amp;spec=svn16"
 
 >/trunk/ZeroClipboard10.as</option>
 
 <option value="/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.fla?r=15&amp;spec=svn16"
 
 >/trunk/ZeroClipboard10.fla</option>
 
 <option value="/p/zeroclipboard/source/browse/trunk/ZeroClipboard10.swf?r=15&amp;spec=svn16"
 
 >/trunk/ZeroClipboard10.swf</option>
 
 <option value="/p/zeroclipboard/source/browse/trunk/test.html?r=15&amp;spec=svn16"
 
 >/trunk/test.html</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/zeroclipboard/source/detail?spec=svn16&r=13">r13</a>
 by jhuckaby
 on Mar 1, 2010
 &nbsp; <a href="/p/zeroclipboard/source/diff?spec=svn16&r=13&amp;format=side&amp;path=/trunk/ZeroClipboard.js&amp;old_path=/trunk/ZeroClipboard.js&amp;old=11">Diff</a>
 <br>
 <pre class="ifOpened">v1.0.6.  Fixed bugs in removeClass().</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/zeroclipboard/source/detail?spec=svn16&r=11">r11</a>
 by jhuckaby
 on Oct 30, 2009
 &nbsp; <a href="/p/zeroclipboard/source/diff?spec=svn16&r=11&amp;format=side&amp;path=/trunk/ZeroClipboard.js&amp;old_path=/trunk/ZeroClipboard.js&amp;old=10">Diff</a>
 <br>
 <pre class="ifOpened">now able to glue using relative
parent, for exact positioning</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/zeroclipboard/source/detail?spec=svn16&r=10">r10</a>
 by jhuckaby
 on Jan 13, 2009
 &nbsp; <a href="/p/zeroclipboard/source/diff?spec=svn16&r=10&amp;format=side&amp;path=/trunk/ZeroClipboard.js&amp;old_path=/trunk/ZeroClipboard.js&amp;old=9">Diff</a>
 <br>
 <pre class="ifOpened">added cross-domain support, thanks to
Imad</pre>
 </div>
 
 
 <a href="/p/zeroclipboard/source/list?path=/trunk/ZeroClipboard.js&start=15">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 9784 bytes,
 311 lines</div>
 
 <div><a href="//zeroclipboard.googlecode.com/svn/trunk/ZeroClipboard.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:executable</dt>
 <dd>*</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/7727387916593379202/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/7727387916593379202/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/7727387916593379202/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn16': '/trunk/ZeroClipboard.js'}
 codereviews = CR_controller.setup(
 {"assetHostPath":"http://www.gstatic.com/codesite/ph","projectName":"zeroclipboard","projectHomeUrl":"/p/zeroclipboard","urlPrefix":"p","domainName":null,"relativeBaseUrl":"","profileUrl":["/u/@VRFeRlNSARNAWwJ0/"],"token":"6e1e2218b6f7ff04eb0cf14d7f837fce","assetVersionPath":"http://www.gstatic.com/codesite/ph/7727387916593379202","absoluteBaseUrl":"http://code.google.com","loggedInUserEmail":"jmfluxa@gmail.com"}, '', 'svn16', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/7727387916593379202/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/7727387916593379202/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

