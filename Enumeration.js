// 继承函数
function inherit(p) {
  if (p === null) throw TypeError();
  if (Object.create) {
    return Object.create(p);
  }
  const t = typeof p;
  if (t !== "object" && t !== "function") {
    throw TypeError();
  }
  function F() {}
  F.prototype = p;
  return new F();
}

// 枚举类
export default function enumeration(namesToValues) {
  const enumeration = function() {
    throw "Can't Instantiate Enumerations";
  };

  const proto = enumeration.prototype = {
    toString: function() { return this.name; },
    valueOf: function() { return this.value; },
  };

  enumeration.values = []; // 用于存放枚举对象数组
  for (let name in namesToValues) {
    if (!Object.hasOwnProperty.call(namesToValues, name)) {
      continue;
    }
    const e = inherit(proto);
    e.name = name; // 设置对象name
    e.value = namesToValues[name]; // 设置对象的值
    enumeration[name] = e; // 将对象设置为构造函数的属性
    enumeration.values.push(e);
  }

  // 添加遍历方法
  enumeration.foreach = function(f, c) {
    for (let i = 0; i < this.values.length; i++) {
      f.call(c, this.values[i]);
    }
  };

  return enumeration;
}