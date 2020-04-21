export default {
    easeIn: t => {
        const points = {
            p1: [0,0],
            p2: [.42,0],
            p3: [1,1]
        }
        // two functions below from user AKX @
        // https://stackoverflow.com/questions/9194558/center-point-on-html-quadratic-curve
        function _getQBezierValue(t, p1, p2, p3) {
            var iT = 1 - t;
            return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
        }
        
        function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
            return {
                x:  _getQBezierValue(position, startX, cpX, endX),
                y:  _getQBezierValue(position, startY, cpY, endY)
            };
        }
        return getQuadraticCurvePoint(points.p1[0], points.p1[1], points.p2[0], points.p2[1], points.p3[0], points.p3[1], t)
    },
}