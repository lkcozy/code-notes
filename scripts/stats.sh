#!/bin/sh

git fetch origin

folder='notes/'
count_length='wc -l'

getCount() {
    name=$1
    time=$2
    count=$(git diff --name-only "@{$time ago}" $folder | $count_length)
    echo "::set-output name=${name}::$count"
    return $count
}

TODAY=$(git diff --name-only $folder | $count_length)
echo "::set-output name=today::$TODAY"

getCount week '1 week'
WEEK=$?

getCount month '1 month'
MONTH=$?

getCount year '1 year'
YEAR=$?

TOTAL=$(git ls-files $folder | $count_length)
echo "::set-output name=total::$TOTAL"

NOW=$(date +"%Y-%m-%d")
SUMMARY="Summary($NOW);Today: $TODAY;LAST 7d: $WEEK;Last Month: $MONTH;Last Year: $YEAR;Total: ${TOTAL}"
echo "::set-output name=summary::$SUMMARY"
