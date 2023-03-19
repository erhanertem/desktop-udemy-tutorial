"use strict";
const rgbColor = [255, 0, 12];
const goodRes = [200, 'OK'];
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
console.log(myStatus);
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
const pressed = {
    pressedDateTime: new Date(),
    status: ArrowKeys.UP,
};
console.log(pressed);
//# sourceMappingURL=exercises.js.map