<?xml version="1.0" encoding="shift_jis"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html lang="ja" xml:lang="ja" xmlns="http://www.w3.org/1999/xhtml">

<!-- InstanceBegin template="movietemplate.htt" -->

<head>
<meta http-equiv="content-type" content="text/html;charset=shift_jis" />
<title>BREEZE HAWAII</title>
<!-- #BeginHeadLocked "" -->
<link href="style.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="javascript.js"></script>
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
if ($_GET['s']) echo <<<ED
<object data="playOptionalMovie.swf?srcFile={$_GET['s']}"
 type="application/x-shockwave-flash" class="flash_movie">
<param name="movie" value="playOptionalMovie.swf?srcFile={$_GET['s']}" />
<param name="quality" value="high" />
<param name="play" value="true" />
<embed src=playOptionalMovie.swf?srcFile={$_GET['s']}" class="flash_movie" />
</object>
ED;
?><!-- InstanceEndEditable --><input type="button" value="閉じる" onclick="closeMovie();" /></div>
</body>

<!-- InstanceEnd -->

</html>