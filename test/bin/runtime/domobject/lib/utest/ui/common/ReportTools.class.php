<?php

class utest_ui_common_ReportTools {
	public function __construct(){}
	static function hasHeader($report, $stats) {
		$GLOBALS['%s']->push("utest.ui.common.ReportTools::hasHeader");
		$�spos = $GLOBALS['%s']->length;
		$�t = ($report->displayHeader);
		switch($�t->index) {
		case 1:
		{
			{
				$GLOBALS['%s']->pop();
				return false;
				;
			}
			;
		}break;
		case 2:
		{
			if(!$stats->isOk) {
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			$�t2 = ($report->displaySuccessResults);
			switch($�t2->index) {
			case 1:
			{
				{
					$GLOBALS['%s']->pop();
					return false;
					;
				}
				;
			}break;
			case 0:
			case 2:
			{
				{
					$GLOBALS['%s']->pop();
					return true;
					;
				}
				;
			}break;
			}
			;
		}break;
		case 0:
		{
			{
				$GLOBALS['%s']->pop();
				return true;
				;
			}
			;
		}break;
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function skipResult($report, $stats, $isOk) {
		$GLOBALS['%s']->push("utest.ui.common.ReportTools::skipResult");
		$�spos = $GLOBALS['%s']->length;
		if(!$stats->isOk) {
			$GLOBALS['%s']->pop();
			return false;
			;
		}
		{
			$�tmp = utest_ui_common_ReportTools_0($isOk, $report, $stats);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	static function hasOutput($report, $stats) {
		$GLOBALS['%s']->push("utest.ui.common.ReportTools::hasOutput");
		$�spos = $GLOBALS['%s']->length;
		if(!$stats->isOk) {
			$GLOBALS['%s']->pop();
			return true;
			;
		}
		{
			$�tmp = utest_ui_common_ReportTools::hasHeader($report, $stats);
			$GLOBALS['%s']->pop();
			return $�tmp;
			unset($�tmp);
		}
		$GLOBALS['%s']->pop();
		unset($�spos);
	}
	function __toString() { return 'utest.ui.common.ReportTools'; }
}
;
function utest_ui_common_ReportTools_0(&$isOk, &$report, &$stats) {
	$GLOBALS['%s']->push('utest.ui.common.ReportTools:lambda_0');
	$�spos = $GLOBALS['%s']->length;
$�t = ($report->displaySuccessResults);
switch($�t->index) {
case 1:
{
	return true;
	;
}break;
case 0:
{
	return false;
	;
}break;
case 2:
{
	return !$isOk;
	;
}break;
}
}