import { useRef, useEffect, useState } from 'react';

var useInterval = function (callback, shouldRun, interval) {
    var callbackRef = useRef(callback);
    useEffect(function () {
        callbackRef.current = callback;
    }, [callbackRef]);
    useEffect(function () {
        if (!shouldRun) {
            return;
        }
        var intervalId = setInterval(function () { return callbackRef.current(); }, interval);
        return function () { return clearInterval(intervalId); };
    }, [interval, shouldRun]);
};

var usePleaseStay = function (titles) {
    var _a = useState(false), shouldIterateTitles = _a[0], setShouldIterateTitles = _a[1];
    var _b = useState(0), currentTitleIndex = _b[0], setCurrentTitleIndex = _b[1];
    var handelVisibilityChange = function () {
        setShouldIterateTitles(document.visibilityState !== "visible");
    };
    useEffect(function () {
        // Runs on mount
        document.addEventListener("visibilitychange", handelVisibilityChange);
        return function () {
            // Runs on unmount
            document.removeEventListener("visibilitychange", handelVisibilityChange);
        };
    }, []);
    useInterval(function () {
        setShouldIterateTitles(true);
        setCurrentTitleIndex(function (prev) {
            return prev + 1 === titles.length ? 0 : prev + 1;
        });
    }, shouldIterateTitles, 1000);
    useEffect(function () {
        document.title = titles[currentTitleIndex];
    }, [titles, currentTitleIndex]);
};

export { usePleaseStay };
//# sourceMappingURL=index.js.map
