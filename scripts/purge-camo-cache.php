<?php

$time_start = microtime(true);

echo 'Purging GitHub Camo cache for Hyde Framework badges', PHP_EOL;

echo 'Downloading Readme.md from GitHub', PHP_EOL;
$readme = file_get_contents('https://github.com/hydephp/framework/blob/master/README.md');
//$readme = file_get_contents('cache.html');

echo 'Parsing Readme.md for GitHub badges', PHP_EOL;

$camoLinks = [];
// Make sure each image is on its own line
$readme = str_replace('<img src="', "\n<img src=\"", $readme);
$lines = explode("\n", $readme);
function parseLine(string $line): string
{
    // remove everything before https://camo.githubusercontent.com/
    $link = substr($line, strpos($line, 'https://camo.githubusercontent.com/'));
    // remove everything after the first "
    return substr($link, 0, strpos($link, '"'));
}

foreach ($lines as $line) {
    if (! str_contains($line, 'https://camo.githubusercontent.com/')) {
        continue;
    }
    $camoLinks[] = ($link = parseLine($line));
    echo 'Found line containing Camo link: ', $link, PHP_EOL;
}

echo "Sending PURGE requests to Camo", PHP_EOL;

function purge(string $uri): void
{
    echo "Purging $uri", PHP_EOL;
    echo shell_exec('curl -w "\n" -s -X PURGE ' . $uri);
}

foreach ($camoLinks as $uri) {
    purge($uri);
}

$time_end = microtime(true);
$time = $time_end - $time_start;
$milliseconds = round($time * 1000);

echo 'Completed in ' . $milliseconds . 'ms', PHP_EOL;

return exit(0);