<?xml version="1.0" encoding="shift_jis"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html lang="ja" xml:lang="ja" xmlns="http://www.w3.org/1999/xhtml">

<!-- InstanceBegin template="movietemplate.htt" -->

<head>
<meta http-equiv="content-type" content="text/html;charset=shift_jis" />
<title>BREEZE HAWAII</title>
<!-- #BeginHeadLocked "" -->
<link href="base.css" rel="stylesheet" type="text/css" media="all" />
<link href="contents.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="flv.js"></script>
<style type="text/css" media="screen"><!--
body{
padding:10px;
}
--></style>
<!-- #EndHeadLocked -->
</head>

<body onblur="closeMovie();" onunload="closeMovie();">
<div class="alc">
<!-- InstanceBeginEditable name="Region" --><?php
if (is_file('flv/'.$_GET['s'].'.flv')) echo <<<ED
<object data="flv/playMovie.swf?srcFile={$_GET['s']}"
 type="application/x-shockwave-flash" class="flash_movie">
<param name="movie" value="flv/playMovie.swf?srcFile={$_GET['s']}" />
<param name="quality" value="high" />
<param name="play" value="true" />
<embed src="flv/playMovie.swf?srcFile={$_GET['s']}" class="flash_movie" />
</object>
ED;
?><!-- InstanceEndEditable --><input type="button" value="閉じる" onclick="closeMovie();" /></div>
</body>

<!-- InstanceEnd -->

</html>