const easeInPoints = {
    p1: [0,0],
    p2: [.42,0],
    p3: [1,1]
}
// TODO: add in points for ease and ease-out 
// (ease requires more control points, which the functions below don't currently accept)

export default {
    easeIn: t => {
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
        return getQuadraticCurvePoint(easeInPoints.p1[0], easeInPoints.p1[1], easeInPoints.p2[0], easeInPoints.p2[1], easeInPoints.p3[0], easeInPoints.p3[1], t)
    },
}