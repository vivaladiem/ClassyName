"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassyName_1 = require("./ClassyName");
console.log("클래시네임 테스트");
console.log("InputForm 블록을 생성한다.");
let classyName = new ClassyName_1.default("Input");
console.log(classyName.getResult());
console.log("엘리먼트를 지정한다.");
classyName.element("Label");
console.log(classyName.getResult());
console.log("modifier를 지정한다");
classyName.modifier("green");
console.log(classyName.getResult());
console.log("modifier와 그 값을 지정한다.");
classyName.modifier("size", "l");
console.log(classyName.getResult());
console.log("modifier value에 없는 값을 넣을 때");
classyName.modifier("color", undefined);
console.log(classyName.getResult());
console.log("element delimiter를 변경한다");
classyName.setElementDelimiter("____");
console.log(classyName.getResult());
console.log("modifier delimiter를 변경한다");
classyName.setModifierDelimiter("_");
console.log(classyName.getResult());
console.log("종료하려면 아무거나 입력 후 엔터를 누르세요.");
process.stdin.read(0); // 꺼짐 방지
//# sourceMappingURL=app.js.map