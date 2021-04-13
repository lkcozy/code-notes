#!/bin/sh

getCount() {
    name=$1
    time=$2
    count=$(git diff --name-only "@{$time ago}" notes/ | wc -l) echo "::set-output name=${name}::$count" return $count
}
getCount today '1 day'
TODAY=$?
getCount week '1 week'
WEEK=$?
getCount month '1 month'
MONTH=$?
getCount year '1 year'
YEAR=$?
TOTAL=$(git ls-files notes | wc -l)

NOW=$(date +"%Y-%m-%d")
SUMMARY="Summary($NOW);Today: $TODAY;LAST 7d: $WEEK;Last Month: $MONTH;Last Year: $YEAR;Total: ${TOTAL}"
echo "::set-output name=summary::$SUMMARY"
